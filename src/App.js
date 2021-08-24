import MainNavigation from "./components/MainNavigation/MainNavigation";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/home";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div style={{overflow: "hidden"}}>
      <MainNavigation />
      <div style={{position:"absolute", width:"100%", height:"80vh", top:"20vh"}}>
      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/gallery'>
          <Gallery />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/about'>
          <AboutMe />
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;

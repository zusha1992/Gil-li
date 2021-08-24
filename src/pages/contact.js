import ContactForm from "../components/ContactForm/ContactForm";
import classes from "./contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FaFacebookF } from 'react-icons/fa';

function Contact() {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.text}>
        <ContactForm />
      </div>
      <div className={classes.details}>
        <div>
          <FaFacebookF className={classes.icons}/> GilliAlon
        </div>
        <div>
          <FontAwesomeIcon icon={faPhoneAlt} className={classes.icons} /> +972
          547-452-207
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} className={classes.icons} />{" "}
          Giladshreiber60@gmail.com
        </div>
      </div>
    </div>
  );
}

export default Contact;

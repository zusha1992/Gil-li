import classes from "./ContactForm.module.scss";
import { useRef } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function ContactForm(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  const messageInputRef = useRef();

  function cleanForm() {
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    subjectInputRef.current.value = "";
    messageInputRef.current.value = "";
  }

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredSubject = subjectInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const formData = {
      fullName: enteredName,
      email: enteredEmail,
      subject: enteredSubject,
      massege: enteredMessage,
    };
    console.log(formData);
    cleanForm();
  }

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Full Name</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Mail Address</label>
          <input type='email' required id='email' ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='Subject'>Subject</label>
          <input type='text' required id='Subject' ref={subjectInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='massege'>massege</label>
          <textarea
            id='massege'
            required
            rows='5'
            ref={messageInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button><FontAwesomeIcon icon={faPaperPlane}/></button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

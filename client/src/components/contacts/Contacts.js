import React, { useContext, Fragment, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";
import ContactsItem from "./ContactsItem";
import {TransitionGroup, CSSTransition } from "react-transition-group";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered,getContacts,loading } = contactContext;


  // Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;


  useEffect(() => {
   getContacts();
   //eslint-disable-next-line
  }, [])


  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ?(<TransitionGroup>
        {filtered !== null
          ? filtered.map((contact) => (
              <CSSTransition key={contact._id} timeout={500} classNames="item">
              <ContactsItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
            <CSSTransition key={contact._id} timeout={600} classNames="item">
              <ContactsItem  contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>):<ClipLoader 
          color={"#123abc"}
          css={override}
          loading={true}/>}
      
    </Fragment>
  );
};

export default Contacts;

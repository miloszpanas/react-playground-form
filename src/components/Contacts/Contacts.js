import React, { Component, Fragment } from "react";
import Contact from "./Contact";

import { Consumer } from "../../context";

export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        { value => {
          const { contacts } = value;
          return (
            <Fragment>
              {contacts.map(contact => (
                <Contact 
                  key={contact.id} 
                  data={contact} 
                />
              ))}
            </Fragment>
          )
        }}
      </Consumer>
    );
  }
}

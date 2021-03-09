import React from "react";
import "./styles.css";
import ContactCard from "./ContactCard";
import contactData from "./contactData";

export default function App() {
  const cardComponent = contactData.map(function (contacts) {
    return <ContactCard contact={contacts} />;
  });

  return <div>{cardComponent}</div>;
}

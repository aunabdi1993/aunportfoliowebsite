import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import ContactForm from '../Contact/ContactForm'

const contact = () => {

  return (
    <Section>
      <SectionTitle>Contact Me</SectionTitle>
      <SectionText>Use the form below to contact me.</SectionText>
      <ContactForm />
    </Section>
  )
};

export default contact;


import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
    <br />
    <br />
     <SectionTitle>Technologies</SectionTitle>
     <SectionText>I've worked with a range of technologies in web-development. From back-end, to front-end as well as design.</SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem" />
      <br />
      <ListContainer>
        <ListTitle>Front-end</ListTitle>
        <ListParagraph>Experience with <br />
        HTML, CSS, React.js, <br />jQuery</ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem" />
      <br />
      <ListContainer>
        <ListTitle>Back-end</ListTitle>
        <ListParagraph>Experience with <br />
        Node.js, PHP, SQL & AWS Certified</ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiZend size="3rem" />
      <br />
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>Experience with <br />
        tools like UXPin & Figma</ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
 </Section>
);

export default Technologies;

import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
    <br />
    <br />
    <br />
     <SectionTitle>Technologies</SectionTitle>
     <SectionText>I've worked with a range of technologies in web-development. From back-end, to front-end as well as design.</SectionText>
  <List>
    <ListItem>
      <DiReact color= "white" size="4rem" />
      <br />
      <ListContainer>
        <ListTitle>Front-end</ListTitle>
        <ListParagraph>Experience with <br />
        HTML, CSS, React.js, jQuery<br /> and Next.js</ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase color= "white" size="4rem" />
      <br />
      <ListContainer>
        <ListTitle>Back-end</ListTitle>
        <ListParagraph>Experience with <br />
        Node.js, Python,PHP, SQL</ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiZend color= "white" size="4rem" />
      <br />
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>Experience with <br />
        tools like Adobe CS & UXPin </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
 </Section>
);

export default Technologies;

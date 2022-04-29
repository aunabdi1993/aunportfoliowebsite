import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello my name is 
        <br />
        Aun Abdi. 
        <br />
        Welcome to my Portfolio Website. 
      </SectionTitle>
      <SectionText>
        I'm a Full-Stack Developer aspiring to create the most beautiful and well-structured web applications possible.
      </SectionText>
      <Button onClick={() => window.location = '#projects'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
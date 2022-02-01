import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: +447824362107">(+44) 7824362107</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:aabdidevelopment@gmail.com">aabdidevelopment@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>“Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will.” <br /><br />George Bernard Shaw</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/aunabdi1993">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/aun-abdi-50785780/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.youtube.com/c/AunAbdi/videos">
        <AiFillYoutube size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/aun.abdi/?hl=en">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>  );
};

export default Footer;

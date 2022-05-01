import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineAudio} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>“Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will.” <br /><br />George Bernard Shaw</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/aunabdi1993" target="blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/aun-abdi-50785780/" target="blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.youtube.com/c/AunAbdi/videos" target="blank">
        <AiFillYoutube size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/aun.abdi/?hl=en" target="blank">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://podcasts.apple.com/gb/podcast/book-talk-today/id1525619296" target="blank">
        <AiOutlineAudio size="3rem" />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>  );
};

export default Footer;

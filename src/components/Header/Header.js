import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineAudio } from 'react-icons/ai';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import LinkSmoothScroll from './LinkSmoothScroll';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
          <Span>Aun Abdi</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <LinkSmoothScroll href="#projects">
          <NavLink>Projects</NavLink>
        </LinkSmoothScroll>
      </li>
      <li>
        <LinkSmoothScroll href="#tech">
          <NavLink>Technologies</NavLink>
        </LinkSmoothScroll>
      </li>
      <li>
        <LinkSmoothScroll href="#about">
          <NavLink>About</NavLink>
        </LinkSmoothScroll>
      </li>
      <li>
        <LinkSmoothScroll href="#contact">
          <NavLink>Contact</NavLink>
        </LinkSmoothScroll>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;

import React from 'react';
import { FaLinkedin, FaGithub, FaTelegram, FaInstagram } from 'react-icons/fa';
import { FooterContainer, TextWrapper, IconLink, Text } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <TextWrapper>
        <Text>
          If you liked my work or want to see more of my projects, feel free to
          connect with me:
        </Text>
      </TextWrapper>
      <div>
        <IconLink href="https://www.linkedin.com/" target="_blank">
          <FaLinkedin size={30} />
        </IconLink>
        <IconLink href="https://github.com/" target="_blank">
          <FaGithub size={30} />
        </IconLink>
        <IconLink href="https://telegram.org/" target="_blank">
          <FaTelegram size={30} />
        </IconLink>
        <IconLink href="https://www.instagram.com/" target="_blank">
          <FaInstagram size={30} />
        </IconLink>
      </div>
    </FooterContainer>
  );
};

export default Footer;

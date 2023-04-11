import React from 'react';
import styled from 'styled-components';
import O from '../../assets/o.png';

const AboutUsContainer = styled.div`
  background-color: transparent;
  color: #ffffff;
  padding: 50px;
  
  display: flex;
  flex-direction: row;
`;

const ImageContainer = styled.div`
  flex-basis: 50%;
`;

const Image = styled.img`
  width: 40%;
  border-radius: 50%;
  border: 5px solid #ffffff;`

const TextContainer = styled.div`
  flex-basis: 50%;
  padding-left: 50px;
`;

const Heading = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: left;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: left;

`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <ImageContainer>
        <Image src={O} alt="your-alt-text-here" />
      </ImageContainer>
      <TextContainer>
        <Heading>About Me</Heading>
        <Paragraph>
        As a skilled frontend developer with over 10 years of experience in HTML, CSS, JavaScript, React, and Next.js, I understand that every project is unique and demands a personalized approach. That's why I collaborate closely with my clients to gain a thorough understanding of their specific needs and objectives. By doing so, I deliver customized solutions that surpass their expectations and provide optimal results.
        </Paragraph>
        <Paragraph>
        My commitment to excellence, innovative mindset, and attention to detail make me a valuable asset to any organization seeking cutting-edge frontend development services. I pride myself on staying ahead of the curve by keeping up-to-date with the latest trends and best practices in the industry. With my passion for frontend development, I offer superior quality web development solutions that deliver exceptional user experiences.
        </Paragraph>
        <Paragraph>
        In conclusion, I prioritize collaboration with clients to achieve success and provide custom-tailored solutions. With my expertise, dedication, and innovative mindset, I am confident in my ability to deliver exceptional results for any frontend development project.
        </Paragraph>
      </TextContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;

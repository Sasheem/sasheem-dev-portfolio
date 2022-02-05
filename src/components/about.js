import React from 'react';
import styled from 'styled-components';

// local components
import Heading2 from './heading2'

const View = styled.div`
    display: flex;
    color: #44566C;     // dark blue grey
    margin: 64px 0;
    flex-direction: column;
    max-width: 80vw;

    // screen larger than 768px
    @media only screen and (min-width: 768px) {
        margin: 256px 0;
        flex-direction: row;
        max-width: 100vw; 
    }
`;
const RightContent = styled.div`
    flex: 1;
`;
const LeftContent = styled(RightContent)`
    // screen smaller than 768px
    @media only screen and (max-width: 768px) {
        max-width: 50%;
    }
`;
const Text = styled.p`
    line-height: 1.5em;
`;
const AboutLink = styled.a`
    color: #E63946;     // red
`;

const About = () => (
    <View>
        <LeftContent>
            <Heading2 id='about-section' title='About Me' />
        </LeftContent>
        <RightContent>
            <Text>
                I'm a software developer specializing in front-end development for websites and mobile apps.
                I work with clients to create user interfaces and that are responsive, engaging, and consistent 
                with their branding.
            </Text>
            <Text>
                I graduated from Florida State University with a Bachelors of Science in Computational 
                Biology. I currently work for <AboutLink href='https://coss.fsu.edu/' target='_blank' rel="noreferrer">FSU COSSPP IT</AboutLink> {' '} 
                as a Full-Stack Web Developer and maintain the website for a nonprofit, {' '}
                <AboutLink href="https://www.unhousedhumanity.org/" target='_blank' rel="noreferrer">Unhoused Humanity</AboutLink>, 
                that works to house individuals and families experiencing homelessness. 
            </Text>
            <Text>
                When I am not working on web development, I continue to update my IT 
                skills and expand on my certifications and time management. Check out 
                my latest projects!
            </Text>
        </RightContent>
    </View>
);

export default About;
import React from 'react';
import styled from 'styled-components';

// local components
import Heading2 from './heading2'
import { AboutLink } from './common';

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

const About = () => (
    <View>
        <LeftContent>
            <Heading2 id='about-section' title='About Me' />
        </LeftContent>
        <RightContent>
            <Text>
                Software Developer specializing in the development of websites and mobile apps. I have experience
                with HTML, CSS, Javascript, React, and WordPress. I also have experience with mobile app development
                using React Native and <AboutLink href='https://expo.dev/' target='_blank' rel="noreferrer">Expo</AboutLink>.
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
                skills by expanding on my AWS <AboutLink href='https://www.credly.com/badges/b14fa4a8-73d6-4ef5-9c03-25c71572d82a/public_url' target='_blank' rel='noreferrer'>certifications</AboutLink>. {' '}
                Check out my latest projects!
            </Text>
        </RightContent>
    </View>
);

export default About;
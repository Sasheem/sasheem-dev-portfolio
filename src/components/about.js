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
const Content = styled.div`
    flex: 1;
`;
const Text = styled.p`
    line-height: 1.5em;
`;

const About = () => (
    <View>
        <Content>
            <Heading2 title='About Me' />
        </Content>
        <Content>
            <Text>
                I'm a freelance front-end web developer and UI/UX designer specializing in 
                responsive web design, modern CSS techniques, and logo/branding. I work with 
                clients to create interfaces and branding that complement each other, 
                and that are cultivated for accessibility and speed.
            </Text>
            <Text>
                I graduated from Florida State University with a Bachelors of Science in Biology. 
                I also volunteer as the web developer for a nonprofit, Unhoused Humanity, that 
                works to house individuals and families experiencing homelessness. 
            </Text>
            <Text>
                When I am not working on web development, I continue to update my IT 
                skills and expand on my certifications and time management. Check out 
                my latest projects and services I offer.
            </Text>
        </Content>
    </View>
);

export default About;
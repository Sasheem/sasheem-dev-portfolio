import React from 'react';
import styled from 'styled-components';

// local components
import { Content } from './common';
import Social from './social';

// styles
const Heading = styled.h1`
	max-width: 540px;
	margin-bottom: 0.25em;
`;
const HeadingAccent = styled.span`
	color: #E63946;
`;
const HeadingDetail = styled.p`
	font-weight: 300;
	font-size: 1.5em;
	margin: 0;
`;
const Skills = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0;
    padding: 0;
`;
const Item = styled.li`
    color: #8996A6;
    margin: 0;
    padding: 0;

    &:nth-child(1) {
        span {
            padding-left: 0;
        }
    }
    
    &:nth-child(6) {
        span {
            border-right: none;
            
        }
    }
`;

const Span = styled.span`
    padding: 0 1rem;
    border-right: 1px solid #8996A6;
`;

const Hero = () => (
    <Content>
        <Heading>
            Hi! I'm <HeadingAccent>Sasheem</HeadingAccent> {' '}
            <span role='img' aria-label='Coder emoji'>
                👨🏾‍💻
            </span>
        </Heading>
        <HeadingDetail>I am a full stack web developer</HeadingDetail>
        <Skills>
            <Item><Span>HTML</Span></Item>
            <Item><Span>CSS</Span></Item>
            <Item><Span>JavaScript</Span></Item>
            <Item><Span>React</Span></Item>
            <Item><Span>React Native</Span></Item>
            <Item><Span>WordPress</Span></Item>
        </Skills>
        {/* <Text>
            HTML5 - CSS3 - Javascript - WordPress <br />
            React - React Native 
        </Text> */}
        <Social forContact={false} />
    </Content>
);

export default Hero;
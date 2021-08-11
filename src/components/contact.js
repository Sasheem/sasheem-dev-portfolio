import React from 'react';
import styled from 'styled-components';

// local components
import Heading2 from './heading2';
import Form from './form';
import Info from './info';

// styled components
const Container = styled.div`
    display: grid;
    grid-gap: 2em;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;

    // screen larger than 768px
    @media only screen and (min-width: 768px) {
        flex-direction: row;
    }
`
const Header = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    width: 100%;
`;
const Filler = styled.div`
    flex: 0.5;
`;
const HContainer = styled.div`
    flex: 1;
`;

// markup
const Contact = () => (
    <Container>
        <Header>
            <HContainer>
                <Heading2 title='Contact' />
            </HContainer>
            <HContainer />
        </Header>
        
        <Content>
            <Form />
            <Filler />
            <Info />
        </Content>
    </Container>
);

export default Contact;
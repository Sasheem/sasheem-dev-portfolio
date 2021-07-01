import React from 'react';
import styled from 'styled-components';
import { Button, Text } from './common';

// styled components
const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;
const Content = styled.div`
    display: inline-flex;
    flex-direction: column;
    
    h4, p {
        text-align: center;
    }
    p {
        margin-bottom: 2.5em;
    }
`;

const ContactSuccess = ({ setSubmitted }) => {
    return (
        <Container>
            <Content>
                <h4>Message Received</h4>
                <Text>Thank you for reaching out, I will get back to you shortly!</Text>
                <Button onClick={() => setSubmitted(false)}>Return</Button>
            </Content>
        </Container>
    )
};

export default ContactSuccess;
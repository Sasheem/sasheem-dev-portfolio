import React from 'react';
import styled from 'styled-components';
import { Button, Text } from './common';

// styled components
const Container = styled.div`
    flex: 2;
    display: flex;
    width: 100%;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    
    h4 {
        color: #1DAB45;     // success green
    }
    h4, p {
        text-align: left;
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
                <div>
                    <Button onClick={() => setSubmitted(false)}>Return</Button>
                </div>
            </Content>
        </Container>
    )
};

export default ContactSuccess;
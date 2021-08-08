import React from 'react';
import styled from 'styled-components';

// styles
const Container = styled.div`
    max-width: 100%;
`;
const Header2 = styled.h2`
    margin-bottom: 0.25em;
`;
const Underline = styled.div`
    background-color: #E63946;     // red
    height: 10px;
    width: 35%;

    // screen larger than 768px
    @media only screen and (min-width: 768px) {
        width: 20%;
    }
`;

// markup
const Heading2 = ({ title }) => (
    <Container>
        <Header2>{title}</Header2>
        <Underline />
    </Container>
);

export default Heading2;
import React from 'react';
import styled from 'styled-components';

// styles
const Container = styled.div`
    max-width: 50%;
`;
const Header2 = styled.h2``;
const Underline = styled.div`
    background-color: #E63946;     // red
    height: 10px;
    width: 35%;
`;

// markup
const Heading2 = ({ title }) => (
    <Container>
        <Header2>{title}</Header2>
        <Underline />
    </Container>
);

export default Heading2;
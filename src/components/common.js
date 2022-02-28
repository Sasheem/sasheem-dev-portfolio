import styled from 'styled-components';

export const AboutLink = styled.a``;

export const Text = styled.p`
    font-size: 1em;
`;

export const Button = styled.button`
    diplay: inline-block;
    background-color: #457B9D;      // teal blue
    color: white;
    border-radius: 0.3em;
    padding: 1em 1.5em;
    font-size: 1em;
    border: none;
    margin-bottom: 1em;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:hover {
        cursor: pointer;
    }
`;

export const Content = styled.div`
    margin-top: 144px;
    margin-bottom: 144px;
    color: #44566C;     // dark blue grey
    display: flex;
    flex-direction: column;
    max-width: 70vw;

    // screen larger than 768px
    @media only screen and (min-width: 768px) {
        max-width: 30vw;
        margin-top: 256px;
        margin-bottom: 336px;
    }
`;
import styled from 'styled-components';

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
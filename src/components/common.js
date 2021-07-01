import styled from 'styled-components';

export const Text = styled.p`
    font-size: 1em;
`;

export const Button = styled.button`
    diplay: inline-block;
    background-color: #3e4cae;
    color: white;
    border-radius: 0.3em;
    padding: 1em 0.5em;
    border: none;
    margin-bottom: 1em;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:hover {
        cursor: pointer;
    }
`;
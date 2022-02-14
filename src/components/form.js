import React, { useState, useRef } from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import Recaptcha from 'react-google-recaptcha';

// local components
import { Button } from './common';

// styled components
const ContactForm = styled.form`
    flex: 2;

    // screen smaller than 768px
    @media only screen and (max-width: 768px) {
        max-width: 80vw;
    }
`;
const Row = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;  
`;
const DoubleRow = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    
    // screen larger than 768px
    @media only screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 1em;
    }
    
`;
const Label = styled.label`
    margin-bottom: 0.25em;
`;
const Input = styled.input`
    display: block;
    padding: 0.5rem;
    line-height: 1.25;
    font-size: 0.9em;
    border-width: 1px;
    border-radius: 0.25rem;
    border-color: #4a5568;
`;
const Textarea = styled.textarea`
    display: block;
    padding: 0.5rem;
    border-radius: 0.25rem;
    border-color: #4a5568;
    font-size: 0.9em;
    line-height: 1.25;
`;

function encode(data) {
return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Form = () => {
    const [state, setState] = useState({});

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': form.getAttribute('name'),
            ...state,
          }),
        })
          .then(() => navigate(form.getAttribute('action')))
          .catch((error) => alert(error))
      }

    // Component: Form
    return (
        <ContactForm 
            name="contact-sdev" 
            method="POST"
            action="/thanks/"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
            onSubmit={handleSubmit}
        >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact-sdev" />
            <p hidden>
            <label>
                Don’t fill this out: <input name="bot-field" onChange={handleChange} />
            </label>
            </p>
            <Row>
                <Label htmlFor='name'>Name</Label>
                <Input 
                    type="text"  
                    name="name" 
                    placeholder="Name"
                    onChange={handleChange} 
                />
            </Row>
            <DoubleRow>
                <Row>
                    <Label htmlFor='email'>Email</Label>
                    <Input 
                        type="text" 
                        name="email" 
                        placeholder="jon.email@gmail.com"
                        onChange={handleChange} 
                    />
                </Row>
                <Row>
                    <Label htmlFor='phone'>Phone</Label>
                    <Input 
                        type='tel'
                        name='phone'
                        placeholder='(555) - 555 - 5555'
                        pattern='[0-9]{3}[0-9]{3}[0-9]{4}'
                        onChange={handleChange}
                    />
                </Row>
            </DoubleRow>
            <Row>
                <Label htmlFor='messageInput'>Message</Label>
                <Textarea 
                    type="text" 
                    name="message" 
                    placeholder="Tell me about your project"
                    rows="10" 
                    onChange={handleChange} 
                />
            </Row>
            {/* <Row>
                <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />
            </Row> */}
            <Button type="submit">
                Send 
            </Button>
        </ContactForm>
    );
};

export default Form;
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

// local components
import { Button } from './common';
import ContactSuccess from './contactSuccess';

// styled components
const ContactForm = styled.form`
    flex: 2;

    // screen smaller than 768px
    @media only screen and (max-width: 768px) {
        max-width: 90vw;
    }
`;
const Row = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;  
`;
const DoubleRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
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
// const Button = styled.button`
//     diplay: inline-block;
//     background-color: #3e4cae;
//     color: white;
//     border-radius: 0.3em;
//     padding: 1em 0.5em;
//     border: none;
//     margin-bottom: 1em;
//     -webkit-appearance: none;
//     -moz-appearance: none;

//     &:hover {
//         cursor: pointer;
//     }
// `;
const ErrorText = styled.p`
    color: red;
`;
const SuccessText = styled.p`
    color: green;
    text-align: center;
`;

const Form = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const recaptchaRef = useRef();
    const { 
        register, 
        handleSubmit, 
        errors, 
        reset, 
        setError, 
        formState: { isSubmitting},
    } = useForm();
    // const GATEWAY_URL = 'https://dff7228u2k.execute-api.us-east-1.amazonaws.com/prod';
    // const GATEWAY_URL = process.env.AWS_GATEWAY_URL;

    // handle submit event
    // error check & submit form w/ lambda function
    const onSubmit = async data => {
        
        // perform recaptcha check
        // const token = await recaptchaRef.current.executeAsync();
        const recaptchaValue = recaptchaRef.current.getValue(); 

        // perform fetch request to gateway api to invoke lambda function with form data
        try {
            
            if (recaptchaValue !== '') {
                console.log(`recaptcha: ${recaptchaValue}:${typeof recaptchaValue}`);
                await fetch(process.env.GATSBY_AWS_GATEWAY, {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'no-cache',
                    body: JSON.stringify(data),
                    headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    },
                });

                // reset form data upon successful submit
                reset();
                setFormValues({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                });
                setSubmitted(true);
            } else {
                setError('submit', 'submitError', `Please toggle recaptcha`);
                setSubmitted(false);
            }
            
            
          } catch (error) {
            // handle server errors
            setError('submit', 'submitError', `Doh! ${error.message}`);
            setSubmitted(false);
          }
        
      };

    // update input on change
    const handleChange = ev => {
        ev.persist();
        setFormValues(currentValues => ({
            ...currentValues,
            [ev.target.name]: ev.target.value,
        }));
    };

    // handle recaptcha change
    const onRecaptchaChange = (value) => {
        console.log(`Captcha value: ${value}`);
    };

    // Component: Thank you message
    const showThankYou = <ContactSuccess setSubmitted={setSubmitted} />;

    // Component: Form
    const showForm = 
    <ContactForm onSubmit={handleSubmit(onSubmit)} method="post">
        <Row>
            <Label htmlFor='name'>Name</Label>
            <Input 
                type="text"  
                name="name" 
                placeholder="Name"
                disabled={isSubmitting}
                value={formValues.name} 
                onChange={handleChange} 
                ref={register({
                    required: 'Name is required',
                })} 
            />
            {errors.name && errors.name.message && <ErrorText>{errors.name.message}</ErrorText>}
        </Row>
        <DoubleRow>
            <Row>
                <Label htmlFor='email'>Email</Label>
                <Input 
                    type="text" 
                    name="email" 
                    placeholder="jon.email@gmail.com"
                    disabled={isSubmitting} 
                    value={formValues.email} 
                    onChange={handleChange} 
                    ref={register({
                        required: 'Email is required',
                        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    })}  
                />
                {errors.email && errors.email.message && <ErrorText>{errors.email.message}</ErrorText>}
            </Row>
            <Row>
                <Label htmlFor='phone'>Phone</Label>
                <Input 
                    type='tel'
                    name='phone'
                    placeholder='(555) - 555 - 5555'
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    disabled={isSubmitting}
                    value={formValues.phone}
                    onChange={handleChange}
                    ref={register({
                        pattern: /[0-9]{3}-[0-9]{3}-[0-9]{4}/
                    })}
                />
            </Row>
        </DoubleRow>
        <Row>
            <Label htmlFor='messageInput'>Message</Label>
            <Textarea 
                type="text" 
                name="message" 
                placeholder="Tell me about your project"
                disabled={isSubmitting} 
                rows="10" 
                value={formValues.message} 
                onChange={handleChange} 
                ref={register({
                    required: 'Message is required',
                })}
            />
            {errors.message && errors.message.message && <ErrorText>{errors.message.message}</ErrorText>}
        </Row>
        <Button type="submit">
            {isSubmitting ? 'Processing...' : 'Send Message'}
        </Button>
        <Row>
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.GATSBY_SITE_KEY}
                size="normal"
                onChange={onRecaptchaChange}
            />
        </Row>
        {errors.submit && errors.submit.message &&
            <Row>
                <ErrorText>{errors.submit.message}</ErrorText>
            </Row>
        }
    </ContactForm>;
 
    return (
        submitted ? showThankYou : showForm
    );
};

export default Form;
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

// styled components
const Form = styled.form`
    width: 80%
    max-width: 75vw;
    
    @media only screen and (min-width: 768px) {
        max-width: 30em;
    }
`;
const Row = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;  
`;
const Heading = styled.h2`
    margin: 0;
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

// override default select styling to add custom arrow dropdown
const Select = styled.select`
    display: block;
    padding: 0.5rem;
    border-radius: 0.25rem;
    border-color: #4a5568;
    font-size: 0.9em;

    margin: 0;      
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;

    background-image:
        linear-gradient(45deg, transparent 50%, gray 50%),
        linear-gradient(135deg, gray 50%, transparent 50%),
        linear-gradient(to right, #ccc, #ccc);
    background-position:
        calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px),
        calc(100% - 3.5em) 0.5em;
    background-size:
        5px 5px,
        5px 5px,
        1px 1.5em;
    background-repeat: no-repeat;

  &:focus {
    background-image:
        linear-gradient(45deg, green 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, green 50%),
        linear-gradient(to right, #ccc, #ccc);
    background-position:
        calc(100% - 15px) 1em,
        calc(100% - 20px) 1em,
        calc(100% - 2.5em) 0.5em;
    background-size:
        5px 5px,
        5px 5px,
        1px 1.5em;
    background-repeat: no-repeat;
    border-color: green;
    outline: 0;

    -moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
    }
  }
`;
const Textarea = styled.textarea`
    display: block;
    padding: 0.5rem;
    border-color: #4a5568;
    font-size: 0.9em;
`;
const Button = styled.button`
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
const ErrorText = styled.p`
    color: red;
`;
const SuccessText = styled.p`
    color: green;
    text-align: center;
`;

// markup
const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        topic: '',
        subject: '',
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
    const GATEWAY_URL = process.env.AWS_GATEWAY_URL;

    // handle submit event
    // error check & submit form w/ lambda function
    const onSubmit = async data => {
        
        // perform recaptcha check
        try {
            const token = await recaptchaRef.current.executeAsync();
            console.log(`token: ${typeof token}:${token}`);
        } catch (error) {
            setError('submit', 'submitError', `ReCAPTCHA failed`);
        }

        // perform fetch request to gateway api to invoke lambda function with form data
        try {
            await fetch(GATEWAY_URL, {
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
            setSubmitted(true);
            setFormValues({
                name: '',
                email: '',
                topic: '',
                subject: '',
                message: '',
            })
          } catch (error) {
            // handle server errors
            setError('submit', 'submitError', `Doh! ${error.message}`);
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
    const handleRecaptcha = (value) => {
        console.log(`Captcha value: ${value}`);
    };

    // Component: Thank you message
    const showThankYou = (
        <SuccessText>Thank you I will get back to you shortly <br /> <br />
            <Button onClick={() => setSubmitted(false)}>Send another message</Button>
        </SuccessText>
    );

    // Component: Form
    const showForm = 
    <Form id="contact-form" onSubmit={handleSubmit(onSubmit)} method="post">
        <Row>
            <Heading>Send me a message</Heading>
            <p>Tell me about your project aspirations or let's meet over coffee <span role='img' aria-label='Coffee emoji'>
            ☕️
            </span>
            </p>
        </Row>
        <Row>
            <Label htmlFor='name'>Your name</Label>
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
        <Row>
            <Label htmlFor='email'>Your email (so I can reply to you) </Label>
            <Input 
                type="text" 
                name="email" 
                placeholder="jon.appleseed@gmail.com"
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
            <Label htmlFor="topic">Topic</Label>
            <Select ref={register} name="topic" disabled={isSubmitting}>
                <option value="">Please select an option</option>
                <option value="static">Static website</option>
                <option value="dynamic">Dynamic website</option>
                <option value="mobile">Mobile app</option>
                <option value="consultation">Consultation</option>
                <option value="other">Other</option>
            </Select>
        </Row>
        <Row>
            <Label htmlFor='subject'>Subject</Label>
            <Input 
                type="text"  
                name="subject" 
                placeholder="Let me know how I can help you"
                disabled={isSubmitting} 
                value={formValues.subject} 
                onChange={handleChange}
                ref={register}
            />
        </Row>
        <Row>
            <Label htmlFor='messageInput'>Message</Label>
            <Textarea 
                type="text" 
                name="message" 
                placeholder="Provide as many details as you can about your project"
                disabled={isSubmitting} 
                rows="8" 
                value={formValues.message} 
                onChange={handleChange} 
                ref={register({
                    required: 'Message is required',
                })}
            />
            {errors.message && errors.message.message && <ErrorText>{errors.message.message}</ErrorText>}
        </Row>
        <Row>
            <Button type="submit">
                {isSubmitting ? 'Processing...' : 'Send Message'}
            </Button>
        </Row>
        {errors && errors.submit && errors.submit.message &&
            <Row>
                {errors.submit.message}
            </Row>
        }
        <Row>
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.GATSBY_SITE_KEY}
                onChange={handleRecaptcha}
                size="invisible"
            />
        </Row>
    </Form>;
 
    return (
        submitted ? showThankYou : showForm
    );
};

export default Contact;
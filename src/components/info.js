import React from 'react';
import styled from 'styled-components';
import {Phone} from '@styled-icons/entypo/Phone';
import {LocationPin} from '@styled-icons/entypo/LocationPin';
import {Mail} from '@styled-icons/entypo/Mail';

// local components
import Social from './social';

// styled components
const Container = styled.div`
    flex: 1;
    display: grid;
    grid-gap: 1em;
    height: 50%;
`;
const Header = styled.div``;
const Row = styled.div`
    display: flex;
    justify-content: flex-start;
`;
const SocialRow = styled(Row)`
    flex-direction: column;
`;
const Filler = styled.div`
    flex: 0.2;
`;
const Content = styled.div`
    flex: 4;
`;
const Text = styled.p`
    margin: 0 0 .5em 1em;
    color: #8996A6;
`;
const PhoneIcon = styled(Phone)`
    color: #8996A6;
    height: 2em;
    width: 2em;
`;
const LocationIcon = styled(LocationPin)`
    color: #8996A6;
    height: 2em;
    width: 2em;
`;
const MailIcon = styled(Mail)`
    color: #8996A6;
    height: 2em;
    width: 2em;
`;
// data
const data = {
    location: 'Tallahassee, FL',
    email: 'sasheem@sasheemdev.com',
    phone: '(850) - 485 - 2481',
};

const Info = () => (
    <Container>
        <Header>
            <h3>Contact Info</h3>
        </Header>
        <a 
            href='https://www.google.com/maps/place/Florida+State+University/@30.4418778,-84.3006776,17z/data=!3m1!4b1!4m5!3m4!1s0x88ecf57078f21dd3:0x9c1b0fee7f5d86c8!8m2!3d30.4418778!4d-84.2984889'
            target='_blank'
            rel="noopener noreferrer"
        >
            <Row>
                <LocationIcon />
                <Text>{data.location}</Text>
            </Row>
        </a>
        <a href='mailto:sasheem@sasheemdev.com' target='_blank' rel="noopener noreferrer">
            <Row>
                <MailIcon />
                <Text>{data.email}</Text>
            </Row>   
        </a>
        <a href='tel:850-485-2481' target='_blank' rel="noopener noreferrer">
            <Row>
                <PhoneIcon />
                <Text>{data.phone}</Text>  
            </Row> 
        </a>
        
        <SocialRow>
            <h3>Follow Me</h3>
            <div style={{ display: `flex`, flexDirection: `row` }}>
                <Filler />
                <Content>
                    <Social forContact={true} />
                </Content>
            </div>
        </SocialRow>
    </Container>
);

export default Info;
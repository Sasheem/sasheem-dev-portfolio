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
`;
const SocialRow = styled(Row)`
    flex-direction: column;
`;
const Filler = styled.div`
    flex: 0.2;
`;
const Icon = styled.div`
    flex: 1;
    color: #8996A6;
    h2 {
        margin: 0;
    }
`;
const Content = styled.div`
    flex: 4;
`;
const Text = styled.p`
    margin: 0 0 .5em 0;
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
        <Row>
            <Filler />
            <Icon>
                <LocationIcon />
            </Icon>
            <Content>
                <Text>{data.location}</Text>
            </Content>
        </Row>
        <a href='mailto:sasheem@sasheemdev.com' target='_blank' rel="noopener noreferrer">
            <Row>
                <Filler />
                <Icon>
                    <MailIcon />
                </Icon>
                <Content>
                    <Text>{data.email}</Text>
                </Content>
            </Row>   
        </a>
        <a href='tel:850-485-2481' target='_blank' rel="noopener noreferrer">
            <Row>
                <Filler />
                <Icon>
                    <PhoneIcon />
                </Icon>
                <Content>
                    <Text>{data.phone}</Text>  
                </Content>
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
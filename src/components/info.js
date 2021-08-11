import React from 'react';
import styled from 'styled-components';

// local components
import Social from './social';
import Location from '../assets/location-lg.svg';
import Email from '../assets/email-lg.svg';
import Phone from '../assets/phone-lg.svg';

// styled components
const Container = styled.div`
    flex: 1;
    display: grid;
    grid-gap: 5px;
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
`;
const Content = styled.div`
    flex: 4;
`;
const Text = styled.p`
    margin: 0 0 .5em 0;
    color: #8996A6
`;

// data
const data = {
    location: 'Tallahassee, FL',
    email: 'sasheem@sasheemdev.com',
    phone: '(850)-485-2481',
};

const Info = () => (
    <Container>
        <Header>
            <h3>Contact Info</h3>
        </Header>
        <Row>
            <Filler />
            <Icon>
                <Location />
            </Icon>
            <Content>
                <Text>{data.location}</Text>
            </Content>
        </Row>
        <Row>
            <Filler />
            <Icon>
                <Email />
            </Icon>
            <Content>
                <a href='mailto:sasheem@sasheemdev.com' target='_blank' rel="noopener noreferrer">
                    <Text>{data.email}</Text>
                </a>
            </Content>
        </Row>
        <Row>
            <Filler />
            <Icon>
                <Phone />
            </Icon>
            <Content>
                <a href='tel:850-485-2481' target='_blank' rel="noopener noreferrer">
                    <Text>{data.phone}</Text>  
                </a>
            </Content>
        </Row>
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
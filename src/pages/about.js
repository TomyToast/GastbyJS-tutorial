import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import Button from '../components/Button';
import Layout from '../layout/layout';
import { Link } from 'gatsby';

const data = [
    {
        title: 'Hello Tomek',
    },
    {
        title: 'Hello Romek',
        ad: 'lorem ipsum color sit amet'
    },
    {
        title: 'Hello Domek',
    },
    {
        title: 'Hello Bronek',
        ad: 'lorem ipsum color sit amet'
    },
]

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const PosedH2 = posed.h2({
    visible: {
        x: 0,
        opacity: 1,
    },
    hidden: {
        x: '-150%',
        opacity: 0,
    }
});

const StyledH2 = styled(PosedH2)`
    font-size: 2em;
    font-family: Montserrat, sans-serif;
    text-align: center;
    color: white;
    grid-column-start: ${({order}) => order % 2 === 0 ? '2' : '1'};
`;

const StyledAd = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: aqua;
    border-radius: 10px;
    color: white;
    height: 90%;
    weigth: 90%;
`;

class AboutPage extends Component {
    state = {
        visible: false,
    }

    toggleHeaders = () => {
        this.setState( prevState => ({visible: ! prevState.visible}));
    }

    render(){
        return (
            <Layout>
                <h1>{this.state.visible ? 'visible' : 'hidden'}</h1>
                <Button onClick={this.toggleHeaders}>Go back</Button>
                <StyledWrapper>
                    {data.map( (item, i) => (
                        <Fragment key={i}>
                            <StyledH2
                                order={i}
                                pose={this.state.visible ? 'visible' : 'hidden'}
                            >{item.title}</StyledH2>
                            {item.ad && <StyledAd>{item.ad}</StyledAd>}
                        </Fragment>
                    ))}
                </StyledWrapper>
            </Layout>
        )
    }
};

export default AboutPage;
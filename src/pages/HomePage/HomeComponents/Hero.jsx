import React from 'react';
import styled from 'styled-components';
import { mobile, tablet, laptop } from '../../../media';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HeroContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`

const HeroWrapper = styled.div`
    display: flex;
    width: 90%;
    height: 500px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    ${mobile({
    height: '300px',
    margin: '-60px 0px 0px 5px',
})};

${tablet({
    height: '400px',
    marginTop: '0px'
})};
`
const HeroImgContainer = styled.section`
    display: flex;
    position: relative;
    flex-direction: column;
    height: 500px;
    align-items: center;
    justify-content: center;
    width: 60.66%;
    margin: 0px 20px 0px 20px;
    border: 0.5px solid #CCD3C2;
    z-index: 0;
    ${mobile({
    height: '200px',
    width: '100%',
    marginLeft: '0px',
    marginRight: '5px'
})};
    ${tablet({ 
        marginLeft: '10px',
        marginRight: '10px',
        height: '400px'
    })};
`

const HeroImage = styled.img`
    display: flex;
    height: 100%;
    width: 100%;
`
const HeroAdColumn = styled.div`
    display: flex;
    height: 100%;
    width: 33.33%;
    flex-direction: column;
    ${mobile({
        display: 'none'
     })};
    
`

const HeroAdContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    &.all-plants {
        background-color: #517A3E;
        height: 60%
    }
    &.bottom-picture {
        margin-top: 20px;
        border: 0.5px solid #CCD3C2;
        height: 40%;
        ${tablet({
            marginTop: '10px'
         })};
    };
`

const HeroArrowButton = styled(ArrowForwardIcon)`
    color: #FEFDFD;
    margin-top: 10px;
    margin-left: 10px;
    ${laptop({
        margin: '5px 0px 0px 5px'
    })};
`

const HeroTitleRow = styled.div`
    display: flex;
    flex-direction: row;
    height: 15%;
    width: 100%;
    align-items: flex-end;
    &.picture-banner {
        background-color: rgba(28, 18, 18, 0.53);
        position: absolute;
        z-index: 100;
        bottom: 0px;
        left: 0px;
    }
    ${mobile({height: '40px'})};
    ${tablet({height: '50px'})};
`

const HeroTitle = styled.h2`
    color: #FEFDFD;
    font-size: 30px;
    font-weight: 700;
    margin-left: 30px;
    ${mobile({
    fontSize: '16px',
    marginLeft: '5px',
})};
    ${tablet({
    fontSize: '20px',
})};
${laptop({
    fontSize: '22px',
})};
`


const HeroButton = styled.button`
    display: flex;
    font-size: 30px;
    width: 55%;
    height: auto;
    align-items: center;
    background: none;
    border: none;
    margin-left: 20px;
    color: #FEFDFD;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        justify-content: space-between;
    }
    ${mobile({
    height: '30px',
    width: 'auto',
    fontSize: '12px',
    marginLeft: '5px'
})};
    ${tablet({
    height: 'auto',
    width: 'auto',
    fontSize: '24px',
    padding: '5px',
    marginLeft: '10px'
})};

${laptop({
    height: 'auto',
    width: 'auto',
    fontSize: '26px',
})};
`
const RouterLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #1B1212;
`

const Hero = () => {
    return (
        <HeroContainer >
            <HeroWrapper>
                <HeroImgContainer>
                    <HeroImage src='https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_13/2378671/180327-design-interior-ac-632p.jpg' alt='image of room with plants' />
                    <HeroTitleRow className="picture-banner">
                        <RouterLink to='/all'>
                            <HeroTitle className="hero-text">Find The Perfect Plants For Your Space</HeroTitle>
                        </RouterLink>
                    </HeroTitleRow>
                </HeroImgContainer>
                <HeroAdColumn>
                    <HeroAdContainer className="all-plants">
                        <RouterLink to='/all'><HeroButton>Go Shopping <HeroArrowButton fontSize="large" /></HeroButton></RouterLink>
                    </HeroAdContainer>

                    <HeroAdContainer className="bottom-picture">
                        <HeroImage src='https://cdn.shopify.com/s/files/1/0156/0137/products/thaibasil-websize_2463e580-8834-4e26-9f88-9732429340fd.jpg' alt = 'Picture of Basil Plant' />
                    </HeroAdContainer>
                </HeroAdColumn>
            </HeroWrapper>
        </HeroContainer>
    )
}

export default Hero
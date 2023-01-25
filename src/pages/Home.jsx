import { alignProperty } from "@mui/material/styles/cssUtils";
import { fontSize } from "@mui/system";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import { mobile, tablet, laptop, desktop} from '../media';
import { Link } from "react-router-dom";

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`

const HeroContainer = styled.div`
    display: flex;
    z-index: 500;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`

const HeroWrapper = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    z-index: 0;
    margin-left: 100px;
    margin-right: 100px;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 500px;
    ${mobile({ 
        width: 'auto',
        maxHeight: '300px',
        margin: '0',
        marginTop: '-70px'
    })};
`

const HeroImage = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 95%;
`
const HeroAdContainer = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    margin-top: 100px;
    width: 50%;
    height: 50%;
    ${mobile({ 
        marginTop: '-30px',
        marginBottom: '-20px'
    })};
`

const HeroTitle = styled.h1`
    text-align: center;
    color: white;
    background: rgba(0,0,0,0.5);
    margin-top: 35px;
    font-size: 40px;
`

const HeroButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    margin-top: -90px;
    align-items: center;
    justify-content: center;
    ${mobile({ 
        marginTop: '5px'
    })};
`

const HeroButton = styled.button`
    display: flex;
    font-size: 20px;
    width: 180px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 1px solid black;
`

const Container = styled.div`
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    padding-bottom: 5px;
    background-color: white;
    width: 83%;
    height: 100%;
    ${mobile({ 
    width: '100%'
    })};
`

const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: auto;
    width: 70%;
    background-color: white;
`


const BannerTitle = styled.h1`
    display: flex;
    font-size: 26px;
    justify-content: flex-start;
    align-items: center;
    ${mobile({ 
        fontSize: '16px',
        marginBottom: '10px',
        marginLeft: '0',
    })};
`

const BannerButton = styled.button`
    display: flex;
    height: auto;
    width: auto;
    margin-right: 40px;
    font-size: 20px;
    padding: 5px;
    background-color: white;
    border: 1px solid black;
    ${mobile({ 
        margin: '0px',
        fontSize: '14px'
    })};
`

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
    background-color: white;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    margin-top: 5px;
    border-radius: 5px;
    height: 260px;
    width: 360px;
    ${mobile({ 
        margin: '5px',
        height: '120px',
        width: '100%',
        margin: '0px'
    })};
`

const Name = styled.h1`
    font-size: 26px;
    ${mobile({ 
        fontSize: '14px'
    })};
`

const Price = styled.p`
    font-size: 20px;
    margin-top: -15px;
    ${mobile({ 
        fontSize: '16px'
    })}
`

const CategoryImage = styled.img`
    display: flex;
    height: 100%;
    width: 100%;
`

const PopularImage = styled.img`
    display: flex;
    padding-top: 20px;
    max-height: 150px;
    width: auto;
    ${mobile({ 
        height: '70px',
        width: '100%',
    })};
`

const RouterLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const Home = () => {    
        const imageArray = 
            {   
                id: '1',
                name: 'Aloe',
                image: 'https://www.ikea.com/us/en/images/products/aloe-vera-potted-plant-aloe__67410_pe181254_s4.jpg',
                price: '$4.99',
                dimensions: '12 inches x 4 inches',
                category: 'succulent',
                care: 'easy',
                light: 'Full sun',
                water: 'Every 2-4 weeks',
                environment: 'Warm Climate',
                quantity: '100'
            }
        
    return (
        <PageContainer>
        <HeroContainer >
            <HeroWrapper>
                <HeroAdContainer>
                    <HeroTitle>Winter Blues Got You Down?</HeroTitle>
                    <HeroButtonContainer>
                        <HeroButton><RouterLink to = 'product/1'>Shop Now</RouterLink></HeroButton>
                    </HeroButtonContainer>
                </HeroAdContainer>
                <HeroImage src = 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_13/2378671/180327-design-interior-ac-632p.jpg'/>
            </HeroWrapper>
        </HeroContainer>

        <Container>
            <Banner >
                <BannerTitle>Plants You'll Love For Less</BannerTitle>
                <BannerButton>Explore</BannerButton>
            </Banner>
            <Wrapper>
            
            <ImageContainer>
                <CategoryImage src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBJlRUCIZbZd7soSmT2S5acnLt3LNBikXBA&usqp=CAU' />
                <Name>Herbs</Name>
            </ImageContainer>

            <ImageContainer>
                <CategoryImage src = 'https://phsonline.org/uploads/attachments/cl27xfo8bhijf8craat53qxqn-paul-thompson-houseplants.0.816.2448.1632.full.jpg' />
                <Name>Care Type</Name>
            </ImageContainer>

            <ImageContainer>
                <CategoryImage src = 'https://www.denverpost.com/wp-content/uploads/2018/05/ap18100411714506-e1525912725340.jpg?w=1024' />
                <Name>Editable</Name>
            </ImageContainer>
            </Wrapper >

            <Wrapper>
            <ImageContainer>
                <CategoryImage src = 'https://www.gardeningknowhow.com/wp-content/uploads/2021/07/green-home-houseplants.jpg' />
                <Name>Flowers</Name>
            </ImageContainer>

            <ImageContainer>
                <CategoryImage src = 'https://cdn.5280.com/2021/09/ReRoot_Courtesy-of-Coburn-Huff-__HuffPhoto-306484-960x720.jpg' />
                <Name>Leafy Plants</Name>
            </ImageContainer>

            <ImageContainer>
                <CategoryImage src = 'https://www.popsci.com/uploads/2019/02/08/ODUYL5UEC5M234O7A3TNTM6JHI-1024x768.jpg?auto=webp' />
                <Name>Easy Care</Name>
            </ImageContainer>
            </Wrapper>

        </Container>



        <Container>
                <Banner>
                    <BannerTitle>Popular Items</BannerTitle>
                    <BannerButton>Shop All</BannerButton>
                </Banner>
                <Wrapper>
                <ImageContainer>
                    <PopularImage src = {imageArray.image} />
                    <Name>{imageArray.name}</Name>
                    <Price>{imageArray.price}</Price>
                </ImageContainer>

                <ImageContainer>
                    <PopularImage src = {imageArray.image} />
                    <Name>{imageArray.name}</Name>
                    <Price>{imageArray.price}</Price>
                </ImageContainer>

                <ImageContainer>
                    <PopularImage src = {imageArray.image} />
                    <Name>{imageArray.name}</Name>
                    <Price>{imageArray.price}</Price>
                </ImageContainer>

                <ImageContainer>
                    <PopularImage src = {imageArray.image} />
                    <Name>{imageArray.name}</Name>
                    <Price>{imageArray.price}</Price>
                </ImageContainer>

                <ImageContainer>
                    <PopularImage src = {imageArray.image} />
                    <Name>{imageArray.name}</Name>
                    <Price>{imageArray.price}</Price>
                </ImageContainer>
                </Wrapper>
        </Container>
        </PageContainer>
    )
}

export default Home;
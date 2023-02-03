import React from "react";
import styled from "styled-components";
import { mobile, tablet} from '../media';
import { Link } from "react-router-dom";
import { productArray } from "../data";

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    font-family: Arial;
    background-color: #FEFDFD;
    color: #1B1212;
    margin-top: -33px;
    ${mobile({ 
        margin: '0px'
    })};
`

const HeroContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`

const HeroWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    background-color: #F6F6F7;
    margin-bottom: 10px;
    ${mobile({ 
        width: '100%',
        height: '300px',
        marginTop: '-70px'
    })};
`
const HeroImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 500px;
    margin-left: 25px;
    ${mobile({ 
        height: '300px',
        marginLeft: '10px'
    })};
    ${tablet({ 
        marginLeft: '10px'
    })};
`

const HeroImage = styled.img`
    display: flex;
    height: 100%;
    width: 100%;
`

const HeroAdContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 60%;
    ${mobile({ 
       
    })};
`

const HeroTitleRow = styled.div`
    display: flex;
    flex-direction: row;
    height: 70px;
    width: 100%;
    ${mobile({ 
       marginLeft: '3px',
       height: '30px',
    })};
    ${tablet({ 
        marginLeft: '3px',
        height: '50px',
     })};
`

const HeroTitle = styled.h1`
    color: #1B1212;
    font-size: 50px;
    font-weight: 600;
    margin-left: 20px;
    ${mobile({ 
        fontSize: '20px',
        marginLeft: '2px'
    })};
    ${tablet({ 
        fontSize: '30px',
        marginLeft: '5px'
    })};
`

const HeroSubText = styled.p`
    color: #1B1212;
    font-size: 16px;
    font-weight: 500;
    margin-left: 25px;
    margin-top: 30px;
    ${mobile({ 
       marginTop: '10px',
       fontSize: '9px',
       marginLeft: '5px'
    })};
    ${tablet({ 
        marginTop: '20px',
        fontSize: '12px',
        marginLeft: '10px'
     })};
`

const HeroButton = styled.button`
    display: flex;
    font-size: 20px;
    width: auto;
    height: auto;
    padding: 8px;
    align-items: center;
    justify-content: center;
    background-color: #517A3E;
    border: 1px solid #1B1212;
    color: #FEFDFD;
    font-weight: 600;
    margin-left: 20px;
    margin-top: 20px;
    ${mobile({ 
        height: '30px',
        width: 'auto',
        fontSize: '12px',
        marginLeft: '5px'
    })};
    ${tablet({ 
        height: 'auto',
        width: 'auto',
        fontSize: '16px',
        padding: '5px',
        marginLeft: '10px'
    })};
`



const CategoryContainer = styled.div`
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    ${mobile({ 
        marginTop: '0'
    })};
`

const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    padding-bottom: 5px;
    width: 100%;
    height: 100%;
    ${mobile({ 
       marginTop: '0px'
    })};
`

const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: auto;
    width: 100%;
`


const BannerTitle = styled.h1`
    display: flex;
    font-size: 26px;
    justify-content: flex-start;
    align-items: center;
    margin-left: 10px;
    ${mobile({ 
        fontSize: '18px',
        marginBottom: '10px',
        marginLeft: '0',
    })};
`

const BannerButton = styled.button`
    display: flex;
    height: auto;
    width: auto;
    font-size: 16px;
    color: #FEFDFD;
    padding: 5px;
    background-color: #517A3E;
    margin-right: 10px;
    font-weight: 600;
    ${mobile({ 
        margin: '0px',
        fontSize: '12px'
    })};
`

const CategoryCard = styled.div`
    width: 23%;
    height: 60%;
    background: white;
    margin: 5px;
    border: 1px solid #CCD3C2;
    cursor: pointer;
    text-align: center;
    ${mobile({ 
        height: 'auto',
        margin: '2px'
    })};
`

const Name = styled.h1`
    font-size: 26px;
    font-weight: 500;
    ${mobile({ 
        fontSize: '12px'
    })};
`

const Price = styled.p`
    font-size: 20px;
    margin-top: -15px;
    ${mobile({ 
        fontSize: '14px',
        marginTop: '1px'
    })}
`

const CategoryImage = styled.img`
    width: 100%;
    height: 200px;
    display: block;
    margin-top: -15px;
    margin-top: 0.02px;
    ${mobile({ 
        height: '90px',
    })}

`

const RouterLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const Home = () => {    
    return (
        <PageContainer>
        <HeroContainer >
            <HeroWrapper>
                <HeroAdContainer>
                
                
                <HeroTitleRow>
                <HeroTitle>Better</HeroTitle>
                <HeroTitle style = {{color: '#517A3E'}}>Plants</HeroTitle>
                </HeroTitleRow>

                <HeroTitleRow>
                <HeroTitle>Better</HeroTitle>
                <HeroTitle style = {{color: '#517A3E'}}>Decoration</HeroTitle>
                </HeroTitleRow>


                <HeroSubText>Make your furniture green with plants that'll fit any space.</HeroSubText>

                   
                    <RouterLink to = '/all'><HeroButton>Shop Now</HeroButton></RouterLink>
    
                </HeroAdContainer>

                <HeroImgContainer>
                <HeroImage src = 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_13/2378671/180327-design-interior-ac-632p.jpg' alt = 'image of room with plants'/>
                </HeroImgContainer>
            </HeroWrapper>
        </HeroContainer>

            <Banner >
                <BannerTitle>Categories</BannerTitle>
                <RouterLink to = '/products/all'><BannerButton>Explore</BannerButton></RouterLink>
            </Banner>

        <CategoryContainer>
            <CategoryWrapper>
            <CategoryCard>
                <RouterLink to = '/products/herb'>
                <CategoryImage src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ7K3U7J09TClMtwppkkqIoMEmkuwtbhHFqQ&usqp=CAU' alt = 'picture for herb category' />
                <Name>Herbs</Name>
                </RouterLink>
            </CategoryCard>
           

            
            <CategoryCard>
                <RouterLink to = '/products/edible'>
                <CategoryImage src = 'https://www.denverpost.com/wp-content/uploads/2018/05/ap18100411714506-e1525912725340.jpg?w=1024' alt = 'picture for the edible category'/>
                <Name>Edible</Name>
                </RouterLink>
            </CategoryCard>
           
            
            <CategoryCard>
                <RouterLink to = 'products/flower'>
                <CategoryImage src = 'https://www.gardeningknowhow.com/wp-content/uploads/2021/07/green-home-houseplants.jpg' alt = 'picture for the flower category' />
                <Name>Flowers</Name>
                </RouterLink>
            </CategoryCard>
           

            
            <CategoryCard>
                <RouterLink to = 'products/leafy'>
                <CategoryImage src = 'https://cdn.5280.com/2021/09/ReRoot_Courtesy-of-Coburn-Huff-__HuffPhoto-306484-960x720.jpg' alt = 'picture for the leafy category'/>
                <Name>Leafy</Name>
                </RouterLink>
            </CategoryCard>
           

            
            <CategoryCard>
                <RouterLink to = '/easy'>
                <CategoryImage src = 'https://www.popsci.com/uploads/2019/02/08/ODUYL5UEC5M234O7A3TNTM6JHI-1024x768.jpg?auto=webp' alt = 'picture for the easy care category' />
                <Name>Easy Care</Name>
                </RouterLink>
            </CategoryCard>

            </CategoryWrapper>
        </CategoryContainer>

                <Banner>
                    <BannerTitle>Popular Items</BannerTitle>
                    <BannerButton>Shop All</BannerButton>
                </Banner>

        <CategoryContainer>
            <CategoryWrapper>
       {productArray.sort((a, b) => a.sold - b.sold).slice(-5).map((item) => (
                <CategoryCard key = {item.id}>
                <RouterLink to = {`/products/${item.id}`}>
                    <CategoryImage src = {item.image}  />
                    <Name>{item.name}</Name>
                    <Price>${(item.price).toFixed(2)}</Price>
                </RouterLink>
                </CategoryCard>
                ))}
            </CategoryWrapper>
         </CategoryContainer>
        </PageContainer>
    )
}

export default Home;
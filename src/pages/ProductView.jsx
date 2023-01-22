import {React, useState} from 'react';
import styled from 'styled-components';
import { productArray } from '../data';
import { useParams } from 'react-router-dom';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import { Rating } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartReducer';


const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
`
const PageContentWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: white;
    flex-direction: column;
`

const MainContent = styled.div`
    display: flex;
    width: 85%;
    height: 100%;
    flex-direction: row;
    background-color: white;
   
`

const ImageContainer = styled.div`
    display: flex;
    width: 60%;
    height: 530px;
    flex-direction: row;
    align-items: flex-start;
    background-color: white;
    margin-top: 20px;
`

const SideImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
`

const SideImageSizer = styled.div`
    width: 80%;
    height: auto;
    border: 0.5px solid lightgray;
    margin-top: 5px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    border: 0.5px solid lightgray;
`


const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 100%;
    margin-left: 10px;
    margin-right: 20px;
    margin-top: 20px;
    border: 0.5px solid lightgray;
    padding-left: 10px;
    padding-bottom: 15px;
`

const ProductName = styled.h1`
    font-size: 30px;
`

const ProductPriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Price = styled.h2`
    font-size: 24px;
    font-weight: 600;

`

const Discount = styled.h3`
    font-size: 18px;
    font-weight: 500;
    text-decoration: line-through;
    color: gray;
    margin-left: 5px;
    margin-right: 5px;
`

const DiscountRate = styled.h3`
    font-size: 18px;
    font-weight: 500;
    color: red;
`

const ReviewContainer = styled.div`
    Display: flex;
    align-items: center;
    height: 15px;
`
const ReviewText = styled.a`
    font-size: 16px;
    font-weight: 500;
    margin-left: 10px;
`
const ReviewAverage = styled.h3`
    font-size: 18px;
    font-weight: 500;
    margin-left: 10px;
`

const ReviewStar = styled(GradeOutlinedIcon)`
    font-size: 10px;
`

const OptionButtonContainer = styled.div`
    display: flex;
    height: 50px;
    margin-left: 10px;
    width: 80%;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 10px;
`
const SectionLabel = styled.label`
    font-size: 16px;
    font-weight: 500;
`

const OptionButton = styled.button`
    height: 30px;
    width: 80%;
    margin-left: 5px;
    align-items: center;
    justify-content: center;
    border: 0.5px solid black;
`

const OptionImageButton = styled.img`
    height: 100%;
    width: 100%;
    margin: 5px;
    border: 0.5px solid lightgray;
    margin-top: 20px;
`

const ShippingIcon = styled(LocalShippingOutlinedIcon)`
    margin-right: 5px;
    margin-top: 50px;
`

const ShippingAnnouncement = styled.h4`
    margin-top: 70px;
`

const QuantityContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 30%;
    margin-left: 10px;
`

const QuantityButton = styled.button`
    height: 40px;
    width: 40px;
    border-radius: 30px;
    border: none;
    background-color: white;
    font-size: 20px;
    padding: 5px;
`

const Quantity = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px;

`

const QuantityInput = styled.input`
    height: 20px;
    width: 50px;
    padding: 5px;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
`


const CheckOutButtonContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
    margin-left: 0px;
    margin-top: 50px;
    width: 90%;
`

const CheckOutButton = styled.button`
    height: 40px;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    background-color: gray;
    color: white;
    border: 1px solid black;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`

const DescriptionContainer = styled.div`
    display: flex;
    height 100%;
    width: 85%;
    align-items: flex-end;
    justify-content: flex-end;
`

const DescriptionItemContainer = styled.div`
    width: 100%;
    height: 200px;
    border: 0.5px solid lightgray;
    text-align: center;
    padding-top: 20px;
    padding-right: 10px;
    align-items: center;
    justify-content: center;
`

const DescriptionItemTitleRow = styled.div`
    display: flex;
    flex-direction: row;    
    align-items: center;
    justify-content: center;
`

const DescriptionItemContainerLabel = styled.h2`
    font-size: 24px;
    font-weight: 600;
`

const Sun = styled(WbSunnyOutlinedIcon)` 
    margin-right: 5px;
`

const Water = styled(WaterOutlinedIcon)` 
    margin-right: 5px;
`

const Temp = styled(ThermostatOutlinedIcon)` 
    margin-right: 5px;
`

const Size = styled(GrassOutlinedIcon)`
    margin-right: 5px; 
`

const Description = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 50px;
    margin-left: 15px;
`
const SectionHeader = styled.h1`
    font-size: 30px;
    font-weight: 600;
    margin-left: 20px;
    margin-top: 50px;
`

const MightLikeContainer = styled.div`
    display: flex;
    width: 85%;
    height: 100%;
    justify-content: center;
    text-align: center;
`

const MightLikeSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-right: 10px;
    align-items: center;
    justify-content: center;
    border: 0.5px solid lightgray;
`

const MightLikeImg = styled.img`
    width: 100%;
    height: 250px;
`
const MightLikeTitle = styled.h1`
    font-size: 24px;
    font-weight: 600;
`

const MightLikePrice = styled.h2`
    font-size: 20px;
    font-weight: 500;
    margin-top: -5px;
`

const ReviewSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85%;
    height: 100%;
    border: 0.5px solid lightgray;
`

const Line = styled.hr`
    width: 90%;
`
const ReviewHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 100%;
    justify-content: center;
    margin-bottom: 20px;
`

const RatingGraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    margin-left: 20px;
`

const GraphTitle = styled.h1`
    font-size: 24px;
    font-weight: 500;
`

const RatingGraphRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 25px;
`

const RatingGraphLabel = styled.p`
    font-size: 20px;
    margin-right: 10px;
    font-weight: 600;
`

const RatingGraphBar = styled.div`
    width: 50%;
    height: 10px;
    border: 1px solid black;
`

const RatingGraphFill = styled.div`
    width: 50%;
    height: 10px;
    background-color: blue;
`

const RatingGraphNumber = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin-left: 10px;
`

const StatContainer = styled.div`
    display: flex;
    flex-direction: column; 
    height: 100%;
    width: 100%;
    margin-top: 20px;
`
const StatContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 95%;
`
const StatContainerLabel = styled.h2`
    font-size: 24px;
    font-weight: 500;
    margin-right: 10px;
`

const AddReviewButton = styled.button`
    width: 25%;
    height: 40px;
    padding: 5px;
    margin-top: 35px;
    font-size: 16px;
    font-weight: 600;
    align-items: center;
    justify-content: center;
`

const RatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const IndividualRatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 100%;
    padding: 10px;

`

const RatingContents = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const RatingContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 95%;
`

const VerifiedUser = styled.p`
    font-size: 16px;
    color: gray;
    margin-top: -10px;
    margin-left: 5px;
`

const ReviewTitle = styled.h1`
    font-size: 24px;
    font-weight: 600;
`
const ReviewTime = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-left: 50px;
`

const Review = styled.p`
    font-size: 20px;
    font-weight: 500;
`

const ProductView = () => {

    const {id} = useParams();

    const item = productArray.find(i => i.id === parseInt(id));

    const dispatch = useDispatch();

    //need to add popular product algo here
    const pop = productArray.map(a => a);

    const [count, setCount] = useState(1);

    const price = (number) => {return number.toFixed(2)};

  return (
    <PageContainer>
        <PageContentWrapper>
            
            <MainContent>

                <ImageContainer>
                    <SideImageContainer>
                        <SideImageSizer style = {{marginTop: '0px'}}>
                            <Image src = {item.image} />
                        </SideImageSizer>

                        <SideImageSizer>
                            <Image src = {item.image} />
                        </SideImageSizer>
                    </SideImageContainer>
                    <Image src = {item.image}/>
                </ImageContainer>

                <InfoContainer>
                    <ProductName>{item.name}</ProductName>
                    <ReviewContainer>
                        <Rating name="read-only" readOnly />

                        <ReviewAverage>3.1 |</ReviewAverage>
                        <ReviewText>(200) Reviews</ReviewText>
                    </ReviewContainer>
                    
                    <ProductPriceContainer>
                        <Price>${price(item.price * count)}</Price>
                       
                    </ProductPriceContainer>

                    <SectionLabel>Choose a Size</SectionLabel>
                    <OptionButtonContainer>
                        <OptionButton>Seedling</OptionButton>
                        <OptionButton>Medium Size</OptionButton>
                        <OptionButton>Mature Plant</OptionButton>
                    </OptionButtonContainer>

                    <SectionLabel>Choose a Pot</SectionLabel>
                    <OptionButtonContainer>
                        <OptionImageButton src = 'https://www.htgsupply.com/wp-content/uploads/2019/02/nursery-pot-5gal-1.jpg' alt = 'nursery pot' />
                        <OptionImageButton src = 'https://mobileimages.lowes.com/productimages/0456d1ba-7470-443c-9fc2-4eb876970d4d/07656944.jpg?size=pdhism' alt = 'red plastic pot'/>
                        <OptionImageButton src = 'https://www.oldrailwaylinegc.co.uk/shop/gallery/5022938012196-large.jpg' alt = 'green plastic pot'/>
                        <OptionImageButton src = 'http://mobileimages.lowes.com/productimages/473492b6-4b6b-42e6-8b1b-53dab697a304/07656947.jpg' alt = 'blue plastic pot'/>
                    </OptionButtonContainer>

                    <OptionButtonContainer>
                    <ShippingIcon /><ShippingAnnouncement>Free Shipping On All Orders Over $30</ShippingAnnouncement>
                    </OptionButtonContainer>

                    <CheckOutButtonContainer>
                    <QuantityContainer>
                        <QuantityButton onClick = {() => count === 0 ? 0 : setCount(count - 1)}>-</QuantityButton>
                        
                        <Quantity>
                            <QuantityInput type = 'text' name = 'quantity' value = {count} />
                        </Quantity>

                        <QuantityButton onClick = {() => setCount(count + 1)}>+</QuantityButton>
                    </QuantityContainer>
                        <CheckOutButton onClick = {() => dispatch(addToCart({
                            id: item.id,
                            title: item.name,
                            img: item.image,
                            price: item.price,
                            count: count
                        }))}>Add To Cart</CheckOutButton>
                    </CheckOutButtonContainer>
                </InfoContainer>
            </MainContent>

            <SectionHeader>Description</SectionHeader>
            <DescriptionContainer>

                    <DescriptionItemContainer>
                        <DescriptionItemTitleRow>
                        <Sun />
                        <DescriptionItemContainerLabel>Sun</DescriptionItemContainerLabel>
                        </DescriptionItemTitleRow>
                        <Description>{item.light}</Description>
                    </DescriptionItemContainer>

                    <DescriptionItemContainer>
                        <DescriptionItemTitleRow>
                        <Water />
                        <DescriptionItemContainerLabel>Water</DescriptionItemContainerLabel>
                        </DescriptionItemTitleRow>
                        <Description>{item.water}</Description>
                    </DescriptionItemContainer>

                    <DescriptionItemContainer>
                        <DescriptionItemTitleRow>
                        <Temp />
                        <DescriptionItemContainerLabel>Climate</DescriptionItemContainerLabel>
                        </DescriptionItemTitleRow>
                        <Description>{item.environment}</Description>
                    </DescriptionItemContainer>

                    <DescriptionItemContainer>
                        <DescriptionItemTitleRow>
                        <Size />
                        <DescriptionItemContainerLabel>Size</DescriptionItemContainerLabel>
                        </DescriptionItemTitleRow>
                        <Description>{item.dimensions}</Description>
                    </DescriptionItemContainer>
                </DescriptionContainer>

                <SectionHeader>You Might Also Like</SectionHeader>

                <MightLikeContainer>
                    <MightLikeSection>
                        <MightLikeImg src = {pop[10].image} />
                        <MightLikeTitle>{pop[10].name}</MightLikeTitle>
                        <MightLikePrice>${pop[10].price}</MightLikePrice>
                    </MightLikeSection>

                    <MightLikeSection>
                        <MightLikeImg src = {pop[20].image} />
                        <MightLikeTitle>{pop[20].name}</MightLikeTitle>
                        <MightLikePrice>${pop[20].price}</MightLikePrice>
                    </MightLikeSection>

                    <MightLikeSection>
                        <MightLikeImg src = {pop[30].image} />
                        <MightLikeTitle>{pop[30].name}</MightLikeTitle>
                        <MightLikePrice>${pop[30].price}</MightLikePrice>
                    </MightLikeSection>

                    <MightLikeSection style = {{marginRight: '0px'}}>
                        <MightLikeImg src = {pop[16].image} />
                        <MightLikeTitle>{pop[16].name}</MightLikeTitle>
                        <MightLikePrice>${pop[16].price}</MightLikePrice>
                    </MightLikeSection>
                </MightLikeContainer>

                <SectionHeader>Reviews</SectionHeader>
                
                <ReviewSectionContainer>
                
                <ReviewHeaderContainer>
                <RatingGraphContainer>

                <GraphTitle>Review Snapshot</GraphTitle>

                    <RatingGraphRow>
                    <RatingGraphLabel>5</RatingGraphLabel>
                    <RatingGraphBar><RatingGraphFill /></RatingGraphBar>
                    <RatingGraphNumber>100</RatingGraphNumber>
                    </RatingGraphRow>

                    <RatingGraphRow>
                    <RatingGraphLabel>4</RatingGraphLabel>
                    <RatingGraphBar><RatingGraphFill /></RatingGraphBar>
                    <RatingGraphNumber>100</RatingGraphNumber>
                    </RatingGraphRow>

                    <RatingGraphRow>
                    <RatingGraphLabel>3</RatingGraphLabel>
                    <RatingGraphBar><RatingGraphFill /></RatingGraphBar>
                    <RatingGraphNumber>100</RatingGraphNumber>
                    </RatingGraphRow>

                    <RatingGraphRow>
                    <RatingGraphLabel>2</RatingGraphLabel>
                    <RatingGraphBar><RatingGraphFill /></RatingGraphBar>
                    <RatingGraphNumber>100</RatingGraphNumber>
                    </RatingGraphRow>

                    <RatingGraphRow>
                    <RatingGraphLabel>1</RatingGraphLabel>
                    <RatingGraphBar><RatingGraphFill /></RatingGraphBar>
                    <RatingGraphNumber>100</RatingGraphNumber>
                    </RatingGraphRow>
                </RatingGraphContainer>

                <StatContainer>
                    <StatContainerRow>
                        <StatContainerLabel>Overall</StatContainerLabel>
                        <Rating />
                        <ReviewAverage>4.0</ReviewAverage>
                    </StatContainerRow>

                    <StatContainerLabel>Most Recent Review</StatContainerLabel>
                    

                </StatContainer>

                <AddReviewButton>Add Review</AddReviewButton>
               </ReviewHeaderContainer>

               <Line />

                <IndividualRatingContainer>
                <RatingContents>
                <RatingContainerRow>
                    <Rating />
                    <ReviewTime>1 Day Ago</ReviewTime>
                </RatingContainerRow>
                <VerifiedUser>Verified User</VerifiedUser>
                <ReviewTitle>Great Plant</ReviewTitle>
                <Review>This product was great. I bought it for my kitchen and it has done well in the window.</Review>
                </RatingContents>
                </IndividualRatingContainer>
                <Line />

                <RatingContainer>
                    
                </RatingContainer>
                </ReviewSectionContainer>
        </PageContentWrapper>
    </PageContainer>
  )
}

export default ProductView
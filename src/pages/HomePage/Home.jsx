import React from "react";
import styled from "styled-components";
import { mobile } from "../../media";
import { Link } from "react-router-dom";
import PopularItemList from "../../components/Navbar/PopularItemList";
import Hero from "./HomeComponents/Hero";

const PageContainer = styled.main`
    width: 100%;
    height: 100%;
    font-family: Arial;
    background-color: #FEFDFD;
    color: #1B1212;
    margin-top: -20px;
    ${mobile({
    margin: '0px'
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
    marginTop: '-40px'
})};
`

const CategoryWrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-left: 15px;
    padding-bottom: 5px;
    width: 86%;
    height: 100%;
    ${mobile({
        marginTop: '0px',
        marginLeft: '0px',
        width: '95%'
    })};
`

const Banner = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: auto;
    width: 87%;
    &.pop-items{
        width: 86%;
        margin-top: 20px;
        ${mobile({
            marginTop: '0px',
            width: '93%',
        })};
    }
    ${mobile({
        marginTop: '0px',
        width: '93%',
    })};
`

const BannerTitle = styled.h1`
    display: flex;
    font-size: 26px;
    justify-content: flex-start;
    align-items: center;
    margin-left: 15px;
    ${mobile({
    fontSize: '18px',
    marginBottom: '10px',
    marginLeft: '0',
})};
`

const BannerButton = styled.button`
    display: flex;
    height: 44px;
    width: 100px;
    font-size: 16px;
    color: #FEFDFD;
    padding: 5px;
    align-items: center;
    justify-content: center;
    background-color: #517A3E;
    font-weight: 600;
    ${mobile({
    fontSize: '14px',
    height: '30px',
    width: '80px',
})};
`

const CategoryCard = styled.article`
    width: 23%;
    height: 60%;
    background: white;
    margin-left: 10px;
    border: 1px solid #CCD3C2;
    cursor: pointer;
    text-align: center;
    &.first-card {
        margin-left: 0px;
        ${mobile({
           display: 'none',
           marginLeft: '-10px'
        })};
    }
    ${mobile({
    height: '100%',
    width: '33.33%',
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
  cursor: pointer;
  color: #1B1212;
`

const Home = () => {
    return (
        <PageContainer>
            <Hero />
            <CategoryContainer>
                <Banner >
                    <BannerTitle>Categories</BannerTitle>
                    <RouterLink to='/all'><BannerButton>Explore</BannerButton></RouterLink>
                </Banner>
                <CategoryWrapper>
                    <CategoryCard className="first-card">
                        <RouterLink to={`/type/${'herb'}`}>
                            <CategoryImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ7K3U7J09TClMtwppkkqIoMEmkuwtbhHFqQ&usqp=CAU' alt='picture for herb category' />
                            <Name>Herbs</Name>
                        </RouterLink>
                    </CategoryCard>

                    <CategoryCard>
                        <RouterLink to={`/type/${'edible'}`}>
                            <CategoryImage src='https://www.denverpost.com/wp-content/uploads/2018/05/ap18100411714506-e1525912725340.jpg?w=1024' alt='picture for the edible category' />
                            <Name>Edible</Name>
                        </RouterLink>
                    </CategoryCard>

                    <CategoryCard>
                        <RouterLink to={`/type/${'flower'}`}>
                            <CategoryImage src='https://www.gardeningknowhow.com/wp-content/uploads/2021/07/green-home-houseplants.jpg' alt='picture for the flower category' />
                            <Name>Flowers</Name>
                        </RouterLink>
                    </CategoryCard>

                    <CategoryCard>
                        <RouterLink to={`/type/${'leafy'}`}>
                            <CategoryImage src='https://cdn.5280.com/2021/09/ReRoot_Courtesy-of-Coburn-Huff-__HuffPhoto-306484-960x720.jpg' alt='picture for the leafy category' />
                            <Name>Leafy</Name>
                        </RouterLink>
                    </CategoryCard>

                    <CategoryCard>
                        <RouterLink to='/easy'>
                            <CategoryImage src='https://www.popsci.com/uploads/2019/02/08/ODUYL5UEC5M234O7A3TNTM6JHI-1024x768.jpg?auto=webp' alt='picture for the easy care category' />
                            <Name>Easy Care</Name>
                        </RouterLink>
                    </CategoryCard>

                </CategoryWrapper>
                <Banner className="pop-items">
                    <BannerTitle>Popular Items</BannerTitle>
                    <RouterLink to='/all'><BannerButton>Shop All</BannerButton></RouterLink>
                </Banner>
                <CategoryWrapper>
                <PopularItemList />
                </CategoryWrapper>
            </CategoryContainer>
        </PageContainer>
    )
}

export default Home;
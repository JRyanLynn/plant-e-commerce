import styled from "styled-components"
import { mobile, tablet, desktop, laptop } from '../../media';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Page = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FEFDFD;
    font-family: Arial;
    color: #1B1212;
    ${mobile({
    marginTop: '-20px'
})};
`
export const MobileDivider = styled.hr`
    color: #1B1212;
    ${desktop({ display: 'none' })};
    ${laptop({ display: 'none' })};
    ${tablet({ display: 'none' })};
`
export const ProductPageContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    ${mobile({ marginTop: '20px' })};
`

export const ProductPageWrapper = styled.main`
    display: flex;
    width: 90%;
    height: 100%;
    flex-direction: column;
    background-color: #FEFDFD;
    ${mobile({
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
})};
    ${tablet({ width: '100%', })};
    ${laptop({ width: '100%', })};
`

export const SortWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    width: 96.20%;
    height: 100%;
    padding: 0px 10px 0px 10px;
    justify-content: center;
    align-items: flex-end;
    ${mobile({
    width: '100%',
    alignItems: 'center'
})};
    ${tablet({ width: '98%' })};
    ${laptop({ width: '98%' })};
`

export const SortButtonRow = styled.nav`
    display: flex;
    flex-direction: row;
    width: 75%;
    height: 30px;
    justify-content: space-between;
    align-items: center;
    ${mobile({
    width: '79%',
    marginLeft: '5px'
})};
    ${tablet({
    width: '69%',
    marginRight: '20px'
})};

${laptop({
    width: '70%',
    marginRight: '20px'
})};
`

export const SortButton = styled.button`
    display: flex;
    cursor: pointer;
    width: 100%;
    height: 5%;
    align-items: center;
    justify-content: space-between;
    padding: 0px 0px 3px 15px;
    font-weight: 500;
    font-size: 16px;
    background-color: #dcdcdc;
    border: 1px solid #1B1212;
    ${mobile({
    fontSize: '12px',
    margin: '0px',
    paddingLeft: '5px',
})};
`

export const SortComponentContainer = styled.menu`
    width: 15%;
    height: auto;
    margin-right: 10px;
    ${mobile({ width: '40%' })};  
    ${tablet({ width: '25%' })};  
    ${laptop({ width: '25%'})};  
`

export const SortOptionListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 800;
    cursor: pointer;
    width: 9.75%;
    height: auto;
    margin: 0;
    padding: 0;
    padding-bottom: 10px;
    font-size: 16px;
    background: #F5F5F5;
    border: 1px solid #CCD3C2;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
    ${mobile({
    width: '29.5%',
    margin: '0',
    right: '56px'
})};
    ${tablet({ width: '18%' })}; 
    ${laptop({ width: '16.75%' })};  
`
export const SortListTitle = styled.h1`
    font-Size: '28px';
    ${mobile({
    fontSize: '22px',
    marginLeft: '5px'
})};
    ${tablet({ marginLeft: '5px' })}; 
    ${laptop({ marginLeft: '5px' })};   
`

export const DropListItem = styled.li`
    font-weight: 500;
    position: relative;
    font-size: 16px;
    padding-left: 5px;
    list-style-type: none;
    margin-top: 10px;
    ${mobile({ fontSize: '12px' })};
`

export const SortDownArrow = styled(KeyboardArrowDownIcon)`
    margin-left: 5px;
`

export const CategoryFilterColumn = styled.menu`
    display: flex;
    width: 25%;
    margin-left: 20px;
    height: 100%;
    flex-direction: column;
    margin-top: 18px;
    ${mobile({ display: 'none' })}; 
`

export const ListTitle = styled.h2`
    font-size: 20px;
    ${mobile({ fontSize: '16px' })};
`

export const List = styled.ul`
    display: flex;
    width: 80%;
    height: 100%;
    margin-top: -5px;
    flex-direction: column;
    background: #FEFDFD;
    justify-content: center;
    align-items: flex-start;
    ${mobile({
    width: '100%',
    marginLeft: '-35px'
})};
    ${tablet({
    marginLeft: '-40px',
    width: '90%'
})};  

${laptop({
    marginLeft: '-40px',
    width: '90%'
})};  
`

export const ListItem = styled.li`
    list-style-type: none;
    font-size: 18px;
    padding: 2px;
    ${mobile({ fontSize: '14px' })};
`

export const ListInput = styled.input`
    width: 16px;
    height: 16px;
    margin-right: 5px;
    accent-color: #517A3E;
    ${mobile({
    height: '14px',
    width: '14px'
})};
`
export const BreakLine = styled.hr`
    color: lightgray;
    width: 90%;
`

export const PageContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background: #FEFDFD;
    ${mobile({
    alignItems: 'center',
    justifyContent: 'center'
})};  
`

export const ProductGridWrapper = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 10px 0px 100px 10px;
    background: #FEFDFD;
    ${mobile({
    padding: '0px',
    marginLeft: '40px',
    alignItems: 'center',
    width: '95%',
})};
    ${tablet({
    width: '90%',
    alignItems: 'center'
})};

${laptop({
    width: '90%',
    alignItems: 'center'
})};
`

export const NoResult = styled.h1`
    align-items: center;
    justify-content: center;
    margin: 100px 0px 0px 250px;
    ${mobile({
    marginLeft: '50px',
    fontSize: '24px'
})};

${laptop({
    marginLeft: '80px',
    fontSize: '24px'
})};
`

export const ProductCard = styled.article`
    width: 23%;
    height: 60%;
    background: white;
    margin: 5px;
    border: 1px solid #CCD3C2;
    cursor: pointer;
    ${mobile({ width: '40%' })};
    ${tablet({
    width: '22%',
    alignItems: 'center'
})};

${laptop({
    width: '22%',
    height: '275px',
    alignItems: 'center'
})};
`
export const ProductImg = styled.img`
    width: 100%;
    height: 200px;
    display: block;
    ${mobile({ height: '100px' })};
    ${tablet({
    height: '100px'
})};

${laptop({
    height: '150px'
})};
`

export const ProductInfo = styled.section`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    align-items: flex-start;
    justify-content: center;
    ${mobile({ marginLeft: '5px' })};
    ${tablet({ marginLeft: '5px' })};   
    ${laptop({ marginLeft: '5px' })}; 
`

export const ProductName = styled.h1`
    font-size: 20px;
    font-weight: 500;
    ${mobile({ fontSize: '12px' })};
    ${tablet({ fontSize: '12px', fontWeight: '600' })};
    ${laptop({ fontSize: '14px', fontWeight: '600' })};
`

export const Reviews = styled.div`
    font-size: 16px;
    margin: -3px 0px 5px 0px;
`
export const ReviewContainer = styled.div`
    Display: flex;
    align-items: center;
    height: 15px;
    margin-bottom: 10px;
`

export const ReviewText = styled.a`
    font-size: 12px;
    font-weight: 500;
    margin-left: 10px;
    ${mobile({ display: 'none' })};
    ${tablet({ display: 'none' })};
`

export const ProductPrice = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin: -3px 0px 10px 3px;
    ${mobile({ fontSize: '14px' })};
    ${tablet({ fontSize: '14px' })};
    ${laptop({ fontSize: '16px' })};
`
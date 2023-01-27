import {css} from 'styled-components'

export const mobile = (props) => {
    return css `
    @media only screen and (max-width: 430px) {
       ${props}
    }
    `
};

export const tablet = (props) => {
    return css `
    @media (min-width: 768px) and (max-width: 820px) {
        ${props}
     }
    `
};

export const laptop = (props) => {
    return css `
    @media (min-width: 850px) and (max-width: 1440px) {
        ${props}
     }
    `
};

export const desktop = (props) => {
    return css `
    @media (min-width: 1450px) and (max-width: 2560px) {
        ${props}
     }
    `
};


   
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import breakpoints from '/src/styles-breakpoints/breakpoints.jsx'



export const MyLogoImage = styled.img `
    width: 40px;
    margin-top: 5px;
    cursor: pointer;
`

//Header styles using Styled-components
export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60px;
    background-color: #080808;
    color: var(--secondary);
    position: fixed;

    @media ${breakpoints.mediusize} {
        justify-content: space-between;
        padding: 20px; 
    }

`

//Nav styles using Styled-components
export const NavStyled = styled.nav `
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media ${breakpoints.mediumsize} {
        display: none;
    }
`

//Link (react-router-dom) using Styled-components 
export const LinkHeader = styled(Link)`
    text-decoration: none;
    padding-right: 1.5rem;
    font-weight: bold;
    color: var(--white);
    font-size: 1.125rem;
    font-size: 1.4rem;

    &:hover {
        color: #3D8884;
        transition: ease-in .2s;
    }
    
`

export const BarsIcon = styled.img `
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(238deg) brightness(100%) contrast(100%); //setting to change the color of bars to white

    width: 30px;
    border: 1px solid #f7f7f7;
    display: none;
    cursor: pointer;

    @media ${breakpoints.mediumsize} {
        display: block; //max-width: 780px
    }
    
`

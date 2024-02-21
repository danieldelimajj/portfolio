import styled from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoints from '/src/styles-breakpoints/breakpoints.jsx'

export const MyLogoImage = styled.img`
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
    background-color: var(--primary);
    color: var(--secondary);
    position: fixed;

    @media ${breakpoints.mediumsize} {
        justify-content: space-between;
        padding: 20px; 
        background-color: #000000;
    }
`

//Nav styles using Styled-components
export const NavStyled = styled.nav`
    
    @media ${breakpoints.mediumsize} {
        background-color: var(--primary);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        display: ${props => (props.isOpen ? 'flex' : 'none')};
        position: fixed;
        top: 60px;
        left: 0px;
        width: 100vw; 
        height: 100%;
        padding-bottom: 2rem;
        text-transform: uppercase;
        
    }
`;


//Link (react-router-dom) using Styled-components 
export const LinkHeader = styled(Link)`
    text-decoration: none;
    padding-right: 1.5rem;
    font-weight: bold;
    color: var(--white);
    font-size: 1.325rem;
    padding-top: 1rem;

    &:hover {
        color: var(--tertiary);
        transition: ease-in .3s;
        
    }
    
    @media ${breakpoints.smallsize} { //max-width: 480px
        font-size: 1.8rem;
        font-weight: bold;
    }
`
export const BarsIcon = styled.img`
    width: 30px;
    display: none;
    cursor: pointer;
    
    @media ${breakpoints.mediumsize} {
        display: block; //max-width: 780px
    }
    
`



import styled from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoints from '/src/styles-breakpoints/breakpoints.jsx'

export const MyLogoImage = styled.img`
    display: flex;
    align-items: center;
    width: 36px;    
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
    border-bottom: 1px solid var(--white);
    

    @media ${breakpoints.mediumsize} {
        justify-content: space-between;
        padding: 20px; 
        
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
        padding-bottom: 8rem;
        text-transform: uppercase;
    }
`;


//Link (react-router-dom) using Styled-components 
export const LinkHeader = styled(Link)`
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    padding-right: 1.5rem;
    color: var(--white);
    font-size: 1.325rem;
    opacity: 95%;
    
    &:hover {
        color: var(--secondary);
    }

    @media ${breakpoints.mediumsize} { //max-width: 768px
        font-size: 1.6rem;
        font-weight: 400;
        color: var(--white);
        padding: 0px 15px;
        border-radius: 7px;
        border: 1px solid var(--white);
        

        &:hover {
            border: 1px solid var(--secondary);
            color: var(--white);
            transition: ease-out .2s;
            
        }

        
        
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



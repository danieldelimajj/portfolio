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
    background-color: #080808;
    color: var(--secondary);
    position: fixed;

    @media ${breakpoints.mediumsize} {
        justify-content: space-between;
        padding: 20px; 
    }

`

//Nav styles using Styled-components
export const NavStyled = styled.nav`
    display: flex;
    justify-content: space-around;

    @media ${breakpoints.mediumsize} {
        background-color: #3D8884;
        flex-direction: column;
        display: ${props => (props.isOpen ? 'flex' : 'none')};
        position: fixed;
        align-items: center;
        top: 60px;
        left: 0px;
        width: 100vw; 
        height: 100vh;
        padding: 50px;
    }
`;

//Link (react-router-dom) using Styled-components 
export const LinkHeader = styled(Link)`
    text-decoration: none;
    padding-right: 1.5rem;
    font-weight: bold;
    color: var(--white);
    font-size: 1.325rem;

    &:hover {
        color: #3D8884;
        transition: ease-in .2s;
    }
    
    @media ${breakpoints.smallsize} { //until 480px
        font-size: 3rem;
        padding-bottom: 5rem;
        font-weight: bold;
        
    }

    &:hover {
        color: #3D8884;
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



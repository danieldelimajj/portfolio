import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const MyLogoImage = styled.img `
    width: 40px;
    cursor: pointer;

`

//Header styles using Styled-components
export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60px;
    background-color: #000;
    color: var(--secondary);
    position: fixed;

`

//Nav styles using Styled-components
export const NavStyled = styled.nav `
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;

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

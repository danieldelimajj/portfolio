import styled from 'styled-components';
import breakpoints from '../../styles-breakpoints/breakpoints';

export const FooterStyles = styled.footer`
    width: 100%;
    height: 50px;
    background-color: var(--primary);
    color: var(--white);
    font-weight: bold;
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--white);
    

    @media ${breakpoints.smallsize} {
        font-size: 0.9rem;
        
        
    }
`



import styled from "styled-components";
import breakpoints from "../../styles-breakpoints/breakpoints";


export const SectionAboutMe = styled.section `
    width: 100vw;
    height: 95.1vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const MySelfImage = styled.img `
    width: 240px;
    margin-top: 6rem;
    border-radius: 50%;

    @media ${breakpoints.smallsize} { 
        width: 150px;
    }
    
`

export const AboutMe = styled.h2 `
    padding-top: 1rem;
    font-size: 1.725rem;
    font-weight: bold;
    text-align: center;

    @media ${breakpoints.smallsize} {
        font-size: 2.4rem;
        font-weight: 500;
    }
`

export const DivAboutMe = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ParagraphAboutMe = styled.p `
    padding-top: 0.3rem;
    font-size: 1.325rem ;
    text-align: center;
    font-weight: 500;
    color: var(--primary);

`

export const DivTechs = styled.h3 `
    padding: 1rem;

`

export const DivIconsSvg = styled.div `
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    width: 50px;
    
    @media ${breakpoints.smallsize} {
        margin-top: 1rem;
        width: 38px;
    }



`

export const SpanParagraph = styled.span `
    color: var(--secondary);
    font-weight: bold;
`
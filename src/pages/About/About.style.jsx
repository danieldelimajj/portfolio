import styled from "styled-components";
import breakpoints from "../../styles-breakpoints/breakpoints";

export const SectionAboutMe = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);
    color: var(--white);
    min-height: 100vh;
    overflow-x: hidden;
`

export const MySelfImage = styled.img `
    border-radius: 50%;
    width: 240px;
    
    @media ${breakpoints.smallsize} { 
        width: 120px;
        margin-top: 5rem;
        
       
    }

    @media ${breakpoints.mediumsize} {
    }

`

export const AboutMe = styled.h2 `
    padding-top: 0.4rem;
    font-size: 1.725rem;
    font-weight: bold;
    text-align: center;

    @media ${breakpoints.smallsize} {
        font-size: 1.1rem;
        font-weight: bold;
    }
`

export const SpanParagraph = styled.span `
    color: var(--secondary);
    font-weight: bold;
`

export const DivAboutMe = styled.div `
    display: flex;
    flex-direction: column;
    
`

export const ParagraphAboutMe = styled.p `
    background-color: var(--tertiary);
    margin: 18px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: 10px;
    font-weight: 500;
    color: var(--white);
    text-indent: 10px;
    font-size: 1.325rem;
    
    @media ${breakpoints.smallsize} {
        font-size: 1.1rem;
        width: 297px;
        font-weight: 500;
        
        
    }

    @media ${breakpoints.mediumsize} {
        padding: 2rem;
    }

    @media ${breakpoints.bigsize} {
        padding: 30px;
    }
    
`

export const DivTechs = styled.h3 `
    text-align: center;
    font-weight: 600;

    @media ${breakpoints.smallsize} {
        font-size: 1.4rem;
        padding-bottom: 0.3rem;
    }

    @media ${breakpoints.mediumsize} {
        
        
    }

`

export const DivIconsSvg = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    
    
    @media ${breakpoints.smallsize} {
        
    }

`

export const SvgIcons = styled.img `
    height: 50px;

    @media ${breakpoints.smallsize} {
        width: 28px;
        margin-bottom: 1.1rem;
        
    }
    

`


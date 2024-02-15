import styled from "styled-components";
import breakpoints from "/src/styles-breakpoints/breakpoints.jsx"


export const SectionContainer = styled.section `
    width: 100%;
    min-height: 95.2vh;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media ${breakpoints.mediumsize} {
        flex-direction: column;
    }

`

export const ContainerImg = styled.img `
    height: 300px;    

`

export const ContainerParagraph = styled.p `
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    padding-top: 1rem;
`

export const ContainerSpan = styled.span`
    color: var(--secondary);
` 

export const BtnHome = styled.button `
    width: 250px;
    height: 50px;
    font-size: 1.125rem;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: var(--secondary);
    color: var(--white);

    &:hover {
        background-color: var(--tertiary);
    }

`



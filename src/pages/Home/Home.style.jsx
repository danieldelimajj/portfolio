import styled from "styled-components";


export const SectionContainer = styled.section `
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;

`

export const ContainerImg = styled.img `
    height: 300px;    

`

export const ContainerParagraph = styled.p `
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
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



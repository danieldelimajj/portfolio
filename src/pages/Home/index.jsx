import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomeImage from '../../../src/home-image.svg'
import { BtnHome, ContainerImg, ContainerParagraph, ContainerSpan, SectionContainer } from './Home.style'


function Home() {
    return (
        <>
            <Header />
            <SectionContainer>
                <div>
                    <ContainerParagraph>
                        Olá, sou <br />
                        <ContainerSpan>
                            Daniel Lima
                        </ContainerSpan> <br />
                        Dev Front-end
                    </ContainerParagraph>
                    <BtnHome>
                        Saiba mais
                    </BtnHome>
                </div>

                <figure>
                    <ContainerImg src={HomeImage} alt='Home image' />
                </figure>
            </SectionContainer>
            <Footer />
        </>
    )
}

export default Home


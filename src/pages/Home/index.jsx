import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomeImage from '../../../src/assets/home-image.svg'
import { BtnHome, ContainerImg, ContainerParagraph, ContainerSpan, SectionContainer } from './Home.style'
import { Link } from 'react-router-dom'


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
                  
                  <Link to="/About">
                        <BtnHome>
                            Saiba mais
                        </BtnHome>
                    </Link>
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


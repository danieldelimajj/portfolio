import Header from "../../components/Header"
import Footer from "../../components/Footer"
import MyProfileImage from "../About/images/profile-image.jpg"
import { AboutMe, MySelfImage, SectionAboutMe, DivIconsSvg, DivTechs, DivAboutMe, ParagraphAboutMe, SpanParagraph } from "./About.style"
import SvgCss from "../About/images/css3.svg"
import SvgHtml from "../About/images/html5.svg"
import SvgJavaScript from "../About/images/js.svg"
import SvgReact from "../About/images/react.svg"


function About() {

    return (
        <>
            <Header />
            <SectionAboutMe>
                <figure>
                    <MySelfImage src={MyProfileImage} alt="My image" />
                </figure>

                <DivAboutMe>
                    <AboutMe>Sobre</AboutMe>
                    <ParagraphAboutMe>
                        Olá, Sou <SpanParagraph>Daniel Lima</SpanParagraph> 
                    </ParagraphAboutMe>

                    <ParagraphAboutMe>
                        Desenvolvedor <SpanParagraph>Front-end</SpanParagraph>
                    </ParagraphAboutMe>

                    <ParagraphAboutMe>
                       Comecei a estudar em Novembro de 2022. Tenho conhecimentos sobre responsividade com React
                    </ParagraphAboutMe>

                </DivAboutMe>

                <DivTechs>
                    <h3>Tecnologias</h3>
                </DivTechs>

                <DivIconsSvg>
                    <img src={SvgCss} alt="Svg CSS" title="CSS3" />
                    <img src={SvgHtml} alt="Svg HTML" title="HTML5" />
                    <img src={SvgJavaScript} alt="Svg JavaScript" title="JavaScript" />
                    <img src={SvgReact} alt="Svg React JS" title="ReactJs" />
                </DivIconsSvg>


            </SectionAboutMe>
            <Footer />
        </>
    )
}

export default About
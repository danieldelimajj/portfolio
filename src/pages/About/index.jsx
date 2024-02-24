import Header from "../../components/Header"
import Footer from "../../components/Footer"
import MyProfileImage from "../About/images/profile-image.jpg"
import { AboutMe, MySelfImage, SectionAboutMe, DivIconsSvg, DivTechs, DivAboutMe, ParagraphAboutMe, SpanParagraph, SvgIcons,} from "./About.style"
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
                <MySelfImage src={MyProfileImage} alt="My profile image" />
            </figure>
                <DivAboutMe>
                    <AboutMe>
                        Olá, Sou <SpanParagraph>Daniel Lima</SpanParagraph>
                    </AboutMe>

                    <AboutMe>
                        Desenvolvedor <SpanParagraph>Front-end</SpanParagraph>
                    </AboutMe>

                    <ParagraphAboutMe>
                        Comecei a estudar em Novembro de 2022 e busco minha primeira vaga como Desenvolvedor Front-end. Estou constantemente buscando aprender e aprimorar minhas habilidades, criando projetos com interfaces web intuitivas e que chamem atenção positivamente.
                        Minha maior preocupação é ver o usuário final contente com o resultado. 
                    </ParagraphAboutMe>

                   
                </DivAboutMe>

                <DivTechs>
                    Tecnologias
                </DivTechs>

                <DivIconsSvg>
                    <SvgIcons src={SvgCss} alt="Svg CSS" title="CSS3" />
                    <SvgIcons src={SvgHtml} alt="Svg HTML" title="HTML5" />
                    <SvgIcons src={SvgJavaScript} alt="Svg JavaScript" title="JavaScript" />
                    <SvgIcons src={SvgReact} alt="Svg React JS" title="ReactJs" />
                </DivIconsSvg>


            </SectionAboutMe>
            <Footer />
        </>
    )
}

export default About
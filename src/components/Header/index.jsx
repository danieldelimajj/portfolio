import { HeaderStyled, NavStyled, LinkHeader, MyLogoImage } from './Header.style'
import ImageLogo from '../../../src/mylogo.svg'


function Header() {
    return (
        <HeaderStyled>
            <figure>
                <LinkHeader to="/Portfolio">
                <MyLogoImage src={ImageLogo} alt="Minha logo"/>
                </LinkHeader>
            </figure>
            
            <NavStyled>
                <LinkHeader to="/Portfolio">Home</LinkHeader>
                <LinkHeader to="/About">Sobre</LinkHeader>
                <LinkHeader to="/Projects">Projetos</LinkHeader>
                <LinkHeader to="/Contacts">Contatos</LinkHeader>
            </NavStyled>
        </HeaderStyled>
    )
}

export default Header
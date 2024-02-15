import { HeaderStyled, NavStyled, LinkHeader, MyLogoImage, BarsIcon } from './Header.style'
import ImageLogo from '../../../src/assets/mylogo.svg'
import BarsImage from '../../assets/bars-solid.svg'




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

            <figure>
               <BarsIcon src={BarsImage} alt='Bars icon'> 
               </BarsIcon>
            </figure>

        </HeaderStyled>
    )
}

export default Header
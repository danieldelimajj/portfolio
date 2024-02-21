import { useState } from 'react'
import { HeaderStyled, NavStyled, LinkHeader, MyLogoImage, BarsIcon} from './Header.style'
import ImageLogo from '../../../src/assets/mylogo.svg'
import BarsImage from '../../assets/bars-white.svg'
import CloseImage from '../../assets/close-icon.svg'



function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);

    };

    return (
        <HeaderStyled>
            <figure>
                <LinkHeader to="/Portfolio">
                    <MyLogoImage src={ImageLogo} alt="Minha logo" />
                </LinkHeader>
            </figure>

            <NavStyled isOpen={isSidebarOpen}>
                
                <LinkHeader to="/Portfolio">Home</LinkHeader>
                <LinkHeader to="/About">Sobre</LinkHeader>
                <LinkHeader to="/Projects">Projetos</LinkHeader>
                <LinkHeader to="/Contacts">Contatos</LinkHeader>
            </NavStyled>

            <figure>
                <BarsIcon
                     src={isSidebarOpen ? CloseImage : BarsImage}
                     alt={isSidebarOpen ? 'Close icon' : 'Bars Icon'} 
                     onClick={toggleSidebar} 
                    />
            </figure>
        </HeaderStyled>
    )}
    
export default Header
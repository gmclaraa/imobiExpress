
import { Container, Logo, Menu } from './styles';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>

      <Menu>
        <ul>
          <li>
            <span>Cadastro/Login</span>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default Header;

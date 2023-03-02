import * as Styled from './styles';
import logoImg from '../../assets/Logo.svg';

export function Header() {
  return (
    <Styled.HeaderContainer>
      <img src={logoImg} />
    </Styled.HeaderContainer>
  );
}

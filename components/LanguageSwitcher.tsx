import styled from 'styled-components';
import { useLanguage } from 'contexts/language.context';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <SwitcherWrapper>
      <SwitcherButton onClick={toggleLanguage} active={language === 'id'}>
        ID
      </SwitcherButton>
      <Separator>|</Separator>
      <SwitcherButton onClick={toggleLanguage} active={language === 'en'}>
        EN
      </SwitcherButton>
    </SwitcherWrapper>
  );
}

const SwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SwitcherButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  color: ${props => props.active ? 'var(--primary)' : 'rgb(var(--text))'};
  font-size: 1.4rem;
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
`;

const Separator = styled.span`
  color: var(--border);
  font-size: 1.4rem;
`;

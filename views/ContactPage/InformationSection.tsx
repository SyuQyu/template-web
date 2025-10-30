import styled from 'styled-components';
import { useLanguage } from 'contexts/language.context';
import { media } from 'utils/media';

export default function InformationSection() {
  const { t } = useLanguage();

  return (
    <Wrapper>
      <SectionTitle>{t('contact.info.title')}</SectionTitle>
      
      {/* Jakarta Head Office */}
      <OfficeSection>
        <OfficeTitle>{t('contact.jakarta.title')}</OfficeTitle>
        <ContactDetails>
          <ContactItem>
            <Label>📍 Alamat:</Label>
            <Value>{t('contact.jakarta.address')}</Value>
          </ContactItem>
          {/* <ContactItem>
            <Label>📧 Email:</Label>
            <a
              href="mailto:info@mk-bersama.com?cc=darren@mk-bersama.com&subject=Inquiry%20from%20Client"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              info@mk.bersama.com
            </a>
          </ContactItem> */}
          {/* <ContactItem>
            <Label>📠 Fax:</Label>
            <Value>{t('contact.jakarta.fax')}</Value>
          </ContactItem> */}
        </ContactDetails>
      </OfficeSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  ${media('<=tablet')} {
    margin-right: 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: rgba(var(--text), 1);
  font-weight: bold;
  
  ${media('<=tablet')} {
    font-size: 2rem;
  }
`;

const OfficeSection = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(var(--primary), 0.05);
  border-radius: 1rem;
  border-left: 4px solid rgb(var(--primary));
`;

const OfficeTitle = styled.h4`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: rgb(var(--primary));
  font-weight: bold;
`;

const ContactDetails = styled.div`
  margin-bottom: 1.5rem;
`;

const ContactItem = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  ${media('<=tablet')} {
    margin-bottom: 1rem;
  }
`;

const Label = styled.span`
  font-weight: bold;
  color: rgba(var(--text), 1);
  font-size: 1.4rem;
`;

const Value = styled.span`
  color: rgba(var(--text), 0.8);
  font-size: 1.6rem;
  line-height: 1.4;
  
  a {
    color: rgb(var(--primary));
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: rgba(var(--primary), 0.8);
      text-decoration: underline;
    }
  }
`;
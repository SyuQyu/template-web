import styled from 'styled-components';
import { useLanguage } from 'contexts/language.context';
import { media } from 'utils/media';

export default function InformationSection() {
  const { t } = useLanguage();

  return (
    <Wrapper>
      <SectionTitle>{t('contact.info.title')}</SectionTitle>
      
      {/* Main Office */}
      <OfficeSection>
        <OfficeTitle>Main Office</OfficeTitle>
        <ContactDetails>
          <ContactItem>
            <Label>📍 Alamat:</Label>
            <Value>
              PT Mitra Kawan Bersama The East
              <br />
              Jalan Doktor Ide Anak Agung Gde Agung, Jl. Kuningan Barat Raya No.1, RT.5/RW.2, Kuningan, Kuningan Bar., Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
            </Value>
          </ContactItem>
          <ContactItem>
            <Label>📧 Email:</Label>
            <Value>
              Semua email yang dikirim dari client dikirim ke{' '}
              <EmailLink href="mailto:info@mk.bersama.com?cc=darren@mk-bersama.com&subject=Inquiry%20from%20Website">
                info@mk.bersama.com
              </EmailLink>
              <EmailNote>*automatically cc ke darren@mk-bersama.com</EmailNote>
            </Value>
          </ContactItem>
        </ContactDetails>
      </OfficeSection>
      
      {/* Jakarta Head Office */}
      <OfficeSection>
        <OfficeTitle>{t('contact.jakarta.title')}</OfficeTitle>
        <ContactDetails>
          <ContactItem>
            <Label>📍 Alamat:</Label>
            <Value>{t('contact.jakarta.address')}</Value>
          </ContactItem>
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
  line-height: 1.6;
  white-space: pre-line;
  
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

const EmailLink = styled.a`
  color: rgb(var(--primary));
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    color: rgba(var(--primary), 0.8);
    text-decoration: underline;
  }
`;

const EmailNote = styled.span`
  display: block;
  font-size: 1.3rem;
  color: rgba(var(--text), 0.6);
  font-style: italic;
  margin-top: 0.5rem;
`;
import styled from 'styled-components';

export default function InformationSection() {
  return (
    <Wrapper>
      <h3>Contact Information</h3>
      <ContactDetails>
        <ContactItem>
          <Label>Perusahaan:</Label>
          <Value>PT. Mitra Kawan Bersama</Value>
        </ContactItem>
        
        <ContactItem>
          <Label>Email:</Label>
          <Value>info@mitrakawanbersama.co.id</Value>
        </ContactItem>
        
        <ContactItem>
          <Label>Sales:</Label>
          <Value>sales@mitrakawanbersama.co.id</Value>
        </ContactItem>
        
        <ContactItem>
          <Label>Technical Support:</Label>
          <Value>support@mitrakawanbersama.co.id</Value>
        </ContactItem>
        
        <ContactItem>
          <Label>Telepon:</Label>
          <Value>+62 21 1234 5678</Value>
        </ContactItem>
        
        <ContactItem>
          <Label>WhatsApp:</Label>
          <Value>+62 812 3456 7890</Value>
        </ContactItem>
        
        <ContactItem>
          <Label>Alamat:</Label>
          <Value>
            Jl. Industri Raya No. 123<br />
            Kawasan Industri Jakarta<br />
            Jakarta Barat 11111<br />
            Indonesia
          </Value>
        </ContactItem>
      </ContactDetails>
      
      <BusinessHours>
        <h4>Jam Operasional</h4>
        <HoursItem>
          <HoursDay>Senin - Jumat:</HoursDay>
          <HoursTime>08:00 - 17:00 WIB</HoursTime>
        </HoursItem>
        <HoursItem>
          <HoursDay>Sabtu:</HoursDay>
          <HoursTime>08:00 - 12:00 WIB</HoursTime>
        </HoursItem>
        <HoursItem>
          <HoursDay>Minggu:</HoursDay>
          <HoursTime>Tutup</HoursTime>
        </HoursItem>
      </BusinessHours>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    color: rgba(var(--text), 0.7);
  }

  span {
    opacity: 1;
    color: rgba(var(--text), 1);
  }
`;

const ContactDetails = styled.div`
  margin-bottom: 3rem;
`;

const ContactItem = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
`;

const BusinessHours = styled.div`
  h4 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: rgba(var(--text), 1);
  }
`;

const HoursItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(var(--text), 0.1);
`;

const HoursDay = styled.span`
  font-weight: bold;
  color: rgba(var(--text), 1);
`;

const HoursTime = styled.span`
  color: rgba(var(--text), 0.8);
`;

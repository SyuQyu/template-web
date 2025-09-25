import styled from 'styled-components';
import { media } from 'utils/media';

const SectionsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem; 
  margin-top: 5rem;

  max-width: 1250px; 
  margin-left: auto;
  margin-right: auto;

  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;


export default SectionsWrapper;

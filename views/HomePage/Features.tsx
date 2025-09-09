import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Trading & Distribution',
    description:
      'Distribusi produk industri berkualitas tinggi dengan jaringan yang luas dan sistem supply chain yang efisien di seluruh Indonesia.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Technical Support',
    description:
      'Dukungan teknis profesional dari tim ahli berpengalaman, termasuk konsultasi, training, dan after-sales service yang responsif.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Industrial Equipment',
    description:
      'Menyediakan berbagai peralatan industri, mesin, komponen, dan tools berkualitas tinggi untuk mendukung operasional yang efisien.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Chemical Products',
    description:
      'Distribusi bahan kimia industri dengan standar keamanan tinggi dan sertifikasi internasional untuk berbagai aplikasi industri.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Safety Equipment',
    description:
      'Peralatan keselamatan kerja lengkap dengan sertifikasi untuk melindungi karyawan dan memastikan lingkungan kerja yang aman.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Custom Solutions',
    description:
      'Solusi khusus sesuai kebutuhan industri dengan analisis mendalam, rekomendasi produk, dan project management support.',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;

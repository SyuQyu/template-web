import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArticleCard from 'components/ArticleCard';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useResizeObserver } from 'hooks/useResizeObserver';
import { SingleArticle } from 'types';
import { media } from 'utils/media';

interface ScrollableBlogPostsProps {
  posts: SingleArticle[];
}

// Data dummy posts
const dummyPosts: SingleArticle[] = [
  {
    slug: 'industrial-equipment-solutions',
    meta: {
      title: 'Solusi Peralatan Industri Terpadu',
      description: 'Temukan berbagai peralatan industri berkualitas tinggi untuk meningkatkan efisiensi operasional perusahaan Anda.',
      imageUrl: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=250&fit=crop',
      tags: "Industrial Equipment, Manufacturing, Technology",
      date: '2024-01-15'
    },
    content: ''
  },
  {
    slug: 'chemical-products-distribution',
    meta: {
      title: 'Distribusi Produk Kimia Industri',
      description: 'Layanan distribusi bahan kimia industri dengan standar keamanan dan kualitas internasional.',
      imageUrl: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=400&h=250&fit=crop',
      tags: "Chemical Products, Safety, Quality",
      date: '2024-01-10'
    },
    content: ''
  },
  {
    slug: 'safety-equipment-importance',
    meta: {
      title: 'Pentingnya Peralatan Keselamatan Kerja',
      description: 'Mengapa investasi dalam peralatan keselamatan kerja adalah prioritas utama untuk setiap industri.',
      imageUrl: 'https://images.unsplash.com/photo-1580834619485-aaa1bb6e1696?w=400&h=250&fit=crop',
      tags: "Safety Equipment, PPE, Workplace Safety",
      date: '2024-01-08'
    },
    content: ''
  },
  {
    slug: 'partnership-success-stories',
    meta: {
      title: 'Kisah Sukses Kemitraan MKB',
      description: 'Bagaimana PT. Mitra Kawan Bersama membantu perusahaan mencapai efisiensi operasional yang optimal.',
      imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=250&fit=crop',
      tags: "Partnership, Success Story, Industrial Solutions",
      date: '2024-01-05'
    },
    content: ''
  },
  {
    slug: 'technical-support-excellence',
    meta: {
      title: 'Keunggulan Dukungan Teknis MKB',
      description: 'Layanan dukungan teknis profesional dan responsif untuk memastikan operasional yang lancar.',
      imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop',
      tags: "Technical Support, Professional Service, Customer Care",
      date: '2024-01-03'
    },
    content: ''
  },
  {
    slug: 'supply-chain-management',
    meta: {
      title: 'Manajemen Supply Chain yang Efisien',
      description: 'Sistem distribusi terpadu dengan jaringan luas untuk memastikan ketersediaan produk yang optimal.',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop',
      tags: "Supply Chain, Distribution, Logistics",
      date: '2024-01-01'
    },
    content: ''
  },
];

export default function ScrollableBlogPosts({ posts }: ScrollableBlogPostsProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>();

  const oneItemWidth = 350;
  const noOfItems = width / oneItemWidth;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <Section>
      <Container>
        <Content>
          <OverTitle>Our Expertise</OverTitle>
          <SectionTitle>Layanan & Solusi Terpadu</SectionTitle>
        </Content>
      </Container>

      <SwiperContainer ref={ref}>
        {hasMounted && (
          <Swiper modules={[A11y]} slidesPerView={noOfItems} spaceBetween={10} loop>
            {dummyPosts.map((singlePost, idx) => (
              <SwiperSlide key={singlePost.meta.title}>
                <ArticleCard
                  title={singlePost.meta.title}
                  description={singlePost.meta.description}
                  imageUrl={singlePost.meta.imageUrl}
                  slug={singlePost.slug}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </SwiperContainer>
    </Section>
  );
}

const Content = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:last-child {
    margin-top: 1rem;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const SwiperContainer = styled(Container)`
  max-width: 250em;
  height: 46rem;

  & > *:first-child {
    margin-top: 4rem;
  }

  ${media('<=desktop')} {
    max-width: 100%;
    padding: 0;
  }
`;

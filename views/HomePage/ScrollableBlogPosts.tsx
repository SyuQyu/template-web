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
    slug: 'getting-started-with-nextjs',
    meta: {
      title: 'Getting Started with Next.js 15',
      description: 'Learn how to build modern web applications with the latest version of Next.js framework.',
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
      tags: "test",
      date: '2024-01-15'
    },
    content: ''
  },
  {
    slug: 'typescript-best-practices',
    meta: {
      title: 'TypeScript Best Practices for 2024',
      description: 'Discover the latest TypeScript patterns and practices to write better, more maintainable code.',
      imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop',
      tags: "awesome",
      date: '2024-01-10'
    },
    content: ''
  },
  {
    slug: 'modern-css-techniques',
    meta: {
      title: 'Modern CSS Techniques Every Developer Should Know',
      description: 'Explore cutting-edge CSS features like container queries, CSS Grid, and custom properties.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      tags: "['CSS', 'Frontend', 'Design']",
      date: '2024-01-08'
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
          <OverTitle>features</OverTitle>
          <SectionTitle>What are you signing in for?</SectionTitle>
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

  ${media('<=largeDesktop')} {
    max-width: 100%;
    padding: 0;
  }
`;

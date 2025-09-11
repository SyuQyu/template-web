import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { formatDate } from 'utils/formatDate';
import { media } from 'utils/media';

interface NewsPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: 'company' | 'project' | 'industry' | 'safety';
  image: string;
  featured: boolean;
  tags: string[];
}

const NEWS_POSTS: NewsPost[] = [
  {
    id: 1,
    title: 'PT. MKB Raih Penghargaan Best Safety Performance 2023',
    excerpt: 'PT. Mitra Kawan Bersama meraih penghargaan Best Safety Performance dari Indonesian Construction Safety Association untuk pencapaian zero accident selama 24 bulan berturut-turut.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    date: '2023-12-15',
    author: 'Corporate Communications',
    category: 'company',
    image: '/demo-illustration-1.svg',
    featured: true,
    tags: ['Safety', 'Award', 'Achievement']
  },
  {
    id: 2,
    title: 'Ekspansi Fleet: Tambahan 5 Unit Crawler Crane Terbaru',
    excerpt: 'Untuk mendukung proyek-proyek besar tahun 2024, PT. MKB menambah armada dengan 5 unit crawler crane berkapasitas 750-2300 ton dari Liebherr dan Manitowoc.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    date: '2023-12-10',
    author: 'Equipment Division',
    category: 'company',
    image: '/demo-illustration-2.svg',
    featured: true,
    tags: ['Fleet', 'Equipment', 'Expansion']
  },
  {
    id: 3,
    title: 'Sukses Menyelesaikan Proyek LNG Tangguh Papua',
    excerpt: 'Proyek heavy lift untuk LNG plant expansion di Tangguh Papua berhasil diselesaikan ahead of schedule dengan performance yang memuaskan klien.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    date: '2023-12-05',
    author: 'Project Management',
    category: 'project',
    image: '/demo-illustration-3.png',
    featured: false,
    tags: ['Project', 'LNG', 'Papua', 'BP']
  },
  {
    id: 4,
    title: 'Kolaborasi Strategis dengan International Partners',
    excerpt: 'PT. MKB menjalin kerjasama strategis dengan Mammoet dan Sarens untuk memperkuat capability dalam handling proyek-proyek mega construction.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    date: '2023-11-28',
    author: 'Business Development',
    category: 'company',
    image: '/demo-illustration-4.png',
    featured: false,
    tags: ['Partnership', 'International', 'Collaboration']
  },
  {
    id: 5,
    title: 'Implementasi Digital Asset Management System',
    excerpt: 'Peluncuran sistem manajemen aset digital untuk optimalisasi maintenance schedule dan real-time monitoring equipment performance.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    date: '2023-11-20',
    author: 'IT Division',
    category: 'company',
    image: '/demo-illustration-5.png',
    featured: false,
    tags: ['Technology', 'Digital', 'Asset Management']
  },
  {
    id: 6,
    title: 'Trend Pertumbuhan Industri Oil & Gas Indonesia 2024',
    excerpt: 'Analisis outlook industri oil & gas Indonesia tahun 2024 dan dampaknya terhadap demand equipment rental untuk proyek-proyek upstream.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    date: '2023-11-15',
    author: 'Market Research',
    category: 'industry',
    image: '/demo-illustration-1.svg',
    featured: false,
    tags: ['Industry', 'Oil & Gas', 'Market Analysis']
  },
  {
    id: 7,
    title: 'Program Safety Training Certification Level 5',
    excerpt: 'PT. MKB meluncurkan program sertifikasi safety training level 5 untuk seluruh operator dan maintenance crew guna meningkatkan standard keselamatan kerja.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    date: '2023-11-10',
    author: 'HSE Department',
    category: 'safety',
    image: '/demo-illustration-2.svg',
    featured: false,
    tags: ['Safety', 'Training', 'Certification']
  },
  {
    id: 8,
    title: 'Kontrak Baru: PLTU Jawa-8 Senilai USD 42 Million',
    excerpt: 'PT. MKB memperoleh kontrak baru untuk proyek PLTU Jawa-8 dengan nilai kontrak USD 42 million untuk periode 30 bulan.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    date: '2023-11-05',
    author: 'Business Development',
    category: 'project',
    image: '/demo-illustration-3.png',
    featured: false,
    tags: ['Contract', 'Power Plant', 'PLN']
  }
];

const CATEGORIES = [
  { key: 'all', label: 'All News', count: NEWS_POSTS.length },
  { key: 'company', label: 'Company News', count: NEWS_POSTS.filter(p => p.category === 'company').length },
  { key: 'project', label: 'Project Updates', count: NEWS_POSTS.filter(p => p.category === 'project').length },
  { key: 'industry', label: 'Industry Insights', count: NEWS_POSTS.filter(p => p.category === 'industry').length },
  { key: 'safety', label: 'Safety & Compliance', count: NEWS_POSTS.filter(p => p.category === 'safety').length }
];

export default function NewsPage() {
  const featuredPosts = NEWS_POSTS.filter(post => post.featured);
  const recentPosts = NEWS_POSTS.filter(post => !post.featured).slice(0, 6);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'company': return '#2563eb';
      case 'project': return '#16a34a';
      case 'industry': return '#ea580c';
      case 'safety': return '#dc2626';
      default: return '#6b7280';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'company': return 'Company News';
      case 'project': return 'Project Update';
      case 'industry': return 'Industry Insight';
      case 'safety': return 'Safety & Compliance';
      default: return 'News';
    }
  };

  return (
    <>
      <Head>
        <title>News - PT. Mitra Kawan Bersama</title>
        <meta
          name="description"
          content="Latest news, project updates, industry insights dari PT. Mitra Kawan Bersama. Stay informed dengan perkembangan terbaru heavy equipment rental industry."
        />
      </Head>
      
      <NewsWrapper>
        <Container>
          <HeaderSection>
            <OverTitle>News & Updates</OverTitle>
            <SectionTitle>Latest News & Industry Insights</SectionTitle>
            <Description>
              Stay informed dengan berita terbaru, update proyek, dan insights industri 
              dari PT. Mitra Kawan Bersama. Dapatkan informasi terkini tentang 
              perkembangan company dan industry heavy equipment rental.
            </Description>
          </HeaderSection>

          <CategoryFilter>
            {CATEGORIES.map(category => (
              <CategoryButton key={category.key} active={category.key === 'all'}>
                {category.label} ({category.count})
              </CategoryButton>
            ))}
          </CategoryFilter>

          {featuredPosts.length > 0 && (
            <FeaturedSection>
              <SectionHeader>
                <OverTitle>Featured News</OverTitle>
                <SectionTitle>Highlight Stories</SectionTitle>
              </SectionHeader>
              
              <FeaturedGrid>
                {featuredPosts.map(post => (
                  <FeaturedCard key={post.id}>
                    <FeaturedImageWrapper>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={500}
                        height={250}
                      />
                      <CategoryTag color={getCategoryColor(post.category)}>
                        {getCategoryLabel(post.category)}
                      </CategoryTag>
                    </FeaturedImageWrapper>
                    
                    <FeaturedContent>
                      <PostMeta>
                        <MetaDate>{formatDate(new Date(post.date))}</MetaDate>
                        <MetaAuthor>By {post.author}</MetaAuthor>
                      </PostMeta>
                      
                      <FeaturedTitle>{post.title}</FeaturedTitle>
                      <FeaturedExcerpt>{post.excerpt}</FeaturedExcerpt>
                      
                      <TagsWrapper>
                        {post.tags.map(tag => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </TagsWrapper>
                      
                      <ReadMoreLink href={`/news/${post.id}`}>
                        Read Full Story →
                      </ReadMoreLink>
                    </FeaturedContent>
                  </FeaturedCard>
                ))}
              </FeaturedGrid>
            </FeaturedSection>
          )}

          <RecentSection>
            <SectionHeader>
              <OverTitle>Recent News</OverTitle>
              <SectionTitle>Latest Updates</SectionTitle>
            </SectionHeader>
            
            <NewsGrid>
              {recentPosts.map(post => (
                <NewsCard key={post.id}>
                  <NewsImageWrapper>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={350}
                      height={200}
                    />
                    <CategoryTag color={getCategoryColor(post.category)}>
                      {getCategoryLabel(post.category)}
                    </CategoryTag>
                  </NewsImageWrapper>
                  
                  <NewsContent>
                    <PostMeta>
                      <MetaDate>{formatDate(new Date(post.date))}</MetaDate>
                      <MetaAuthor>By {post.author}</MetaAuthor>
                    </PostMeta>
                    
                    <NewsTitle>{post.title}</NewsTitle>
                    <NewsExcerpt>{post.excerpt}</NewsExcerpt>
                    
                    <TagsWrapper>
                      {post.tags.slice(0, 2).map(tag => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </TagsWrapper>
                    
                    <ReadMoreLink href={`/news/${post.id}`}>
                      Read More →
                    </ReadMoreLink>
                  </NewsContent>
                </NewsCard>
              ))}
            </NewsGrid>
          </RecentSection>

          <SubscriptionSection>
            <SubscriptionCard>
              <SubscriptionContent>
                <SubscriptionTitle>Stay Updated</SubscriptionTitle>
                <SubscriptionText>
                  Subscribe to our newsletter untuk mendapatkan update terbaru 
                  tentang project news, industry insights, dan company announcements.
                </SubscriptionText>
                
                <SubscriptionForm>
                  <EmailInput type="email" placeholder="Enter your email address" />
                  <SubscribeButton>Subscribe</SubscribeButton>
                </SubscriptionForm>
              </SubscriptionContent>
            </SubscriptionCard>
          </SubscriptionSection>
        </Container>
      </NewsWrapper>
    </>
  );
}

const NewsWrapper = styled.div`
  padding: 5rem 0;
  
  & > *:not(:first-child) {
    margin-top: 6rem;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  max-width: 80rem;
  margin: 0 auto;
`;

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  margin-top: 2rem;
  color: var(--text-secondary);
`;

const CategoryFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 4rem 0;
  
  ${media('<=tablet')} {
    justify-content: flex-start;
  }
`;

const CategoryButton = styled.button<{ active?: boolean }>`
  padding: 1rem 2rem;
  border: 2px solid ${props => props.active ? 'var(--primary)' : 'var(--border)'};
  background: ${props => props.active ? 'var(--primary)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'rgb(var(--text))'};
  border-radius: 2rem;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary);
    color: ${props => props.active ? 'white' : 'var(--primary)'};
  }
`;

const FeaturedSection = styled.div`
  margin: 6rem 0;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3rem;
  
  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;

const FeaturedCard = styled.article`
  background: var(--cardBackground);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const FeaturedImageWrapper = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;
`;

const CategoryTag = styled.span<{ color: string }>`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: ${props => props.color};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

const FeaturedContent = styled.div`
  padding: 2.5rem;
`;

const PostMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const MetaDate = styled.span`
  color: var(--text-secondary);
  font-size: 1.3rem;
`;

const MetaAuthor = styled.span`
  color: var(--text-secondary);
  font-size: 1.3rem;
`;

const FeaturedTitle = styled.h3`
  font-size: 2.2rem;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  color: rgb(var(--text));
`;

const FeaturedExcerpt = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
`;

const Tag = styled.span`
  background: var(--tertiary);
  color: var(--primary);
  padding: 0.4rem 1rem;
  border-radius: 1.5rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

const ReadMoreLink = styled(Link)`
  color: var(--primary);
  font-weight: 600;
  font-size: 1.5rem;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const RecentSection = styled.div`
  margin: 6rem 0;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  
  ${media('<=tablet')} {
    grid-template-columns: 1fr;
  }
`;

const NewsCard = styled.article`
  background: var(--cardBackground);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const NewsImageWrapper = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const NewsContent = styled.div`
  padding: 2rem;
`;

const NewsTitle = styled.h4`
  font-size: 1.8rem;
  line-height: 1.4;
  margin-bottom: 1rem;
  color: rgb(var(--text));
`;

const NewsExcerpt = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const SubscriptionSection = styled.div`
  margin: 8rem 0;
`;

const SubscriptionCard = styled.div`
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 1.5rem;
  padding: 4rem;
  text-align: center;
  
  ${media('<=tablet')} {
    padding: 3rem 2rem;
  }
`;

const SubscriptionContent = styled.div`
  max-width: 60rem;
  margin: 0 auto;
`;

const SubscriptionTitle = styled.h3`
  font-size: 3rem;
  color: white;
  margin-bottom: 1.5rem;
  
  ${media('<=tablet')} {
    font-size: 2.4rem;
  }
`;

const SubscriptionText = styled.p`
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const SubscriptionForm = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 50rem;
  margin: 0 auto;
  
  ${media('<=tablet')} {
    flex-direction: column;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 1.5rem;
  border: none;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }
`;

const SubscribeButton = styled.button`
  padding: 1.5rem 3rem;
  background: white;
  color: var(--primary);
  border: none;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  ${media('<=tablet')} {
    padding: 1.5rem;
  }
`;

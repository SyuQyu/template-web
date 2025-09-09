import matter from 'gray-matter';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
// ...existing code...
import fs from 'fs';
import path from 'path';
import Container from 'components/Container';
import { formatDate } from 'utils/formatDate';
import { media } from 'utils/media';
import { getReadTime } from 'utils/readTime';
import Header from 'views/SingleArticlePage/Header';
import MetadataHead from 'views/SingleArticlePage/MetadataHead';
import OpenGraphHead from 'views/SingleArticlePage/OpenGraphHead';
import ShareWidget from 'views/SingleArticlePage/ShareWidget';
import StructuredDataHead from 'views/SingleArticlePage/StructuredDataHead';
// ...existing code...

export default function SingleArticlePage({ slug, frontmatter, content }: { slug: string; frontmatter: any; content: string }) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [readTime, setReadTime] = useState('');

  useEffect(() => {
    if (contentRef.current) {
      setReadTime(getReadTime(contentRef.current.textContent || ''));
    }
    // Lazy load prism theme
    const prismThemeLinkEl = document.querySelector('link[data-id="prism-theme"]');
    if (!prismThemeLinkEl) {
      const headEl = document.querySelector('head');
      if (headEl) {
        const newEl = document.createElement('link');
        newEl.setAttribute('data-id', 'prism-theme');
        newEl.setAttribute('rel', 'stylesheet');
        newEl.setAttribute('href', '/prism-theme.css');
        newEl.setAttribute('media', 'print');
        newEl.setAttribute('onload', "this.media='all'; this.onload=null;");
        headEl.appendChild(newEl);
      }
    }
  }, []);

  if (!frontmatter) {
    return null;
  }
  const { title, description, date, tags, imageUrl } = frontmatter;
  const meta = { title, description, date, tags, imageUrl, author: '' };
  const formattedDate = formatDate(new Date(date));
  const absoluteImageUrl = imageUrl ? imageUrl.replace(/\/\/+/, '/') : '';
  return (
    <>
      <Head>
        <noscript>
          <link rel="stylesheet" href="/prism-theme.css" />
        </noscript>
      </Head>
      <OpenGraphHead slug={slug} {...meta} />
      <StructuredDataHead slug={slug} {...meta} />
      <MetadataHead {...meta} />
      <CustomContainer id="content" ref={contentRef}>
        <ShareWidget title={title} slug={slug} />
        <Header title={title} formattedDate={formattedDate} imageUrl={absoluteImageUrl} readTime={readTime} />
      </CustomContainer>
    </>
  );
}

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDir);
  const paths = files
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => ({ params: { slug: file.replace(/\.mdx?$/, '') } }));
  return { paths, fallback: false };
}

// ...existing code...

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { slug } = params as { slug: string };
  const postsDir = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDir, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(source);
  return {
    props: { slug, frontmatter, content },
  };
}

const CustomContainer = styled(Container)`
  position: relative;
  max-width: 90rem;
  margin: 10rem auto;

  ${media('<=tablet')} {
    margin: 5rem auto;
  }
`;

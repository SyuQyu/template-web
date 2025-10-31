import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';
import { useLanguage } from 'contexts/language.context';

type SectionConfig = {
  titleKey: string;
  bodyKey: string;
  listKey?: string;
};

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  const getParagraphs = (key: string): string[] => {
    const value = t(key);
    if (!value || value === key) {
      return [];
    }
    return value.split('|').map((paragraph) => paragraph.trim()).filter(Boolean);
  };

  const getListItems = (
    key?: string,
  ): Array<{ label: string; description?: string }> => {
    if (!key) return [];
    const value = t(key);
    if (!value || value === key) {
      return [];
    }
    return value
      .split('|')
      .map((item) => item.trim())
      .filter(Boolean)
      .map((item) => {
        const [label, description] = item.split('::');
        return {
          label: label ? label.trim() : '',
          description: description ? description.trim() : undefined,
        };
      });
  };

  const sections: SectionConfig[] = [
    {
      titleKey: 'privacy.section1.title',
      bodyKey: 'privacy.section1.body',
      listKey: 'privacy.section1.items',
    },
    {
      titleKey: 'privacy.section2.title',
      bodyKey: 'privacy.section2.body',
      listKey: 'privacy.section2.items',
    },
    {
      titleKey: 'privacy.section3.title',
      bodyKey: 'privacy.section3.body',
      listKey: 'privacy.section3.items',
    },
    {
      titleKey: 'privacy.section4.title',
      bodyKey: 'privacy.section4.body',
    },
    {
      titleKey: 'privacy.section5.title',
      bodyKey: 'privacy.section5.body',
    },
    {
      titleKey: 'privacy.section6.title',
      bodyKey: 'privacy.section6.body',
      listKey: 'privacy.section6.items',
    },
    {
      titleKey: 'privacy.section7.title',
      bodyKey: 'privacy.section7.body',
    },
    {
      titleKey: 'privacy.section8.title',
      bodyKey: 'privacy.section8.body',
    },
    {
      titleKey: 'privacy.section9.title',
      bodyKey: 'privacy.section9.body',
    },
    {
      titleKey: 'privacy.section10.title',
      bodyKey: 'privacy.section10.body',
    },
    {
      titleKey: 'privacy.section11.title',
      bodyKey: 'privacy.section11.body',
    },
  ];

  const contactDetails = getParagraphs('privacy.contact.details');
  const updatedText = t('privacy.updated').replace(
    '{year}',
    new Date().getFullYear().toString(),
  );

  return (
    <Page title={t('privacy.pageTitle')}>
      <PrivacyPolicyContainer>
        <RichText>
          <h2>{t('privacy.heading')}</h2>
          {getParagraphs('privacy.intro').map((paragraph, idx) => (
            <p key={`intro-${idx}`}>{paragraph}</p>
          ))}

          {sections.map((section) => {
            const paragraphs = getParagraphs(section.bodyKey);
            const listItems = getListItems(section.listKey);
            const footer =
              section.titleKey === 'privacy.section6.title'
                ? getParagraphs('privacy.section6.footer')
                : [];

            return (
              <section key={section.titleKey}>
                <h3>{t(section.titleKey)}</h3>
                {paragraphs.map((paragraph, idx) => (
                  <p key={`${section.titleKey}-p-${idx}`}>{paragraph}</p>
                ))}
                {listItems.length > 0 && (
                  <ul>
                    {listItems.map((item, idx) => (
                      <li key={`${section.titleKey}-li-${idx}`}>
                        {item.description ? (
                          <>
                            <strong>{item.label}</strong> {item.description}
                          </>
                        ) : (
                          item.label
                        )}
                      </li>
                    ))}
                  </ul>
                )}
                {footer.map((paragraph, idx) => (
                  <p key={`${section.titleKey}-footer-${idx}`}>{paragraph}</p>
                ))}
              </section>
            );
          })}

          {contactDetails.length > 0 && (
            <>
              <p>{t('privacy.section11.body')}</p>
              <p>
                <strong>{contactDetails[0]}</strong>
                <br />
                {contactDetails.slice(1).map((line, idx) => (
                  <span key={`contact-${idx}`}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </>
          )}

          <p>
            <em>{updatedText}</em>
          </p>
        </RichText>
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: 4rem auto;
  padding: 0 2rem;
  
  h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: rgba(var(--text), 1);
  }
  
  h3 {
    font-size: 2.2rem;
    font-weight: 600;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    color: rgba(var(--text), 1);
  }
  
  p {
    font-size: 1.6rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: rgba(var(--text), 0.8);
  }
  
  ul {
    margin-bottom: 2rem;
    padding-left: 2rem;
    
    li {
      font-size: 1.6rem;
      line-height: 1.8;
      margin-bottom: 1rem;
      color: rgba(var(--text), 0.8);
      
      strong {
        color: rgba(var(--text), 1);
      }
    }
  }
  
  em {
    font-size: 1.4rem;
    color: rgba(var(--text), 0.6);
    font-style: italic;
  }
`;

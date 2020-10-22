import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Micro frontends',
    imageUrl: 'img/undraw_right_places_h9n3.svg',
    description: (
      <>
        Combine many small apps, empowering teams to choose their technology. 
        Stay nimble as your team, product, and tech stack grows and changes over time.
      </>
    ),
  },
  {
    title: 'Framework freedom',
    imageUrl: 'img/undraw_Ride_till_I_can_no_more_44wq.svg',
    description: (
      <>
        Use multiple frameworks in a application container,
        allowing you to split code by functionality
        and have Angular, React, Vue.js, etc. apps all living in harmony.
      </>
    ),
  },
  {
    title: 'Shared environment',
    imageUrl: 'img/undraw_pizza_sharing_wxop.svg',
    description: (
      <>
        Stand up new apps next to the old one.
        You write the applications, rollcake-spa makes them work together, consume the same base of data and won't load until all application are ready.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src="img/logo.svg" />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--md',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

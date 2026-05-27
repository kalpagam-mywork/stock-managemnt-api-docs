import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'API Reference',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, 
    description: (
      <>
        Explore complete OpenAPI specs, endpoint contracts, request/response structures, 
        and validation rules for the core stock engine.
      </>
    ),
    linkUrl: '/docs/api/stock-management-api-spec', 
    buttonText: 'View Spec →',
  },
  {
    title: 'Architecture Guides',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        A comprehensive technical guide detailing the core architecture, system capabilities, 
        and service layers of the stock management engine, including integration setups and system dependencies.
      </>
    ),
    linkUrl: '/docs', 
    buttonText: 'Read Docs →',
  },
  {
    title: 'Intelligent Workflows',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        An end-to-end architectural overview demonstrating how a conversational interface 
    coordinates with multi-node workflows and memory systems to generate intelligent, 
    real-time stock inventory insights.
      </>
    ),
    linkUrl: '/docs/ai/stock-management-ai-agent-guide', 
    buttonText: 'View AI Guide →',
  },
];

function Feature({Svg, title, description,linkUrl, buttonText}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className="margin-top--md">{title}</h3>
        <p>{description}</p>
        <div style={{ marginTop: '1.25rem', marginBottom: '1rem' }}>
          <Link
            className="button button--secondary button--sm"
            to={linkUrl}>
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

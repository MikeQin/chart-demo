import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//import Link from 'next/link'
import { Link } from '@nextui-org/react';
import { Grid, Card, Text } from '@nextui-org/react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chart Demo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Chart Demo!</a>
        </h1>
        <p className={styles.description}>
          The project is to demostrate different candlestick charts:<br/>{' '}
          <Link href='/apex-chart'>Apex Chart</Link>{', '}
          <Link href='/chart'>Lightweight Chart</Link>
        </p>
        <Grid className={styles.grid}>          
          <Card className={styles.card}>
            <a href="https://nextjs.org/docs">
              <Card.Header>
                <h2>Documentation &rarr;</h2>
              </Card.Header>
              <Card.Body>
                <p>Find in-depth information about Next.js features and API.</p>
              </Card.Body>
            </a>
          </Card>
          <Card className={styles.card}>
            <a  href="https://nextjs.org/learn">
              <Card.Header>
                <h2>Learn &rarr;</h2>
              </Card.Header>
              <Card.Body>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </Card.Body>
            </a>
          </Card>
          <Card className={styles.card}>
            <a  href="https://github.com/vercel/next.js/tree/canary/examples">
              <Card.Header>
                <h2>Examples &rarr;</h2>
              </Card.Header>
              <Card.Body>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </Card.Body>
            </a>
          </Card>
          <Card className={styles.card}>
            <a  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
              <Card.Header>
                <h2>Deploy &rarr;</h2>
              </Card.Header>
              <Card.Body>
                <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
              </Card.Body>
            </a>
          </Card>
          {/* <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </Grid>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

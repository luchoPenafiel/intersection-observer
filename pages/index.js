import React, { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Title from '../components/Title'
import Article from '../components/Article'

import data from '../data/data.json'

export default function Home() {
  const [activeArticle, setActiveArticle] = useState('01');

  const handleIntersect = (entries) => {
    if (entries[0].isIntersecting) {
      setActiveArticle(entries[0].target.id);
    }
  };

  const createObserver = (target) => {
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    observer.observe(target);
  };

  return (
    <>
      <Head>
        <title>Intersection Observer API</title>
      </Head>
      <main className={styles.main}>
        <ul className={styles.titles}>
          {data.titles.map(({title, id}) => {
            return <Title key={id} text={title} isActive={id === activeArticle} />
          })}
        </ul>

        <div className={styles.articles}>
          {data.articles.map(({id, title, content}) => {
            return <Article key={id} title={title} content={content} id={id} createObserver={createObserver} />
          })}
        </div>
      </main>
    </>
  )
}

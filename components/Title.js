import React from 'react'
import styles from '../styles/Title.module.css'

const Title = ({text, isActive}) => {
  return <li className={`${styles.title} ${isActive ? styles.active : ''}`}>{text}</li>
}

export default Title

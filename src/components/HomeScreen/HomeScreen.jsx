import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import styles from './HomeScreen.module.css'


function HomeScreen() {
  return (
    <Container fluid className={styles.backgroundContainer}>
      <Button variant="dark" className={styles.orderButton}>ORDER ONLINE</Button>
    </Container>
  )
}

export default HomeScreen

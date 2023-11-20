import React from 'react'
import styled from 'styled-components';
import Head from 'next/head'


const Container = styled.div`
  padding: 40px 80px;
  font-family: Schoolbell;
`
const Privacy = () => <>
  <Head>
    <title>Zokilla - Policy!</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Container>
    <h1 style={{ fontSize: "3em" }}>Privacy Policy</h1>
    <p>Nothing here</p> 
  </Container>
</>

export default Privacy
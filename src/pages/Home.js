import React from 'react'
import Main from '../components/Main';
import Navbar from '../components/Navbar'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #202020;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;


export default function Home() {
  return (
    <Container>
      <Top>
        <Navbar />
      </Top>
      <Main />
    </Container>
  );
}





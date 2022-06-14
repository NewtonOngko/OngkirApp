import React from 'react'
import styled from 'styled-components'
import Nodata from '../assets/nodata.png'

const Container = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
`;

export default function nodata() {
  return (
    <Container>
      <img src={Nodata} />
    </Container>
  );
}



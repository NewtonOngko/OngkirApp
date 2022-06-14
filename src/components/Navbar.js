import React from "react";
import styled from "styled-components";


const Container = styled.div`
  width: 960px;
  display: flex;
  align-content: center;
  justify-content: center;
  /* background-color: #202020; */
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between 30px;
`;

const Left = styled.div`
  margin: 0 15 0px 15px;
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  color: #fff;
  background-color: #ef4941;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 5px;
  margin-left: 25px;
`;
// const Input = styled.input`
//   border: none;
// `;

const Center = styled.div`
margin: 0 15 0px 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`;

const Logo = styled.h1`
  font-weight: bold;
  color: white;
  font-style: italic;
`;
const Right = styled.div`
  margin: 0 15 0px 15px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>ONGKIR APP</Logo>
          {/* <Input placeholder="Search" /> */}
        </Left>
        <Center>
          <MenuItem>Layanan Kami</MenuItem>
          <MenuItem>Tentang Kami</MenuItem>
        </Center>
        <Right>
          <Button> Mulai Pengiriman </Button>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;








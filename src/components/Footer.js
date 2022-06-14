import React from "react";
import styled from "styled-components";

const Container = styled.div`
  justify-content: center;
  align-items: center;
  flex: 1;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  font-size: 14px;
  margin: 20px 0px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Ongkir APP</Logo>
        <Desc>
        Ongkir App merupakan sebuah platform yang memudahkan para penjual dan pebisnis online untuk melakukan 
        cek tarif ongkir. Anda bisa cek ongkir JNE Cek ongkir JNE, cek tarif JNE, cek Tarif JNE, 
        serta ekspedisi lainnya menggunakan Shipper dalam melakukan cek tarif pengiriman dengan mudah, 
        cepat, akurat, di mana saja, dan kapan saja. Shipper mendukung pengecekan cek ongkos kirim termurah 
        dari berbagai macam ekspedisi yang ada di Indonesia
        </Desc>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Layanan Kami</ListItem>
          <ListItem>Tentang Kami</ListItem>
          <ListItem>Kerja Sama</ListItem>
          <ListItem>Faq</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
            Email : newton.ongko@gmail.com
        </ContactItem>
        <ContactItem>
            Phone Number : 0852-9674-9466
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;



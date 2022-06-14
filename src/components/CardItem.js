import React,{useEffect} from 'react'
import styled from 'styled-components'
import Logo from '../assets/LogoJNE.png'

const Container = styled.div`
  width: 860px;
  background-color: white;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 6%) 0px 1px 10px;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px 0px 20px;
`
const Label = styled.div`
  font-size: 16px;
  font-weight: 300;
`
const Value = styled.div`
  font-size: 16px;
  font-weight: 600;
`
const Button = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #ef4941;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin: 10px 0 ;
  padding: 10px 15px;
  border-radius: 5px;
`;


export default function CardItem(data){

  const ConverData =()=>{
    return data.data.map((item)=>{
      return ({
        "service":item.service,
        "time":item.cost[0].etd,
        "price":item.cost[0].value
      })
    })
  }
  console.log(ConverData())
  useEffect(() => {
    ConverData()
  }, []);

  return (
   ConverData().map((item)=>{
    return (
      <Container key={item.service}>
        <Row>
          <Column>
            <img height={50} src={Logo} />
          </Column>
          <Column>
            <Label>Service</Label>
            <Value>{item.service}</Value>
          </Column>
          <Column>
            <Label>Estimasi Waktu</Label>
            <Value>{item.time}{"Hari"}</Value>
          </Column>
          <Column>
            <Label>Harga</Label>
            <Value>{"Rp."}{item.price}</Value>
          </Column>
        </Row>
        <Button>Pesan Pengiriman</Button>
      </Container>
    );
   })
  );
}



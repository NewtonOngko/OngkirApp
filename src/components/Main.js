import axios from 'axios';
import React,{useState,useEffect} from 'react'
import styled from "styled-components";
import Card from './Card';
import Nodata from './Nodata';
import Selector from './Selector';
import SelectorCity from './SelectorCity';



const Container = styled.div`
  background-color: #202020;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
`;


const MainText = styled.h1`
  font-weight: bold;
  color: white;
  text-align: center;
`;

const ContainerSend = styled.div`
  width: 860px;
  display: flex;
  flex: 1;
  padding: 15px;
  background-color: white;
  align-items: center;

  flex-direction: column;
  border-radius: 10px;
`;

const ContainerSend2 = styled.div`
  flex: 1;
  margin-left: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

const Title = styled.h3`
text-align: left;
  margin: 0px 0px 10px 0px;
`
const Gap =styled.div`
  height: 10px;
`
const ContainerBot = styled.div`
  width: 860px;
  display: flex;
  flex-direction: row;  
  justify-content: space-between;
`;
const Wrapper =styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;  
`
const TextHeavy = styled.h3`
  color: white;
  margin-right: 15px;
`;
const Input = styled.input`
  border: none;
  margin-right: 15px;
`;
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

const TextAlign = styled.div`
  width: 100%;
  margin-left: 25px;
`;

const baseURL = "https://corsanywhere.herokuapp.com/https://api.rajaongkir.com/starter/province";
const baseURLcity =(id,province)=>{
  return `https://corsanywhere.herokuapp.com/https://api.rajaongkir.com/starter/city?id=${id}&province=${province}`
} 
const Urlcost="https://corsanywhere.herokuapp.com/https://api.rajaongkir.com/starter/cost"

export default function Main() {
  //Data
  const [post,setPost] = useState([]);
  const [dataCity,setDataCity] = useState([]);
  const [dataCity1,setDataCity1] = useState([]);

  //chosen value asal
  const [province, setProvince] = useState('1');
  const [city, setCity] = useState('');

  //chosen value Tujuan
  const [province1, setProvince1] = useState('1');
  const [city1, setCity1] = useState('');

  const[gram,setGram] = useState('')
  const[cost,setCost] = useState('')

  //handle change asal
  const handleChange = (event) => {
    setProvince(event.target.value);
    Getcity(event.target.value)
  };
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  //handle change tujuan
  const handleChange1 = (event) => {
    setProvince1(event.target.value);
    Getcity1(event.target.value)
  };
  const handleChangeCity1 = (event) => {
    setCity1(event.target.value);
  };
  const handleGram =(event)=>{
    setGram(event.target.value)
  }
  //conditional rendering
  const CardShow=(data)=>{
    if(cost){
      return <Card data={data}/>
    }
    return <Nodata/>
  }

  const Getcity = (province,id) =>{
    axios({
      url: baseURLcity(id ? id : "", province ? province : post[0].province_id ),
      method: "get",
      headers: {
        key: "1c85f9ece8b97dce207b17e094b18b00",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        setDataCity(response.data.rajaongkir.results);
        setCity(response.data.rajaongkir.results[0].city_id)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const Getcity1 = (province,id) =>{
    axios({
      url: baseURLcity(id ? id : "", province ? province : post[0].province_id),
      method: "get",
      headers: {
        key: "1c85f9ece8b97dce207b17e094b18b00",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        setDataCity1(response.data.rajaongkir.results);
        setCity1(response.data.rajaongkir.results[0].city_id)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const   GetCost =(asal,tujuan,berat)=>{
    axios({
      url: Urlcost,
      method: "post",
      headers: {
        key: "1c85f9ece8b97dce207b17e094b18b00",
        "Content-Type": "application/json",
      },
      data:{
        origin : asal,
        destination : tujuan,
        weight : berat,
        courier :'jne'
      }
    })
      .then((response) => {
        console.log(response)
        setCost(response.data.rajaongkir);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    axios({
      url: baseURL,
      method: "get",
      headers: {
        key: "1c85f9ece8b97dce207b17e094b18b00",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        setPost(response.data.rajaongkir.results);
        Getcity(response.data.rajaongkir.results[0].province_id);
        Getcity1(response.data.rajaongkir.results[0].province_id);
      })
      .catch((err) => {
        console.log(err);
      });
      // Getcity()
      // Getcity1()
  }, []);

  if (!post) return null;

  return (
    <Container>
      <MainText>Cek Tarif Pengiriman</MainText>
      <ContainerSend>
        <TextAlign>
          <Title> Asal </Title>
        </TextAlign>
        <ContainerSend2>
          <Selector
            label={"Pilih Provinsi"}
            options={post}
            value={province}
            onChange={handleChange}
          />
          <SelectorCity
            label={"Pilih Kota/Kabupaten"}
            options={dataCity}
            value={city}
            onChange={handleChangeCity}
          />
        </ContainerSend2>
      </ContainerSend>
      <Gap />
      <ContainerSend>
        <TextAlign>
          <Title> Tujuan </Title>
        </TextAlign>
        <ContainerSend2>
          <Selector
            label={"Pilih Provinsi"}
            options={post}
            value={province1}
            onChange={handleChange1}
          />
          <SelectorCity
            label={"Pilih Kota/Kabupaten"}
            options={dataCity1}
            value={city1}
            onChange={handleChangeCity1}
          />
        </ContainerSend2>
      </ContainerSend>
      <ContainerBot>
        <Wrapper>
          <TextHeavy>Berat (Dalam Gram)</TextHeavy>
          <Input value={gram} onChange={handleGram} />
        </Wrapper>
        <Button
         onClick={()=>GetCost(city,city1,gram)}
        >
          Cek Ongkir
        </Button>
      </ContainerBot>
     { <CardShow data={cost}/>}
    </Container>
  );
}






















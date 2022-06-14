import axios from 'axios';
import React,{useState,useEffect} from 'react'
import styled from "styled-components";
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
  display: flex;
  flex: 1;
  padding: 15px;
  background-color: white;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
`;

const ContainerSend2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Title = styled.h3`
  margin: 0;
`

const baseURL = "https://corsanywhere.herokuapp.com/https://api.rajaongkir.com/starter/province";
const baseURLcity =(id,province)=>{
  return `https://corsanywhere.herokuapp.com/https://api.rajaongkir.com/starter/city?id=${id}&province=${province}`
} 
export default function Main() {
  const [post,setPost] = useState([]);
  const [province, setProvince] = useState('');

  const [dataCity,setDataCity] = useState([]);
  const [city, setCity] = useState('');

  const handleChange = (event) => {
    setProvince(event.target.value);
    Getcity(event.target.value)
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const Getcity = (province,id) =>{
    axios({
      url: baseURLcity(id ? id : "", province ? province : ""),
      method: "get",
      headers: {
        key: "f246ffb1510268141d7e394d40cc9ea6",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        // console.log(response.data.rajaongkir.results);
        setDataCity(response.data.rajaongkir.results);
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
        key: "f246ffb1510268141d7e394d40cc9ea6",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        // console.log(response.data.rajaongkir.results)
        setPost(response.data.rajaongkir.results);
      })
      .catch((err) => {
        console.log(err);
      });
      Getcity()
  }, []);

  if (!post) return null;

  return (
    <Container>
      <MainText>Cek Tarif Pengiriman</MainText>
      <ContainerSend>
        <Title> Asal </Title>
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
    </Container>
  );
}










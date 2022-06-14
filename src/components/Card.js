import React from 'react'
import styled from 'styled-components'
import CardItem from './CardItem';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 20px 0px 20px;
`;

const Title = styled.h2`
  font-weight: 300;
`

const Date = styled.div`
  font-weight: 300;
  margin:10px;
`
// const data={
//   "query": {
//       "origin": "501",
//       "destination": "114",
//       "weight": 1700,
//       "courier": "jne"
//   },
//   "status": {
//       "code": 200,
//       "description": "OK"
//   },
//   "origin_details": {
//       "city_id": "501",
//       "province_id": "5",
//       "province": "DI Yogyakarta",
//       "type": "Kota",
//       "city_name": "Yogyakarta",
//       "postal_code": "55111"
//   },
//   "destination_details": {
//       "city_id": "114",
//       "province_id": "1",
//       "province": "Bali",
//       "type": "Kota",
//       "city_name": "Denpasar",
//       "postal_code": "80227"
//   },
//   "results": [
//       {
//           "code": "jne",
//           "name": "Jalur Nugraha Ekakurir (JNE)",
//           "costs": [
//               {
//                   "service": "OKE",
//                   "description": "Ongkos Kirim Ekonomis",
//                   "cost": [
//                       {
//                           "value": 52000,
//                           "etd": "4-5",
//                           "note": ""
//                       }
//                   ]
//               },
//               {
//                   "service": "REG",
//                   "description": "Layanan Reguler",
//                   "cost": [
//                       {
//                           "value": 56000,
//                           "etd": "2-3",
//                           "note": ""
//                       }
//                   ]
//               }
//           ]
//       }
//   ]
// }

const Card = (data) => (
  // console.log('data',data)
  <Container>
    <Title>{"Asal : "}<b>{data.data.data.origin_details.type +" "+data.data.data.origin_details.city_name+" "}</b>{"Tujuan : "}<b>{data.data.data.destination_details.type +" "+data.data.data.destination_details.city_name+" "}</b></Title>
    <Date>{"Kurir : "}<b>{data.data.data.results[0].name}</b></Date>
    <CardItem data={data.data.data.results[0].costs}/>
  </Container>
);
export default Card
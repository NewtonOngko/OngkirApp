import * as React from 'react';
import styled from "styled-components";

const Container = styled.div`
  margin: 0px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label =styled.label`
  font-weight: 600;
  font-size: 16px;
`

const Select = styled.select`
  border: 0px;
  font-weight: 400;
  font-size: 14px;
  padding: 10px;
  border-radius: 10px;
  /* appearance: none; */
`;
const Selector = ({ label, value, options, onChange }) => {
  return (
    <Container>
      <Label>
        {label}
      </Label>
      <Select
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.province_id} value={option.province_id}>
              {option.province}
            </option>
          ))}
        </Select>
    </Container>
  );
};







export default Selector;
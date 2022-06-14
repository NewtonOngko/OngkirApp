import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(to right, #304352, #d7d2cc);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  display: inline-block;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 1rem 1.2rem;
  border: 2px solid white;
  border-radius: 3px;
  display: block;
  background-color: #5489ef;
  border-radius: 5px;
`;

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputField = styled.input`
  width: 100%;
  height: 2rem;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Box = styled.div`
  background-color: white;
  width: 12rem;
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%);
  padding: 5rem 6rem;
  border-radius: 10px;
`;

const Label = styled.label`
  font-size: 16px;
  text-align: left;
  margin: 1rem 0 0.5rem 0;
`;

const H1 = styled.h1`
  margin: 0;
  text-align: left;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size:42px ;
  font-style: italic;
`;

const database = [
  {
    username: "user1",
    password: "pass1",
  },
  {
    username: "user2",
    password: "pass2",
  },
];

const errors = {
  uname: "invalid username",
  pass: "invalid password",
};

export default function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div style={{ color: "red" }}>{errorMessages.message}</div>
    );
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  return (
    <Container>
      <Logo>ONGKIR APP</Logo>
      <Box>
        <H1>Sign In</H1>
        <form onSubmit={handleSubmit}>
          <InputFieldWrapper>
            <Label>Username </Label>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <InputField id="input-user" type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
          </InputFieldWrapper>
          <InputFieldWrapper>
            <Label>Password </Label>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <InputField
                id="input-password"
                name="pass"
                type="password"
                required
              />
              {renderErrorMessage("pass")}
            </div>
          </InputFieldWrapper>
          <ButtonWrapper>
            <Button>Submit</Button>
          </ButtonWrapper>
          {isSubmitted ? (
            navigate('home')
          ) : (
            <div></div>
          )}
        </form>
      </Box>
    </Container>
  );
}

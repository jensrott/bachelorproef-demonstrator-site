import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
  transition: background 0.3s;
`;

const Card = styled.div`
  border-radius: 2rem;
  width: 450px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 8, 0.08) 0px 4px 8px 0px;
  padding: 28px;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  color: #d45b42;
  text-align: center;
`;

const ErrorMessage = ({ message }) => {
  return (
    <Container>
      <Card>
        <Title>{message}</Title>
      </Card>
    </Container>
  );
};

export default ErrorMessage;

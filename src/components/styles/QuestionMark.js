import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  color: #fff;
  background-color: #eb8555;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const QuestionMark = ({ link, icon }) => {
  return (
    <Button to={`${link}`}>
      <i className={`${icon}`} />
    </Button>
  );
};

export default QuestionMark;

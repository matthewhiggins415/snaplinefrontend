import React, { useState } from 'react';
import { Container, Top, Answer, Btn, BtnContainer } from '../../styles/components/Faq.styles';
import { MdOutlineExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { TiDelete } from "react-icons/ti";

const Faq = ({ data, user }) => {
  const [show, setShow] = useState(false)
  const { question, answer } = data

  const handleShow = () => {
    setShow(!show);
  }

  const handleDelete = () => {
    console.log('delete')
  }

  return (
    <Container>
      <Top>
        <h3>{question}</h3>
        <BtnContainer>
          <Btn onClick={handleShow}>{show ? <MdExpandLess /> : <MdOutlineExpandMore />}</Btn>
          {user?.isAdmin === true ? <Btn onClick={handleDelete}><TiDelete /></Btn> : ''}
        </BtnContainer>
      </Top>
      <Answer show={show}>{answer}</Answer>
    </Container>
  )
}

export default Faq
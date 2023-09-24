import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100px; 
  background-color: #fff;
  align-items: center;
  border-bottom: 2px solid #ECECEC;
  padding: 0px 20px 0px 20px;
  margin: 0 auto;
`
export const BarIcon = styled.button`
  margin: 12px;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: 150ms ease-in-out;

  &:hover {
    box-shadow: 0 3px 10px -3px rgba(255, 99, 71, 0.8);
  }
`
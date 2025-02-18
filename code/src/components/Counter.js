import React from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';

const Counter = () => {
  const TaskCount = useSelector((store) => store.todo.items.length);
  return (
    <CounterWrap>
      <CounterText>You have {TaskCount} tasks to complete today</CounterText>
    </CounterWrap>
  )
}

export default Counter;

const CounterWrap = styled.div`
position: relative;
bottom: 290px;
`
const CounterText = styled.p`
font-family: 'Quicksand', sans-serif;
position: relative;
width: 270px;
color: white;
margin: 0 auto;
`

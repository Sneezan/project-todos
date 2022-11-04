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
right: 122%;
top: 10px;
`
const CounterText = styled.p`
position: relative;
width: 200px;
color: white;
`

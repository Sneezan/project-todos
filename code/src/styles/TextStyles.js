import styled from 'styled-components'

export const TaskTitle = styled.h1`
display: flex;
margin: 0;
font-size: 1.4rem;
font-weight: 300;
padding-top: 10px;
&.complete-todo{
    color: grey;
}
`

export const Priority = styled.h3`
color: #F55E2F; 
position: relative;
max-width: 25px;
left: 87%;
line-height: 0rem;
top: 23px;
&.complete-todo{
    color: lightgrey;
}
`

export const TaskDescription = styled.p`
font-size: 0.8rem;
margin: 4px;
padding-top: 8px;
color: #5987DF; 
`

export const Deadline = styled.h3`
line-height: 0rem;
font-size: 0.8rem;
font-weight: 400;
&.complete-todo{
    color: grey;
}
`
export const CreatedAt = styled.p`
line-height: 1rem;
font-size: 0.7rem;
margin-bottom: 0;
&.complete-todo{
    color: grey;
}

`
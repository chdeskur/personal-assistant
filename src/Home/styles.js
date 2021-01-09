import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  max-width: 400px;
  top: 40%;
  left: 50%;
  margin: -50px 0 0 -200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: lightblue;
  font-family: 'Times New Roman';
  transition: 0.5s ease;

  &:hover {
    box-shadow: 10px 10px 5px lightgrey;
  }
`

export const Text = styled.h2`
  letter-spacing: 6px;
  color: white;
  text-align: center;
  font: 'Times New Roman';
  font-size: 20px;
`

export const Other = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font: 'Times New Roman';
`

export const Strike = styled.td`
  text-decoration: line-through;
`
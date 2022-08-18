import styled from "styled-components"

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme}) => theme.$backgroundColors.$main};
`
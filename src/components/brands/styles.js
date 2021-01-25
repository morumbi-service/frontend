import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  padding: 5vh 0;
  justify-content: center;
  align-items: center;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;
`
export const Card = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 23px;
  border-radius: 6px;

  background: rgba(115 115 115 / 30%);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgb(120 120 120 / 30%) 42%, rgb(51 51 51 / 30%) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgb(122 122 122 / 30%);
  transition: 0.2s;
`

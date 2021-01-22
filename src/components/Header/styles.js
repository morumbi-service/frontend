import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0 100px;
  justify-content: space-between;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);

  `
export const Navigation = styled.div`
  display: flex;
  gap: 40px;
  color: #f0f0f0;
  font-weight: 300;
  align-items: center;
`
export const NavigationItem = styled.a`
  cursor: pointer;
  &:after {
    content:'';
    display: block;
    width: 0;
    height: 2px;
    background: #156DAC;
    transition: width .3s
  }

  &:hover::after{
    width: 100%;
    transition: width .3s;
  }

`
export const NavigationButton = styled.button`
  background: #fff;
  padding: 8px 23px;
  border-radius: 6px;

  margin: auto;
  background: rgb(115 115 115 / 30%);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgb(120 120 120 / 30%) 42%, rgb(51 51 51 / 30%) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgb(122 122 122 / 30%);
  transition: 0.2s;

  &:hover{
    filter: opacity(70%)
  }
`
export const Text = styled.p`
  color: var(--white--color);
  font-size:15px;

  cursor: pointer;
`

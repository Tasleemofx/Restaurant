import styled from "styled-components"

export const Navbg = styled.nav`
  background: white;
  margin: 1rem;
  padding: 1rem;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 400px){
    display: none;
  }
  `
export const NavUl= styled.ul`
  display: flex;
  margin: 1em;
`
export const NavItem = styled.li`
    text-transform:uppercase;
    border-bottom: 1px solid black;
    font-size: 0.7em;
    margin: 1em ;
    list-style: none;
  `
export const LogoSpan = styled.span`
  font-family: cursive;
  color: red;
`
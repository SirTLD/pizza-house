import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 20px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 10px;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-120%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2.5rem;
  transfrom: translate(-50%, -15%);
  ${'' /* padding-right: 0.5rem; */}
  margin-top: 15px;
  margin-right: 4rem;

  @media screen and (max-width: 400px) {
    margin-right: 1rem;
  }
`;

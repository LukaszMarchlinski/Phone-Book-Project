import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  border-bottom: 1px solid rgba(0, 0, 40, 0.2);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;

  padding-top: 15px;
  padding-bottom: 15px;
`;

export const NavLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  width: 95%;
  margin-bottom: 3px;
  padding: 12px 0 12px 0;
  font-weight: 700;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  color: #54b95f;

  &:hover,
  &.active {
    color: #198754;
    background-color: rgba(0, 0, 40, 0.2);
  }
`;

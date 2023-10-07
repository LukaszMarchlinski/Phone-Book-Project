import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  padding: 12px 0 12px 0;
  font-weight: 700;
  color: white;
  width: 95%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  color: #54b95f;

  &:not(:last-child) {
    margin-bottom: 3px;
  }

  &:hover,
  &.active {
    color: #198754;
    background-color: rgba(0, 0, 40, 0.2);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  margin-top: 15px;
`;

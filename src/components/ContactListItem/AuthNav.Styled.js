import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  padding: 12px 0 12px 0;
  font-weight: 700;
  width: 95%;
  border-radius: 8px;
 
  

  color: #54b95f;

  &:not(:last-child) {
    margin-bottom: 3px;
  }

  &:hover,
  &.active {
    color: #93F600;
    background-color: rgba(28, 132, 250, 0.8);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  margin-top: 15px;
`;

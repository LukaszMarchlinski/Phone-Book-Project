import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavBar = styled(motion.div)`
position: fixed;
z-index: 10;
top: 0;
left: 0;
height: 100vh;
width: 270px;
background-color: rgba(215, 234, 255, 0.8);
`;

export const ToggleBtn = styled.button`
display: inline-flex;
justify-content: center;
align-items: center;

margin-left: 7px;

padding: 2px;
border-radius: 8px;
transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
  scale 500ms cubic-bezier(0.4, 0, 0.2, 1);

background-color: transparent;
border-radius: 8px;
border: none;
cursor: pointer;
color: #1c84fa;
width: 95%;

&:hover,
  &.active {
    color: #1c84fa;
    background-color: rgba(147, 246, 0, 0.8);
  }
`;

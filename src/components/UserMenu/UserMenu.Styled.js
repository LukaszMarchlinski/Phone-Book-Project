import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
`;

export const GreetingTextLarge = styled.p`
width: 120px;
font-weight: 700;
color: #54b95f;
text-align: center;
`;

export const GreetingTextSmall = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #54b95f;
  text-align: center;
`;

export const BtnOut = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  padding: 10px;
  border-radius: 8px;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 500ms cubic-bezier(0.4, 0, 0.2, 1);

  color: #54b95f;

  &:hover {
    transform: translate(2px);
    scale: 0.99;
    color: #198754;
    background-color: rgba(0, 0, 40, 0.2);
  }
`;
export const AccentTextLarge = styled.span`
  font-weight: 700;
  color: black;
`;

export const AccentTextSmall = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: black;
`;

export const IconWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #54b95f;
width: 35px;
height: 35px;
border-radius: 50%;
`;

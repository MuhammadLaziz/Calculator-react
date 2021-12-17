import styled from "styled-components";

export const Calc = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 400px;
  margin: 30px auto;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 100px);
  box-shadow: 2px 2px 10px #333;
  border-radius: 10px;
`;

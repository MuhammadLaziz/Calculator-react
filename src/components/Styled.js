import styled from "styled-components";

export const Container = styled.div`
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

export const Screen = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1 / -1;
  background-color: rgba(60, 64, 67, 0.75);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Previous = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
`;

export const Current = styled.div`
  color: #fff;
  font-size: 2.5rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-size: 2rem;
  border: 1px outset #fff;
  outline: none;
  background-color: rgba(255, 255, 255, 0.75);
  &:hover{
    background-color: rgba(255, 255, 255, 0.9);
    color: #000
  }

  ${function({gridSpan}) {
    if(gridSpan) {
      return `grid-column: span ${gridSpan}` 
    }
  }}

  ${({equal}) => equal && `grid-column: span ${equal}; border-bottom-right-radius: 5px`}
  ${({operation}) => operation && `background-color: #333; color: #fff`}
  ${({control}) => control && `background-color: #062057; color: #fff`}
  ${({period}) => period && `border-bottom-left-radius: 5px; grid-column: span ${period}`}
`;

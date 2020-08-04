import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
to {
    transform: rotate(360deg);
  }
`;

// eslint-disable-next-line no-unused-vars
export const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--primary);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${rotate} 1s linear infinite;
`;

// eslint-disable-next-line no-unused-vars
export const Categoria = styled.div`
  height: 50px;
  border:solid 5px ${(props) => props.cor};
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:10px;
  font-weight:bold;
  color: ${(props) => props.cor};
`;

// eslint-disable-next-line no-unused-vars
export const ContainerCategorias = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));
  margin: 20px 0;
`;

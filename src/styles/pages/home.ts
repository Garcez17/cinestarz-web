import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
`;

export const Wrapper = styled.div`
  height: 40%;
  margin-top: 32px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;
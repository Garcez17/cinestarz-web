import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 320px;
  height: 200px;
  background: #1D4E80;
  border-radius: 16px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  
  button {
    font-size: 20px;
    color: #fff;
    border: 0;
    background: transparent;
    height: 100%;
    width: 100%;
  }
`;

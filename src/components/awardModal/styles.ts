import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled.div`
  background: rgba(9, 10, 12, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
`;

export const Envelope = styled.div`
  background: #F4F3F1;
  position: relative;
  width: 800px;
  height: 350px;
  padding: 32px 0;

  color: #212227;
  
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 99;

  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-bottom: 8px;
    font-size: 32px;
    font-weight: bold;
  }

  i {
    margin-top: 64px;
    font-size: 24px;
  }

  img {
    margin-top: 48px;
  }

  button {
    border: 0;
    background: transparent;
    z-index: 2;
  }
`;

export const Separator = styled.div`
  width: 70%;
  height: 1px;

  background: #212227;
`;

export const Container = styled.div`
  background: #DAA520;
  width: 100%;
  position: relative;
  
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 99;

  span {
    font-size: 32px;
  }
`;

export const Wrapper = styled.div`
  width: 800px;
  height: 350px;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: 0;
    background: transparent;
    z-index: 2;
  }
`;

type BarProps = {
  position: 'right' | 'left';
}

export const Bar = styled.div<BarProps>`
  width: 52.5%;
  height: 12px;
  background: #292929;
  position: absolute;
  border-radius: 8px;

  top: 85px;
  left: ${props => props.position === 'left' ? '-20px' : null};
  right: ${props => props.position === 'right' ? '-20px' : null};

  transform: ${props => props.position === 'left' ? 'rotate(25deg)' : 'rotate(-25deg)'};
`;

export const Image = styled(motion.img)`
  width: 70px;
  height: 70px;
  cursor: pointer;
  align-self: center;
`;
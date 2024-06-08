import { motion } from "framer-motion";
import styled from "styled-components";

export const Title = styled(motion.div)`
  position: sticky;

  font-size: 30px;
  font-weight: 700;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 20vh;
`;

export const Content = styled(motion.div)`
  height: 100vh;
  padding: 20px;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

export const SubContent = styled.div`
  margin-bottom: 20px;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Detail = styled.div`
  margin-left: 5px;
  margin-top: 2px;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.1px;

  font-weight: normal;
`;

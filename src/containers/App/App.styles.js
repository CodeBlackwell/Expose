import styled from 'styled-components';
import { plum, midnight } from '../../theme/variables';

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 40px;
  background: linear-gradient(20deg, ${plum}, ${midnight});
`;
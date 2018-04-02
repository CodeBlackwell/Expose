import styled from 'styled-components';
import { Div } from '../../theme/grid';
import { red, white } from '../../theme/variables';

export const FooterContainer = styled(Div)`
    position: rare;
    display: block;
    background: linear-gradient(20deg, ${red}, ${white});
    margin-top: 47px;
    z-index: -1;
`;
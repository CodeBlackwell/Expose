import styled from 'styled-components';
import {Flex} from '../../theme/grid';
import media from '../../theme/media';

export const DiverImage = styled(Flex)`
    height: 100vh;
    width: 100vw;
    margin-top: -48px;
    
    background-repeat: no-repeat;
    background-image: url('${require('../../assets/eating.jpg')}');
    background-size: cover;
    background-position: center;
    
    display: flex;
    flex-direction: column;
    align-content: center;
    
    text-align: center;
    color: white;
    
    font-size: 2em;
    
    h1 {
        margin-bottom: 0;
        font-family: 'Dancing Script', cursive;
    }
    ${media.phone`
        h1 {
            font-size: 1.1em;
            margin: 8vh 0vh -5vh;
        }
        h2 {
            font-size: .8em;
            margin: 36vh 10vw;
        }
    `}
`;
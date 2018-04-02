import { injectGlobal } from 'styled-components';
import { tomato } from './variables';

 const baseStyles = () => injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Dancing+Script');
    
    body {
        font-family: 'Dancing Script', cursive;
        font-size: 24px;
        margin: 0;
    }
    
    h1, h2, h3 {
        font-weight: normal;
        color: ${tomato};
    }
`;

 export default baseStyles;
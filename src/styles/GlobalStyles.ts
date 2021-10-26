import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Georama', sans-serif;
        overflow-x: none;

        textarea:focus, input:focus{
            outline: none;
        }

        /* width */
        ::-webkit-scrollbar {
        width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        background: #212121; 
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
        background:#393EFA; 
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: #393AAA; 
        }
    }
`;

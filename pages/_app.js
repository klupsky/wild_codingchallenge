import './index.css';
import { css, Global } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            font-family: 'Tungsten-Semibold';
            font-size: 20px;
            width: 100%;
            height: 100%;
            margin: 0;
            text-transform: uppercase;
            cursor: pointer;
            color: white;
            overflow: hidden;
            background-color: black;

            a {
              text-decoration: none;
              cursor: pointer;
            }
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

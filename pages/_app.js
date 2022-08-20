import './index.css';
import { css, Global } from '@emotion/react';
import { useState } from 'react';
import Cursor from '../components/Cursor';

function MyApp({ Component, pageProps }) {
  const [activeIndex, setActiveIndex] = useState(0);

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

            color: white;
            overflow: hidden;
            background-color: black;
            cursor: none;

            a {
              text-decoration: none;
              cursor: none;
            }
            a:hover {
              cursor: none;
            }
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            cursor: none;
          }
          .cursor {
            width: 40px;
            height: 40px;
            border: 1px solid white;
            border-radius: 100%;
            position: fixed;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: soft-light;
          }
        `}
      />{' '}
      <Cursor />
      <Component
        {...pageProps}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />{' '}
    </>
  );
}

export default MyApp;

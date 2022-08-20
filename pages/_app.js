import './index.css';
import { css, Global } from '@emotion/react';
import { useState } from 'react';
import DotRing from '../components/DotRing';
import MouseContextProvider from './context/mouse-context';

function MyApp({ Component, pageProps }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <MouseContextProvider>
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

          .ring {
            position: fixed;
            top: 0;
            left: 0;
            width: 40px;
            height: 40px;
            border: 1px solid white;
            border-radius: 100%;
            transform: translate(-50%, -50%);
            /* -webkit-transition-duration: 100ms;
            transition-duration: 100ms; */
            /* -webkit-transition-timing-function: ease-out; */
            /* transition-timing-function: ease-out; */
            will-change: width, height, transform, border;
            z-index: 999;
            pointer-events: none;
            mix-blend-mode: soft-light;
          }

          .dot {
            position: fixed;
            top: 50%;
            left: 50%;
            width: 5px;
            height: 5px;
            background-color: white;
            border-radius: 100%;
            transform: translate(-50%, -50%);
            z-index: 999;
            pointer-events: none;
          }

          .ring.hovered {
            width: 80px;
            height: 80px;
            border: 1px solid white;
          }

          .dot.hovered {
            display: none;
          }
        `}
      />
      <DotRing />

      <Component
        {...pageProps}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </MouseContextProvider>
  );
}

export default MyApp;

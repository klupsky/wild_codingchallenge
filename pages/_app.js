import './index.css';
import { css, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import DotRing from '../components/DotRing';
import MouseContextProvider from '../util/context/mouse-context';

const imageUrls = [
  '',
  '/image01.jpg',
  '/image02.jpg',
  '/image03.jpg',
  '/image04.jpg',
  '/image05.jpg',
];

const bigImageUrls = [
  '',
  '/image01@2x.jpg',
  '/image02@2x.jpg',
  '/image03@2x.jpg',
  '/image04@2x.jpg',
  '/image05@2x.jpg',
];

const preloadedImageUrls = new Set();
function preloadImage(url) {
  if (preloadedImageUrls.has(url)) return;
  const img = new Image();
  img.src = url;
  preloadedImageUrls.add(url);
}

// Loop around to the beginning if at the end
function getNextActiveIndex(activeIndex) {
  const isLastActiveIndex = activeIndex === imageUrls.length - 1;
  return isLastActiveIndex ? 0 : activeIndex + 1;
}
// Loop around to the beginning if at the end
function getNextActiveBigIndex(activeIndex) {
  const isLastActiveIndex = activeIndex === bigImageUrls.length - 1;
  return isLastActiveIndex ? 0 : activeIndex + 1;
}

function MyApp({ Component, pageProps }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const nextImageUrl = imageUrls[getNextActiveIndex(activeIndex)];
      preloadImage(nextImageUrl);

      setLoading(false);
    }, 100);
  }, [activeIndex]);

  useEffect(() => {
    setTimeout(() => {
      const nextBigImageUrl = bigImageUrls[getNextActiveBigIndex(activeIndex)];
      preloadImage(nextBigImageUrl);
    }, 100);
  }, [activeIndex]);

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

            h1 {
              font-family: 'Tungsten-Semibold';
              font-size: 18px;
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
            width: 55px;
            height: 55px;
            border: 1px solid white;
            -webkit-transition-duration: 120ms;
            transition-duration: 120ms;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
            mix-blend-mode: hard-light;
          }

          .dot.hovered {
            display: none;
          }
        `}
      />
      {loading ? <div>HELLO</div> : <DotRing />}

      <Component
        {...pageProps}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        imageUrls={imageUrls}
        bigImageUrls={bigImageUrls}
      />
    </MouseContextProvider>
  );
}

export default MyApp;

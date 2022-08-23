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
    }, 1000);
  }, [activeIndex]);

  useEffect(() => {
    const nextBigImageUrl = bigImageUrls[getNextActiveBigIndex(activeIndex)];
    preloadImage(nextBigImageUrl);
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
            opacity: 1;
          }

          .ringLoading {
            position: fixed;
            width: 40px;
            height: 40px;
            border: 1px solid hsla(0, 100%, 0%, 0.8);
            border-radius: 100%;
            transform: translate(-50%, -50%);
            will-change: width, height, transform, border;
            z-index: 999;
            pointer-events: none;
            animation: 1.5s linear infinite spinner;
            animation-play-state: inherit;
            border-bottom-color: white;
            content: '';
            transform: translate3d(-50%, -50%, 0);
            will-change: transform;
          }

          @keyframes spinner {
            0% {
              transform: translate3d(-50%, -50%, 0) rotate(0deg);
            }
            100% {
              transform: translate3d(-50%, -50%, 0) rotate(360deg);
            }
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
            opacity: 1;
          }

          .ring.hovered {
            width: 55px;
            height: 55px;
            border: 1px solid white;
            transition-duration: 120ms;

            transition-timing-function: ease-out;
          }

          .dot.hovered {
            display: none;
          }
        `}
      />
      <div className="spin"></div>
      <DotRing loading={loading} />

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

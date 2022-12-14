import { css } from '@emotion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const carouselStyle = css`
  padding: 0.7rem;
  align-content: center;
  align-self: center;
  text-align: center;

  .carousel-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .carousel-wrapper {
    display: flex;
    width: 100%;
    position: relative;
  }

  .carousel-content-wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .carousel-content {
    display: flex;
    transition: all 250ms linear;
    -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
    scrollbar-width: none; /* hide scrollbar in Firefox */
  }

  /* hide scrollbar in webkit browser */
  .carousel-content::-webkit-scrollbar,
  .carousel-content::-webkit-scrollbar {
    display: none;
  }

  .carousel-content > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }

  .left-arrow,
  .right-arrow {
    position: absolute;
    z-index: 15;
    width: 250px;
    height: 330px;
    border-radius: 11px;
    border: 1px solid black;
    background-color: black;
    padding: 0;
  }

  .left-arrow {
    left: 0;
    bottom: 1.4rem;
  }

  .right-arrow {
    right: 0;
  }
`;

const backgroundStyle = css`
  position: absolute;
  top: -10%;
  left: -10%;
  height: 130%;
  width: 130%;
  filter: blur(70px);
  z-index: 0;
`;

export default function ImageCarousel(props) {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  return (
    <div css={carouselStyle}>
      <div css={backgroundStyle}>
        <Image
          src={props.bigImageUrls[currentIndex + 1]}
          alt="background"
          objectFit="fill"
          layout="fill"
          quality={100}
        />
      </div>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div
            onMouseEnter={() => props.cursorChangeHandler('hovered')}
            onMouseLeave={() => props.cursorChangeHandler('')}
          >
            {currentIndex > 0 ? (
              <button
                onClick={() => {
                  props.setActiveIndex(currentIndex - 1);
                }}
                className="left-arrow"
              >
                <Image
                  onClick={prev}
                  src={props.imageUrls[currentIndex]}
                  width="250px"
                  height="330px"
                  alt="prev"
                  css={css`
                    border-radius: 10px;
                    z-index: 1;
                  `}
                />
              </button>
            ) : (
              <button
                onClick={() => {
                  props.setActiveIndex(children.length - 1);
                  setCurrentIndex(children.length - 1);
                }}
                className="left-arrow"
              >
                <Image
                  src={props.imageUrls[children.length]}
                  width="250px"
                  height="330px"
                  alt="prev"
                  css={css`
                    border-radius: 10px;
                    z-index: 1;
                  `}
                />
              </button>
            )}
          </div>
          <div>
            <div
              className="carousel-content"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {children}
            </div>
          </div>

          <div
            onMouseEnter={() => props.cursorChangeHandler('hovered')}
            onMouseLeave={() => props.cursorChangeHandler('')}
          >
            {currentIndex < length - 1 ? (
              <button
                onClick={() => {
                  props.setActiveIndex(currentIndex + 1);
                }}
                className="right-arrow"
              >
                <Image
                  onClick={next}
                  src={props.imageUrls[currentIndex + 2]}
                  width="250px"
                  height="330px"
                  alt="next"
                  css={css`
                    border-radius: 10px;
                    z-index: 1;
                  `}
                />
              </button>
            ) : (
              <button
                onClick={() => {
                  props.setActiveIndex(0);
                  setCurrentIndex(0);
                }}
                className="right-arrow"
              >
                <Image
                  src={props.imageUrls[1]}
                  width="250px"
                  height="330px"
                  alt="next"
                  css={css`
                    border-radius: 10px;
                    z-index: 1;
                  `}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

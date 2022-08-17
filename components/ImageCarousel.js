import { css } from '@emotion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const carouselStyle = css`
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
    top: 42%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background-color: transparent;
    border: 1px solid black;
    padding-top: 0.5%;
  }

  .left-arrow {
    left: 22px;

    // when smaller than 700
    @media (max-width: 700px) {
      left: 0px;
    }
  }

  .right-arrow {
    right: 24px;
    // when smaller than 700
    @media (max-width: 700px) {
      right: 0px;
    }
  }
`;

export default function ImageCarousel(props) {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const [prevIndex, setPrevIndex] = useState(children.length);
  const [nextIndex, setNextIndex] = useState(2);

  const next = () => {
    if (currentIndex < length - 1) {
      setNextIndex((prevState) => prevState + 1);

      setCurrentIndex((prevState) => prevState + 1);
    }
  };
  const prev = () => {
    setPrevIndex((prevState) => prevState - 2);
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  return (
    <div css={carouselStyle}>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {currentIndex > 0 && (
            <button onClick={prev} className="left-arrow">
              <Image
                src={`/../public/images/image0${currentIndex}.jpg`}
                width="30px"
                height="30px"
                alt="prev"
              />
            </button>
          )}
          <div className="carousel-content-wrapper">
            <div className="carousel-content">
              <div
                className="carousel-content"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {children}
                {console.log(currentIndex + 1)}
              </div>
            </div>
          </div>
          {currentIndex < length - 1 ? (
            <button onClick={next} className="right-arrow">
              <Image
                src={`/../public/images/image0${currentIndex + 2}.jpg`}
                width="30px"
                height="30px"
                alt="next"
              />
            </button>
          ) : (
            <button onClick={next} className="right-arrow">
              <Image
                src={`/../public/images/image01.jpg`}
                width="30px"
                height="30px"
                alt="next"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

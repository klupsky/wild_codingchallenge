import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { useContext, useState } from 'react';
import Dots from '../components/Dots';
import ImageCarousel from '../components/ImageCarousel';
import { MouseContext } from '../util/context/mouse-context';
import { getJohannaHobel } from '../util/database';

const titleStyle = css`
  position: absolute;
  top: 0.7rem;
  left: 0.7rem;
  font-size: 0.9rem;
  letter-spacing: 0.04rem;
  z-index: 5;
`;

const containerStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100vw;
  height: 100vh;
  align-content: center;
  align-self: center;
  text-align: center;
  gap: 15%;

  .item1 {
    grid-column: 2 / 2;
    grid-row: 1;
    z-index: 3;
  }
  .item2 {
    grid-column: 2 / 2;
    grid-row: 1;
    z-index: 4;
  }
  .item3 {
    grid-column: 2 / 2;
    grid-row: 1;
    z-index: 0;
  }
  .item4 {
    grid-column: 2 / 2;
    grid-row: 1;
    z-index: 10;
  }
`;

const picContainerStyle = css`
  height: 680px;
  width: 510px;
  border-radius: 10px;
  border: 1px solid black;
  z-index: 0;
  color: white;
  align-content: center;
  align-self: center;
  text-align: center;
`;

const outlineTitleContainerStyle = css`
  display: flex;
  width: 510px;
  height: 680px;
  color: white;
  align-content: center;
  align-self: center;
  text-align: center;

  .titleContainerTextStyle {
    width: 900px;
  }

  .backgroundTextStyle {
    position: relative;
    top: 24.3%;
    left: -21.15%;
    font-size: 11rem;
    letter-spacing: 0.45rem;
    line-height: 80%;
    text-align: center;
    height: 680px;
    width: 900px;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
  }
`;

const titleContainerStyle = css`
  display: flex;
  width: 510px;
  height: 680px;
  color: white;
  align-content: center;
  align-self: center;
  text-align: center;
  overflow: hidden;

  .titleContainerTextStyle {
    width: 900px;
  }
  .breakTextStyle {
    position: relative;
    top: 24.3%;
    left: -21.15%;
    font-size: 11rem;
    letter-spacing: 0.45rem;
    line-height: 80%;
    text-align: center;
    height: 680px;
    width: 900px;
  }
`;

const naviContainerStyle = css`
  font-family: 'Helvetica';
  font-size: 0.5rem;
  letter-spacing: 0.04rem;
  height: 680px;

  .navigationInfos {
    position: relative;
    top: 75.5%;
    left: -7px;

    span {
      position: relative;
      top: 0.04rem;
      left: 9px;
    }
  }
`;

const dataBox = css`
  position: relative;
  top: 75vh;
  left: 85vw;
  z-index: 1;
`;

const infoStyle = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  line-height: 120%;
  font-family: 'Helvetica';
  font-size: 0.5rem;
  letter-spacing: 0.04rem;
  z-index: 1;
  width: 110px;
  height: auto;
  text-align: left;
  button {
    color: #202020;
    background-color: white;
    border-radius: 50px;
    border: none;
    height: 28px;
    width: 110px;
    text-align: center;
    padding: 8%;
    font-weight: bold;
    box-shadow: 0px 0px 0px transparent;
    text-shadow: 0px 0px 0px transparent;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.5rem;
    letter-spacing: 0.04rem;
  }
`;

const infoDateStyle = css`
  text-align: right;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const pageStyle = css`
  .no-content {
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    color: white;
    z-index: 0;
    display: none;

    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  .content {
    opacity: 1;
    animation: fadeIn 500ms linear;
    /* animation: fadeOut 500ms linear;
    animation-duration: 4s; */

    display: grid;
    position: relative;
    width: 100vw;
    height: 100vh;
    align-content: center;
    align-self: center;
    text-align: center;
    z-index: 100;
    background-color: hsla(0, 100%, 0%, 0.8);
    padding: 10%;
    opacity: 1;
  }
`;

export default function Home(props) {
  const [fullsizeOn, setFullsizeOn] = useState(false);
  const [imageNumber, setImageNumber] = useState('');
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  console.log(cursorType);

  const handleToggle = () => {
    setFullsizeOn(!fullsizeOn);
  };

  return (
    <div css={pageStyle}>
      <Head>
        <title>xyz photography</title>
        <meta
          name="description"
          content="hypothetical homepage for a Styling and Photography collective"
        />
      </Head>
      <div>
        <div css={titleStyle}>Xyz photography</div>
      </div>

      <div className={fullsizeOn ? 'content' : 'no-content'}>
        <div>
          <Image
            onClick={handleToggle}
            src={props.imageUrls[imageNumber]}
            alt=""
            width="512px"
            height="680"
          />
        </div>
      </div>

      <ImageCarousel
        activeIndex={props.activeIndex}
        setActiveIndex={props.setActiveIndex}
        johannaInfos={props.johannaInfos}
        imageIndex={props.imageIndex}
        setImageIndex={props.setImageIndex}
        imageUrls={props.imageUrls}
        bigImageUrls={props.bigImageUrls}
        cursorType={cursorType}
        cursorChangeHandler={cursorChangeHandler}
      >
        {props.johannaInfos.map((preview) => {
          return (
            <div key={`id-${preview.id}`}>
              <div css={containerStyle}>
                <div className="item1">
                  <div css={picContainerStyle}>
                    <Image
                      src={props.imageUrls[preview.id]}
                      alt={preview.title}
                      width={508}
                      height={678}
                      css={css`
                        border-radius: 10px;
                        z-index: 3;
                      `}
                    />
                  </div>
                </div>
                <div className="item2">
                  <div css={titleContainerStyle}>
                    <div className="titleContainerTextStyle">
                      <div className="breakTextStyle">{preview.title}</div>
                    </div>
                  </div>
                </div>

                <div className="item3">
                  <div css={outlineTitleContainerStyle}>
                    <div className="titleContainerTextStyle">
                      <div className="backgroundTextStyle">{preview.title}</div>
                    </div>
                  </div>
                </div>
                <div className="item4">
                  <div css={naviContainerStyle}>
                    <div className="navigationInfos">
                      {preview.id} OF {props.johannaInfos.length}
                      <span>
                        <Dots
                          johannaInfos={props.johannaInfos}
                          activeIndex={props.activeIndex}
                        />
                      </span>
                    </div>
                  </div>
                </div>

                <div css={dataBox}>
                  <div css={infoStyle}>
                    <div>
                      Johanna Hobel
                      <br />
                      for {preview.client}
                      <div css={infoDateStyle}>{preview.date}</div>
                      <div
                        onMouseEnter={() => cursorChangeHandler('hovered')}
                        onMouseLeave={() => cursorChangeHandler('')}
                      >
                        <button
                          onClick={() => {
                            handleToggle();
                            setImageNumber(preview.id);
                          }}
                        >
                          have a look
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ImageCarousel>

      {/* {props.children} */}
    </div>
  );
}

export async function getServerSideProps() {
  const johannaInfos = await getJohannaHobel();
  return {
    props: {
      johannaInfos: johannaInfos,
    },
  };
}

import { css } from '@emotion/react';
import Image from 'next/image';
import ImageCarousel from '../components/ImageCarousel';
import { getJohannaHobel } from '../util/database';

export const image = [
  '',
  '/../public/images/image01.jpg',
  '/../public/images/image02.jpg',
  '/../public/images/image03.jpg',
  '/../public/images/image04.jpg',
  '/../public/images/image05.jpg',
];

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
    z-index: 3;
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
    left: -22.3%;
    font-size: 11rem;
    letter-spacing: 0.65rem;
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
    left: -22.3%;
    font-size: 11rem;
    letter-spacing: 0.65rem;
    line-height: 80%;
    text-align: center;
    height: 680px;
    width: 900px;
  }
`;

const naviContainerStyle = css`
  font-family: 'Helvetica';
  font-size: 0.45rem;
  letter-spacing: 0.04rem;
  height: 680px;

  .navigationInfos {
    position: relative;
    top: 75.5%;
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
`;

const infoDateStyle = css`
  text-align: right;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const buttonLinkStyle = css`
  color: #202020;
  background-color: white;
  border-radius: 50px;
  border: none;
  height: 28px;
  width: 110px;
  text-align: center;
  padding: 8%;
  font-weight: bold;
`;

export default function Home(props) {
  return (
    <div>
      <div css={titleStyle}>Xyz photography</div>

      <ImageCarousel johannaInfos={props.johannaInfos}>
        {props.johannaInfos.map((preview) => {
          return (
            <div key={`id-${preview.id}`}>
              <div css={containerStyle}>
                <div className="item1">
                  <div css={picContainerStyle}>
                    <Image
                      src={image`[${preview.id}]`}
                      alt={preview.title}
                      width={508}
                      height={678}
                      css={css`
                        border-radius: 10px;
                        z-index: 1;
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
                      <div css={buttonLinkStyle}>have a look</div>
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

import { css } from '@emotion/react';
import Image from 'next/image';
import ImageCarousel from '../components/ImageCarousel';
import Info from '../components/Info';
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
  position: relative;
  top: 0.7rem;
  left: 0.7rem;
  font-size: 0.9rem;
  letter-spacing: 0.04rem;
  z-index: 5;
`;
const picStyle = css`
  height: 200px;
  width: 100vw;
  z-index: 4;
  color: white;
`;
const carouselStyle = css`
  height: 200px;
  width: 100vw;
  filter: blur(70px);
  z-index: 1;
`;

export default function Home(props) {
  return (
    <div>
      <div css={titleStyle}>Xyz photography</div>

      <ImageCarousel>
        {props.johannaInfos.map((preview) => {
          return (
            <div css={picStyle} key={`id-${preview.id}`}>
              <Image
                src={image[`${preview.id}`]}
                alt={preview.title}
                width="25.5rem"
                height="34rem"
              />
              {preview.title}
              <div css={carouselStyle}>
                <Image
                  src={`/../public/images/image0${preview.id}.jpg`}
                  alt={preview.title}
                  objectFit="fill"
                  layout="fill"
                  quality={100}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          );
        })}
      </ImageCarousel>

      {props.children}
      <Info johannaInfos={props.johannaInfos} />
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

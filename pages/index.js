import { css } from '@emotion/react';
import Image from 'next/image';
import Header from '../components/Header';
import ImageCarousel from '../components/ImageCarousel';
import Info from '../components/Info';
import { getJohannaHobel } from '../util/database';

const carouselStyle = css`
  height: 100vh;
  width: 100vw;
  filter: blur(70px);
`;

export default function Home(props) {
  return (
    <div>
      <Header />
      <ImageCarousel>
        {props.johannaInfos.map((preview) => {
          return (
            <div css={carouselStyle} key={`id-${preview.id}`}>
              <div>
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

              <div>
                <Image
                  src={`/../public/images/image0${preview.id}.jpg`}
                  alt={preview.title}
                  width="25.5rem"
                  height="34rem"
                />
                {preview.title}
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

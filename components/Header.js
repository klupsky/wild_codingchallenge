import { css } from '@emotion/react';

const titleStyle = css`
  margin-left: 0.7rem;
  margin-top: 0.7rem;
  font-size: 0.9rem;
  letter-spacing: 0.04rem;
  z-index: 10;
  background-color: transparent;
`;
export default function Header() {
  return <div css={titleStyle}>Xyz photography</div>;
}

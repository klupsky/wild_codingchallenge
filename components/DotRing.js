import { useContext } from 'react';
import { MouseContext } from '../util/context/mouse-context';
import useMousePosition from '../util/hooks/useMousePosition';

const DotRing = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  console.log(cursorChangeHandler);
  const { x, y } = useMousePosition();
  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={'ring ' + cursorType}
      />
      <div
        className={'dot ' + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      />
    </>
  );
};

export default DotRing;

import { useContext } from 'react';
import { MouseContext } from '../pages/context/mouse-context';
import useMousePosition from '../pages/hooks/useMousePosition';

const DotRing = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
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

const Rect = (props) => {
  return (
    <svg
      width="10"
      height="9"
      viewBox="0 0 5 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="4"
        height="8"
        rx="2"
        fill="none"
        stroke="white"
        style={props.style}
      />
    </svg>
  );
};

export default Rect;

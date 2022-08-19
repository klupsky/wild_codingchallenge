const Dot = ({ active }) => (
  <span>
    {active ? (
      <svg
        width="10"
        height="9"
        viewBox="0 0 5 9"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="4"
          height="8"
          rx="2"
          fill="white"
          stroke="white"
        />
      </svg>
    ) : (
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
        />
      </svg>
    )}
  </span>
);

const Dots = ({ johannaInfos, activeIndex }) => (
  <>
    {johannaInfos.map((info, i) => (
      <Dot key={info} active={activeIndex === i} />
    ))}
  </>
);

export default Dots;

import "./Hello.css";

function Hello() {
  return (
    <div className="hello-parent">
      <svg
        className="hello-word"
        width="700"
        height="200"
        viewBox="100 -76 300 200"
      >
        <g id="H-letter">
          <line
            className="H-left-stroke"
            x1="17"
            y1="0"
            x2="17"
            y2="124"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
          <line
            className="H-mid-stroke"
            x1="33"
            y1="62"
            x2="68"
            y2="62"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
          <line
            className="H-right-stroke"
            x1="84"
            y1="0"
            x2="84"
            y2="124"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
        </g>

        <g id="E-letter">
          <line
            className="E-left-stroke"
            x1="138"
            y1="0"
            x2="138"
            y2="124"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
          <line
            className="E-top-stroke"
            x1="154"
            y1="17"
            x2="201"
            y2="17"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
          <line
            className="E-mid-stroke"
            x1="154"
            y1="62"
            x2="196"
            y2="62"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
          <line
            className="E-bottom-stroke"
            x1="154"
            y1="107"
            x2="201"
            y2="107"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
        </g>

        <g id="L-one-letter">
          <line
            className="L-one-long-stroke"
            x1="235"
            y1="0"
            x2="235"
            y2="225"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
          <line
            className="L-one-short-stroke"
            x1="250"
            y1="107"
            x2="293"
            y2="107"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
        </g>

        <g id="L-two-letter">
          <line
            className="L-two-long-stroke"
            x1="320"
            y1="0"
            x2="320"
            y2="320"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
          <line
            className="L-two-short-stroke"
            x1="335"
            y1="107"
            x2="375"
            y2="107"
            stroke="#000"
            fill="none"
            strokeWidth="34"
          />
        </g>

        <g id="O-letter">
          <circle
            className="O-stroke"
            cx="440"
            cy="60"
            r="48"
            stroke="#000"
            fill="none"
            strokeWidth="31"
          />
        </g>

        <g id="red-dot">
          <circle
            className="red-dot"
            cx="325"
            cy="260"
            r="20"
            fill="#FF5851"
            stroke="none"
          />

          <line
            x1="440"
            y1="60"
            x2="440"
            y2="60"
            stroke="#9370db"
            className="red-dot"
          />
        </g>
      </svg>
    </div>
  );
}

export default Hello;

'use client';

export default function Star({ fillColor }: any) {
  return (
    <svg
      className="hoverEffect"
      fill={fillColor}
      height="20px"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 473.486 473.486"
    >
      <polygon
        points="473.486,182.079 310.615,157.952 235.904,11.23 162.628,158.675 0,184.389 117.584,299.641 91.786,462.257
	237.732,386.042 384.416,460.829 357.032,298.473 "
      />
    </svg>
  );
}

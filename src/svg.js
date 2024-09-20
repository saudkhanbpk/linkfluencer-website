export const RightArrow = ({ className, onClick = {}, disabled = false }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
};

export const LeftArrow = ({ className, onClick = {}, disabled = false }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );
};

export const ToggleIcon = ({ className, onClick = {}, disabled = false }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};

export const DotIcon = ({ className, onClick = {}, disabled = false }) => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      className={className}
      onClick={onClick}
    >
      <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
  );
};

export const CrossIcon = ({ className, onClick }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 15 15"
      className={className}
      onClick={onClick}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z"
        clipRule="evenodd"
      />
    </svg>
  );
};

import { IconProps } from './interface';

function Scheduled({ className, ...rest }: Partial<IconProps>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="16" cy="16" r="16" fill="#EAF7FF" />
      <path
        d="M15.719 10.736V17.064L20.641 20M16 25C20.9706 25 25 20.9706 25 16C25 11.0294 20.9706 7 16 7C11.0294 7 7 11.0294 7 16C7 20.9706 11.0294 25 16 25Z"
        stroke="#3B3B3B"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Scheduled;

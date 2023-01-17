import {createCommonIcon} from './utils';

const iconVariants = {
  default: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 5.5V18.5C22 18.9 21.85 19.25 21.55 19.55C21.25 19.85 20.9 20 20.5 20H3.5C3.1 20 2.75 19.85 2.45 19.55C2.15 19.25 2 18.9 2 18.5V5.5C2 5.1 2.15 4.75 2.45 4.45C2.75 4.15 3.1 4 3.5 4H20.5C20.9 4 21.25 4.15 21.55 4.45C21.85 4.75 22 5.1 22 5.5ZM3.5 8.225H20.5V5.5H3.5V8.225ZM3.5 11.45V18.5H20.5V11.45H3.5ZM3.5 18.5V5.5V18.5Z" fill="#101828"/>
</svg>`,
  filled: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 20C3.1 20 2.75 19.85 2.45 19.55C2.15 19.25 2 18.9 2 18.5V5.5C2 5.1 2.15 4.75 2.45 4.45C2.75 4.15 3.1 4 3.5 4H20.5C20.9 4 21.25 4.15 21.55 4.45C21.85 4.75 22 5.1 22 5.5V18.5C22 18.9 21.85 19.25 21.55 19.55C21.25 19.85 20.9 20 20.5 20H3.5ZM3.5 11.45H20.5V8.225H3.5V11.45Z" fill="#101828"/>
</svg>`,
};

export default createCommonIcon<keyof typeof iconVariants>(
  'CreditCardIcon.tsx',
  iconVariants,
);

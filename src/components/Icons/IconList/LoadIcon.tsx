import {createCommonIcon} from '../utils';

const iconVariants = {
  download: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 20C5.1 20 4.75 19.85 4.45 19.55C4.15 19.25 4 18.9 4 18.5V14.925H5.5V18.5H18.5V14.925H20V18.5C20 18.9 19.85 19.25 19.55 19.55C19.25 19.85 18.9 20 18.5 20H5.5ZM12 16.175L7.175 11.35L8.25 10.275L11.25 13.275V4H12.75V13.275L15.75 10.275L16.825 11.35L12 16.175Z" fill="black"/>
</svg>`,
  upload: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 20C5.1 20 4.75 19.85 4.45 19.55C4.15 19.25 4 18.9 4 18.5V14.925H5.5V18.5H18.5V14.925H20V18.5C20 18.9 19.85 19.25 19.55 19.55C19.25 19.85 18.9 20 18.5 20H5.5ZM11.25 16.175V6.9L8.25 9.9L7.175 8.825L12 4L16.825 8.825L15.75 9.9L12.75 6.9V16.175H11.25Z" fill="black"/>
</svg>`,
};

export default createCommonIcon<keyof typeof iconVariants>(
  'LoadIcon',
  iconVariants,
);

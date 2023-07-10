import * as React from 'react';
import Svg, {
  Path,
  SvgProps,
  Rect,
  G,
  Defs,
  ClipPath,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import {View, ColorValue} from 'react-native';

export const socialVariants = {
  facebook: (fill?: ColorValue) => (
    <Path
      d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
      fill={fill || '#1877F2'}
    />
  ),
  twitter: (fill?: ColorValue) => (
    <Path
      d="M7.54752 19.7508C16.6042 19.7508 21.5578 12.2474 21.5578 5.74052C21.5578 5.5274 21.5578 5.31524 21.5434 5.10404C22.507 4.407 23.3389 3.54392 24 2.55524C23.1014 2.95364 22.148 3.2148 21.1718 3.32996C22.1998 2.71465 22.9692 1.74674 23.3366 0.60644C22.3701 1.18005 21.3126 1.58427 20.2099 1.80164C19.4675 1.01222 18.4856 0.489481 17.4162 0.314324C16.3468 0.139168 15.2494 0.321355 14.294 0.832693C13.3385 1.34403 12.5782 2.15601 12.1307 3.14299C11.6833 4.12996 11.5735 5.23691 11.8186 6.29252C9.8609 6.19432 7.94576 5.68555 6.19745 4.79924C4.44915 3.91294 2.90676 2.6689 1.6704 1.14788C1.04073 2.23188 0.847872 3.51511 1.1311 4.7363C1.41433 5.9575 2.15234 7.02483 3.19488 7.721C2.41123 7.69804 1.64465 7.48663 0.96 7.10468V7.16708C0.960311 8.30393 1.35385 9.40568 2.07387 10.2854C2.79389 11.1652 3.79606 11.7689 4.9104 11.994C4.18548 12.1917 3.42487 12.2206 2.68704 12.0784C3.00181 13.0568 3.61443 13.9123 4.43924 14.5254C5.26405 15.1385 6.25983 15.4785 7.28736 15.498C6.26644 16.3004 5.09731 16.8938 3.84687 17.244C2.59643 17.5942 1.28921 17.6944 0 17.5389C2.25183 18.9839 4.87192 19.7504 7.54752 19.7469"
      fill={fill || '#1DA1F2'}
    />
  ),
  instagram: (fill?: ColorValue) => (
    <>
      <G clipPath="url(#clip0_4115_31786)">
        <Path
          d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8688 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8063 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8063 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
          fill={fill || '#000100'}
        />
        <Path
          d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
          fill={fill || '#000100'}
        />
        <Path
          d="M19.8469 5.59214C19.8469 6.38902 19.2 7.03121 18.4078 7.03121C17.6109 7.03121 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z"
          fill={fill || '#000100'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4115_31786">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </>
  ),
  linkedIn: (fill?: ColorValue) => (
    <Path
      d="M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186657 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186657 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55782 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z"
      fill={fill || '#0A66C2'}
    />
  ),
  google: (fill?: ColorValue) => (
    <>
      <G clipPath="url(#clip0_4115_31793)">
        <Path
          d="M23.766 12.2765C23.766 11.4608 23.6999 10.6406 23.5588 9.83813H12.24V14.4591H18.7217C18.4528 15.9495 17.5885 17.2679 16.323 18.1056V21.104H20.19C22.4608 19.014 23.766 15.9274 23.766 12.2765Z"
          fill={fill || '#4285F4'}
        />
        <Path
          d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
          fill={fill || '#34A853'}
        />
        <Path
          d="M5.50253 14.3002C4.99987 12.8099 4.99987 11.196 5.50253 9.70569V6.61475H1.51649C-0.18551 10.0055 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3002Z"
          fill={fill || '#FBBC04'}
        />
        <Path
          d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
          fill={fill || '#EA4335'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4115_31793">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </>
  ),
  youTube: (fill?: ColorValue) => (
    <>
      {!fill ? (
        <>
          <G clipPath="url(#clip0_4115_31798)">
            <Path
              d="M23.5221 6.18541C23.3864 5.67482 23.119 5.20883 22.7466 4.83407C22.3743 4.4593 21.91 4.18891 21.4003 4.04996C19.5239 3.54541 12.0239 3.54541 12.0239 3.54541C12.0239 3.54541 4.52393 3.54541 2.64756 4.04996C2.13786 4.18891 1.67358 4.4593 1.30121 4.83407C0.928842 5.20883 0.661431 5.67482 0.525744 6.18541C0.0239258 8.06996 0.0239258 12 0.0239258 12C0.0239258 12 0.0239258 15.93 0.525744 17.8145C0.661431 18.3251 0.928842 18.7911 1.30121 19.1658C1.67358 19.5406 2.13786 19.811 2.64756 19.95C4.52393 20.4545 12.0239 20.4545 12.0239 20.4545C12.0239 20.4545 19.5239 20.4545 21.4003 19.95C21.91 19.811 22.3743 19.5406 22.7466 19.1658C23.119 18.7911 23.3864 18.3251 23.5221 17.8145C24.0239 15.93 24.0239 12 24.0239 12C24.0239 12 24.0239 8.06996 23.5221 6.18541Z"
              fill="#FF0302"
            />
            <Path
              d="M9.56934 15.5687V8.4314L15.8421 12L9.56934 15.5687Z"
              fill="#FEFEFE"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_4115_31798">
              <Rect width="24" height="24" fill="#FEFEFE" />
            </ClipPath>
          </Defs>
        </>
      ) : (
        <Path
          d="M23.7609 7.20005C23.7609 7.20005 23.5266 5.54536 22.8047 4.8188C21.8906 3.86255 20.8688 3.85786 20.4 3.80161C17.0438 3.55786 12.0047 3.55786 12.0047 3.55786H11.9953C11.9953 3.55786 6.95625 3.55786 3.6 3.80161C3.13125 3.85786 2.10938 3.86255 1.19531 4.8188C0.473438 5.54536 0.24375 7.20005 0.24375 7.20005C0.24375 7.20005 0 9.14536 0 11.086V12.9047C0 14.8454 0.239062 16.7907 0.239062 16.7907C0.239062 16.7907 0.473437 18.4454 1.19062 19.1719C2.10469 20.1282 3.30469 20.0954 3.83906 20.1985C5.76094 20.3813 12 20.4375 12 20.4375C12 20.4375 17.0438 20.4282 20.4 20.1891C20.8688 20.1329 21.8906 20.1282 22.8047 19.1719C23.5266 18.4454 23.7609 16.7907 23.7609 16.7907C23.7609 16.7907 24 14.85 24 12.9047V11.086C24 9.14536 23.7609 7.20005 23.7609 7.20005ZM9.52031 15.1125V8.36724L16.0031 11.7516L9.52031 15.1125Z"
          fill={fill}
        />
      )}
    </>
  ),
  whatsApp: (fill?: ColorValue) => (
    <>
      {!fill ? (
        <>
          <G clipPath="url(#clip0_4115_31957)">
            <Path
              d="M0 24L1.69536 17.8375C0.64972 16.0341 0.0995958 13.988 0.100267 11.892C0.102946 5.33474 5.46319 0 12.0501 0C15.2466 0.00155219 18.2467 1.23994 20.5032 3.48787C22.759 5.7358 24.0011 8.72369 24 11.9016C23.9971 18.4585 18.636 23.7941 12.0501 23.7941C12.0496 23.7941 12.0506 23.7941 12.0501 23.7941H12.045C10.0452 23.7933 8.0802 23.2939 6.33471 22.3463L0 24Z"
              fill="white"
            />
            <Path
              d="M12.004 2C6.48789 2 2.00203 6.48398 2 11.9955C1.99918 13.8842 2.52777 15.7237 3.52873 17.3155L3.76669 17.6936L2.75621 21.3822L6.54107 20.3898L6.90654 20.6064C8.44155 21.5174 10.2015 21.9991 11.9963 22H12.0001C17.5119 22 21.9977 17.5155 22 12.0036C22.001 9.33256 20.9619 6.82084 19.0738 4.93148C17.1857 3.04211 14.6751 2.00113 12.004 2Z"
              fill="url(#paint0_linear_4115_31957)"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.05096 6.51098C8.82965 6.02516 8.59684 6.01532 8.38659 6.00679C8.21441 5.99957 8.01745 6.00001 7.82071 6.00001C7.62374 6.00001 7.30395 6.07306 7.03351 6.36508C6.76285 6.6571 6 7.36298 6 8.79879C6 10.2346 7.05808 11.6219 7.20547 11.8168C7.35308 12.0114 9.24793 15.0519 12.2491 16.2215C14.743 17.1936 15.2505 17.0003 15.792 16.9517C16.3333 16.9031 17.5388 16.2458 17.7847 15.5644C18.0308 14.8831 18.0308 14.2992 17.9571 14.1772C17.8832 14.0554 17.6864 13.9825 17.391 13.8366C17.0958 13.6907 15.6442 12.9846 15.3735 12.8873C15.1029 12.7899 14.9061 12.7414 14.7092 13.0334C14.5124 13.3254 13.947 13.9825 13.7746 14.1772C13.6024 14.3721 13.4302 14.3964 13.1348 14.2505C12.8395 14.1041 11.8886 13.7964 10.7606 12.8022C9.88286 12.0287 9.29042 11.0735 9.11802 10.7815C8.94584 10.4894 9.09965 10.3315 9.24771 10.186C9.38027 10.0552 9.54293 9.84525 9.69077 9.67485C9.83794 9.50445 9.88729 9.38283 9.98555 9.18837C10.084 8.99347 10.0349 8.82307 9.96098 8.67717C9.88729 8.53127 9.31344 7.08802 9.05096 6.51098Z"
              fill="white"
            />
          </G>
          <Defs>
            <LinearGradient
              id="paint0_linear_4115_31957"
              x1="11.7964"
              y1="3.20021"
              x2="11.8978"
              y2="20.2914"
              gradientUnits="userSpaceOnUse"
            >
              <Stop stopColor="#57D163" />
              <Stop offset="1" stopColor="#23B33A" />
            </LinearGradient>
            <ClipPath id="clip0_4115_31957">
              <Rect width="24" height="24" fill="white" />
            </ClipPath>
          </Defs>
        </>
      ) : (
        <>
          <G clipPath="url(#clip0_4115_31961)">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.69536 17.8375L0 24L6.33471 22.3463C8.0802 23.2939 10.0452 23.7933 12.045 23.7941H12.0501C18.636 23.7941 23.9971 18.4585 24 11.9016C24.0011 8.72369 22.759 5.7358 20.5032 3.48787C18.2467 1.23994 15.2466 0.00155219 12.0501 0C5.46319 0 0.102946 5.33474 0.100267 11.892C0.0995958 13.988 0.64972 16.0341 1.69536 17.8375ZM2 11.9955C2.00203 6.48398 6.48789 2 12.004 2C14.6751 2.00113 17.1857 3.04211 19.0738 4.93148C20.9619 6.82084 22.001 9.33256 22 12.0036C21.9977 17.5155 17.5119 22 12.0001 22H11.9963C10.2015 21.9991 8.44155 21.5174 6.90654 20.6064L6.54107 20.3898L2.75621 21.3822L3.76669 17.6936L3.52873 17.3155C2.52777 15.7237 1.99918 13.8842 2 11.9955Z"
              fill={fill}
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.05096 6.51098C8.82965 6.02516 8.59684 6.01532 8.38659 6.00679C8.21441 5.99957 8.01745 6.00001 7.82071 6.00001C7.62374 6.00001 7.30395 6.07306 7.03351 6.36508C6.76285 6.6571 6 7.36298 6 8.79879C6 10.2346 7.05808 11.6219 7.20547 11.8168C7.35308 12.0114 9.24793 15.0519 12.2491 16.2215C14.743 17.1936 15.2505 17.0003 15.792 16.9517C16.3333 16.9031 17.5388 16.2458 17.7847 15.5644C18.0308 14.8831 18.0308 14.2992 17.9571 14.1772C17.8832 14.0554 17.6864 13.9825 17.391 13.8366C17.0958 13.6907 15.6442 12.9846 15.3735 12.8873C15.1029 12.7899 14.9061 12.7414 14.7092 13.0334C14.5124 13.3254 13.947 13.9825 13.7746 14.1772C13.6024 14.3721 13.4302 14.3964 13.1348 14.2505C12.8395 14.1041 11.8886 13.7964 10.7606 12.8022C9.88286 12.0287 9.29042 11.0735 9.11802 10.7815C8.94584 10.4894 9.09965 10.3315 9.24771 10.186C9.38027 10.0552 9.54293 9.84525 9.69077 9.67485C9.83794 9.50445 9.88729 9.38283 9.98555 9.18837C10.084 8.99347 10.0349 8.82307 9.96098 8.67717C9.88729 8.53127 9.31344 7.08802 9.05096 6.51098Z"
              fill={fill}
            />
          </G>
          <Defs>
            <ClipPath id="clip0_4115_31961">
              <Rect width="24" height="24" fill="white" />
            </ClipPath>
          </Defs>
        </>
      )}
    </>
  ),
  apple: (fill?: ColorValue) => (
    <Path
      d="M20.8426 17.1449C20.5099 17.9135 20.1161 18.6211 19.6598 19.2715C19.0378 20.1583 18.5286 20.7721 18.1361 21.113C17.5277 21.6724 16.8759 21.959 16.1779 21.9753C15.6768 21.9753 15.0725 21.8327 14.3691 21.5434C13.6633 21.2555 13.0148 21.113 12.4217 21.113C11.7998 21.113 11.1327 21.2555 10.4193 21.5434C9.70469 21.8327 9.12904 21.9834 8.68892 21.9984C8.01957 22.0269 7.35239 21.7322 6.68644 21.113C6.26139 20.7422 5.72974 20.1067 5.09285 19.2063C4.40951 18.2449 3.84772 17.13 3.4076 15.8589C2.93624 14.486 2.69995 13.1565 2.69995 11.8694C2.69995 10.3951 3.01853 9.12345 3.65665 8.05784C4.15815 7.20191 4.82533 6.52672 5.66035 6.03105C6.49537 5.53539 7.39761 5.2828 8.36925 5.26664C8.9009 5.26664 9.59809 5.43109 10.4645 5.75429C11.3284 6.07858 11.8832 6.24303 12.1264 6.24303C12.3082 6.24303 12.9245 6.05074 13.9692 5.66738C14.9571 5.31186 15.7909 5.16466 16.474 5.22264C18.3249 5.37202 19.7155 6.10167 20.6402 7.41619C18.9849 8.4192 18.166 9.82403 18.1823 11.6262C18.1972 13.03 18.7065 14.1981 19.7073 15.1256C20.1609 15.5561 20.6674 15.8888 21.231 16.1251C21.1087 16.4795 20.9797 16.819 20.8426 17.1449ZM16.5975 0.440369C16.5975 1.54062 16.1956 2.56792 15.3944 3.51878C14.4275 4.64917 13.258 5.30236 11.9898 5.19929C11.9736 5.06729 11.9642 4.92837 11.9642 4.78239C11.9642 3.72615 12.424 2.59576 13.2406 1.67152C13.6483 1.20356 14.1667 0.814453 14.7955 0.504058C15.4229 0.198295 16.0163 0.0292007 16.5744 0.000244141C16.5907 0.147331 16.5975 0.294426 16.5975 0.440355V0.440369Z"
      fill={fill || '#000000'}
    />
  ),
  snapChat: (fill?: ColorValue) => (
    <>
      {!fill && (
        <Path
          d="M22.2972 17.6797C18.5806 15.88 17.9883 13.1014 17.9619 12.8953C17.93 12.6457 17.8939 12.4494 18.1692 12.1955C18.4347 11.9501 19.6126 11.2208 19.9395 10.9926C20.4797 10.6148 20.7176 10.2376 20.5422 9.77386C20.4196 9.45306 20.121 9.33223 19.8064 9.33223C19.7072 9.33253 19.6083 9.34364 19.5115 9.36535C18.9179 9.49416 18.3415 9.79165 18.0079 9.872C17.9678 9.88234 17.9267 9.8879 17.8853 9.88856C17.7075 9.88856 17.64 9.80943 17.6572 9.59537C17.6989 8.94642 17.7872 7.6798 17.6848 6.49659C17.5443 4.8687 17.0195 4.06211 16.3971 3.34875C16.096 3.00281 14.6979 1.5166 11.9999 1.5166C9.30182 1.5166 7.90558 3.00281 7.60635 3.34446C6.98212 4.05782 6.45784 4.8644 6.31864 6.4923C6.21624 7.6755 6.30822 8.94151 6.34624 9.59107C6.3585 9.79471 6.29596 9.88426 6.11813 9.88426C6.07674 9.88356 6.03558 9.878 5.99549 9.8677C5.66253 9.78735 5.08613 9.48987 4.49256 9.36106C4.39574 9.33934 4.29684 9.32824 4.19761 9.32793C3.88182 9.32793 3.58442 9.45061 3.46178 9.76956C3.28641 10.2333 3.5231 10.6105 4.06516 10.9883C4.39199 11.2165 5.56994 11.9452 5.83545 12.1912C6.11016 12.4451 6.07459 12.6414 6.04271 12.891C6.01634 13.1002 5.42338 15.8788 1.70744 17.6754C1.48976 17.7809 1.11939 18.0041 1.77244 18.3648C2.7977 18.9315 3.48018 18.8708 4.01059 19.2125C4.46067 19.5026 4.19455 20.1282 4.52199 20.354C4.92425 20.6318 6.11322 20.3343 7.64927 20.8416C8.93697 21.2661 9.71941 22.4652 12.0029 22.4652C14.2865 22.4652 15.0916 21.2605 16.3566 20.8416C17.8896 20.3343 19.081 20.6318 19.4839 20.354C19.8107 20.1282 19.5452 19.5026 19.9953 19.2125C20.5257 18.8708 21.2076 18.9315 22.2334 18.3648C22.8853 18.0084 22.5149 17.7852 22.2972 17.6797Z"
          fill="white"
        />
      )}
      <Path
        d="M23.9141 17.4681C23.7473 17.0142 23.4297 16.7713 23.0679 16.5701C22.9998 16.5302 22.9373 16.4983 22.8839 16.4738C22.776 16.418 22.6656 16.364 22.5559 16.3069C21.4282 15.7089 20.5477 14.9545 19.9369 14.0602C19.7635 13.8084 19.613 13.5415 19.4874 13.2628C19.4353 13.1137 19.4378 13.0291 19.4752 12.9518C19.5123 12.8922 19.5614 12.8411 19.6193 12.8015C19.8131 12.6733 20.013 12.5433 20.1485 12.4556C20.3901 12.2991 20.5814 12.1752 20.7046 12.0875C21.1676 11.7637 21.4914 11.4196 21.6937 11.035C21.8349 10.7693 21.9172 10.4763 21.9351 10.1759C21.953 9.87552 21.906 9.57481 21.7973 9.29422C21.4907 8.48702 20.7285 7.98589 19.8051 7.98589C19.6103 7.98571 19.416 8.00627 19.2256 8.04723C19.1747 8.05827 19.1238 8.06993 19.0742 8.08281C19.0827 7.53077 19.0705 6.94806 19.0214 6.37456C18.8473 4.35839 18.1415 3.30155 17.4057 2.45877C16.9345 1.93065 16.3794 1.48385 15.7629 1.13633C14.6463 0.498423 13.3801 0.174561 11.9998 0.174561C10.6195 0.174561 9.35935 0.498423 8.2415 1.13633C7.62348 1.48395 7.06734 1.93165 6.5957 2.46122C5.85987 3.304 5.15408 4.36269 4.97994 6.37701C4.93088 6.95052 4.91862 7.53629 4.92659 8.08526C4.87692 8.07238 4.82664 8.06073 4.77574 8.04969C4.58531 8.00873 4.39106 7.98816 4.19628 7.98835C3.2722 7.98835 2.50877 8.48948 2.2034 9.29668C2.09425 9.57739 2.04679 9.87831 2.06425 10.179C2.08171 10.4797 2.16368 10.7731 2.30458 11.0393C2.50755 11.4239 2.83131 11.768 3.29427 12.0918C3.41691 12.1777 3.60884 12.3016 3.85044 12.4599C3.98105 12.5445 4.17175 12.6684 4.35877 12.7923C4.42421 12.8346 4.47982 12.8905 4.52188 12.9561C4.56113 13.0364 4.56235 13.1229 4.5041 13.2824C4.3802 13.5553 4.23224 13.8166 4.06199 14.0632C3.46474 14.9373 2.60995 15.6782 1.51847 16.2714C0.940228 16.5781 0.3393 16.7829 0.0854386 17.473C-0.105877 17.9937 0.0192137 18.5862 0.505475 19.0855C0.683937 19.2719 0.890926 19.4286 1.11867 19.5499C1.59254 19.8104 2.09642 20.012 2.61915 20.1504C2.72702 20.1782 2.82943 20.224 2.92206 20.2859C3.09928 20.4411 3.07414 20.6748 3.31021 21.017C3.42872 21.1939 3.5793 21.3471 3.75417 21.4685C4.24962 21.8108 4.8064 21.8322 5.39629 21.8549C5.92916 21.8752 6.53315 21.8985 7.22299 22.126C7.50874 22.2205 7.80552 22.4033 8.14953 22.6167C8.9755 23.1246 10.1062 23.8196 11.9985 23.8196C13.8908 23.8196 15.0295 23.1209 15.8616 22.6112C16.2032 22.4014 16.4981 22.2205 16.7759 22.1285C17.4658 21.9003 18.0697 21.8776 18.6026 21.8574C19.1925 21.8347 19.7493 21.8132 20.2447 21.4709C20.4518 21.3265 20.6244 21.138 20.75 20.9189C20.9199 20.63 20.9156 20.4282 21.075 20.2871C21.1619 20.2282 21.2581 20.1842 21.3595 20.1571C21.8894 20.0183 22.4001 19.8148 22.8802 19.5511C23.1222 19.4212 23.34 19.2507 23.5241 19.0469L23.5302 19.0395C23.9864 18.5513 24.1011 17.9759 23.9141 17.4681ZM22.2321 18.3722C21.2062 18.9389 20.5244 18.8782 19.9939 19.2199C19.5432 19.51 19.81 20.1356 19.4825 20.3614C19.0803 20.6392 17.8913 20.3417 16.3553 20.849C15.0884 21.2679 14.2802 22.4726 12.0016 22.4726C9.72297 22.4726 8.9338 21.2704 7.64609 20.8459C6.11312 20.3387 4.92168 20.6361 4.51882 20.3583C4.19199 20.1326 4.4575 19.5069 4.00741 19.2168C3.47639 18.8751 2.79452 18.9359 1.76926 18.3722C1.11621 18.0115 1.48658 17.7882 1.70427 17.6827C5.42021 15.8831 6.01316 13.1045 6.03953 12.8984C6.07142 12.6488 6.10698 12.4525 5.83227 12.1986C5.56676 11.9532 4.38882 11.2239 4.06199 10.9957C3.52115 10.6179 3.28323 10.2407 3.45861 9.77695C3.58125 9.45615 3.88048 9.33532 4.19444 9.33532C4.29366 9.33562 4.39256 9.34673 4.48938 9.36844C5.08295 9.49725 5.65935 9.79474 5.99232 9.87509C6.03241 9.88538 6.07357 9.89094 6.11495 9.89165C6.29278 9.89165 6.35533 9.8021 6.34306 9.59846C6.30504 8.94889 6.21307 7.68289 6.31547 6.49969C6.45589 4.87179 6.98017 4.0652 7.60317 3.35184C7.90241 3.00897 9.30846 1.52276 11.9973 1.52276C14.6862 1.52276 16.0959 3.00283 16.3951 3.34448C17.0187 4.05784 17.5436 4.86443 17.6828 6.49233C17.7852 7.67553 17.6969 8.94215 17.6552 9.5911C17.6411 9.80516 17.7055 9.88429 17.8833 9.88429C17.9247 9.88363 17.9659 9.87807 18.006 9.86773C18.3396 9.78738 18.9159 9.48989 19.5095 9.36108C19.6063 9.33937 19.7052 9.32826 19.8045 9.32796C20.1203 9.32796 20.4177 9.45063 20.5403 9.76959C20.7157 10.2333 20.479 10.6105 19.9375 10.9884C19.6107 11.2165 18.4328 11.9452 18.1672 12.1912C17.8919 12.4451 17.9281 12.6414 17.96 12.8911C17.9864 13.1002 18.5787 15.8788 22.2952 17.6754C22.5148 17.7852 22.8851 18.0084 22.2321 18.3722Z"
        fill={fill || '#000000'}
      />
    </>
  ),
  pinterest: (fill?: ColorValue) => (
    <>
      <Path
        d="M12 0C5.37188 0 0 5.37188 0 12C0 17.0859 3.16406 21.4266 7.62656 23.175C7.52344 22.2234 7.425 20.7703 7.66875 19.7344C7.88906 18.7969 9.075 13.7719 9.075 13.7719C9.075 13.7719 8.71406 13.0547 8.71406 11.9906C8.71406 10.3219 9.67969 9.075 10.8844 9.075C11.9062 9.075 12.4031 9.84375 12.4031 10.7672C12.4031 11.7984 11.7469 13.3359 11.4094 14.7609C11.1281 15.9562 12.0094 16.9313 13.1859 16.9313C15.3187 16.9313 16.9594 14.6812 16.9594 11.4375C16.9594 8.56406 14.8969 6.55313 11.9484 6.55313C8.53594 6.55313 6.52969 9.1125 6.52969 11.7609C6.52969 12.7922 6.92812 13.8984 7.425 14.4984C7.52344 14.6156 7.5375 14.7234 7.50937 14.8406C7.42031 15.2203 7.21406 16.0359 7.17656 16.2C7.125 16.4203 7.00313 16.4672 6.77344 16.3594C5.27344 15.6609 4.33594 13.4719 4.33594 11.7094C4.33594 7.92188 7.0875 4.44844 12.2625 4.44844C16.425 4.44844 19.6594 7.41563 19.6594 11.3813C19.6594 15.5156 17.0531 18.8438 13.4344 18.8438C12.2203 18.8438 11.0766 18.2109 10.6828 17.4656C10.6828 17.4656 10.0828 19.7578 9.9375 20.3203C9.66562 21.3609 8.93437 22.6688 8.44687 23.4656C9.57187 23.8125 10.7625 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0Z"
        fill={fill || '#E60019'}
      />
    </>
  ),
  github: (fill?: ColorValue) => (
    <>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z"
        fill={fill || '#000000'}
      />
    </>
  ),
  tikTok: (fill?: ColorValue) => (
    <>
      {!fill ? (
        <>
          <Path
            d="M17.1765 8.66347C18.7198 9.77064 20.6105 10.4221 22.6525 10.4221V6.47861C22.2661 6.47869 21.8806 6.43825 21.5025 6.35786V9.46193C19.4606 9.46193 17.5702 8.81049 16.0265 7.7034V15.7509C16.0265 19.7766 12.7745 23.0399 8.76333 23.0399C7.26666 23.0399 5.87556 22.5858 4.71997 21.807C6.03888 23.1604 7.87821 24 9.91309 24C13.9245 24 17.1766 20.7367 17.1766 16.7108V8.66347H17.1765ZM18.5951 4.68499C17.8064 3.82023 17.2885 2.70267 17.1765 1.46717V0.959961H16.0867C16.361 2.53028 17.2966 3.87187 18.5951 4.68499ZM7.25706 18.7178C6.81638 18.1379 6.57824 17.4286 6.57931 16.6992C6.57931 14.858 8.06672 13.3651 9.90177 13.3651C10.2438 13.365 10.5837 13.4176 10.9096 13.5214V9.48977C10.5287 9.43739 10.1443 9.41515 9.7601 9.4233V12.5613C9.43394 12.4575 9.09384 12.4048 8.75177 12.4051C6.91671 12.4051 5.42938 13.8979 5.42938 15.7393C5.42938 17.0414 6.17284 18.1687 7.25706 18.7178Z"
            fill="#FF004F"
          />
          <Path
            d="M16.0265 7.70332C17.5702 8.81041 19.4607 9.46185 21.5025 9.46185V6.35778C20.3628 6.11414 19.3538 5.5164 18.5951 4.68499C17.2966 3.87179 16.361 2.5302 16.0867 0.959961H13.2241V16.7106C13.2176 18.5468 11.7327 20.0336 9.90162 20.0336C8.82257 20.0336 7.86394 19.5174 7.25682 18.7178C6.17269 18.1687 5.42923 17.0413 5.42923 15.7394C5.42923 13.8981 6.91655 12.4052 8.75161 12.4052C9.1032 12.4052 9.44208 12.4602 9.75995 12.5614V9.42338C5.81921 9.50509 2.6499 12.7365 2.6499 16.7107C2.6499 18.6946 3.43913 20.4931 4.72006 21.8071C5.87565 22.5858 7.26675 23.04 8.76342 23.04C12.7747 23.04 16.0265 19.7765 16.0265 15.7509V7.70332H16.0265Z"
            fill="black"
          />
          <Path
            d="M21.5025 6.3578V5.51848C20.4748 5.52005 19.4672 5.23119 18.5952 4.68493C19.3671 5.53306 20.3835 6.11787 21.5025 6.3578ZM16.0867 0.959983C16.0605 0.809911 16.0404 0.658851 16.0265 0.507214V0H12.074V15.7508C12.0677 17.5868 10.5829 19.0736 8.75164 19.0736C8.214 19.0736 7.70638 18.9455 7.25685 18.7179C7.86397 19.5174 8.82259 20.0336 9.90164 20.0336C11.7326 20.0336 13.2177 18.5469 13.2241 16.7107V0.959983H16.0867ZM9.76014 9.42341V8.52989C9.42988 8.48459 9.09691 8.46186 8.76353 8.46202C4.75192 8.46194 1.5 11.7254 1.5 15.7508C1.5 18.2745 2.77806 20.4987 4.72017 21.807C3.43924 20.493 2.65001 18.6944 2.65001 16.7106C2.65001 12.7365 5.81924 9.50511 9.76014 9.42341Z"
            fill="#00F2EA"
          />
        </>
      ) : (
        <Path
          d="M17.0725 0H13.0278V16.3478C13.0278 18.2957 11.4722 19.8957 9.53626 19.8957C7.60034 19.8957 6.04469 18.2957 6.04469 16.3478C6.04469 14.4348 7.56577 12.8695 9.43257 12.8V8.69567C5.31872 8.7652 2 12.1391 2 16.3478C2 20.5913 5.38786 24 9.57085 24C13.7538 24 17.1416 20.5565 17.1416 16.3478V7.9652C18.6627 9.07827 20.5295 9.73913 22.5 9.77393V5.66957C19.4579 5.56522 17.0725 3.06087 17.0725 0Z"
          fill={fill}
        />
      )}
    </>
  ),
  telegram: (fill?: ColorValue) => (
    <>
      {!fill ? (
        <>
          <G clipPath="url(#clip0_4115_31813)">
            <Path
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
              fill="url(#paint0_linear_4115_31813)"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.43201 11.8734C8.93026 10.3493 11.263 9.34452 12.4301 8.85905C15.7627 7.47294 16.4551 7.23216 16.9065 7.22421C17.0058 7.22246 17.2277 7.24706 17.3715 7.36372C17.4929 7.46223 17.5263 7.5953 17.5423 7.6887C17.5583 7.78209 17.5782 7.99485 17.5623 8.1611C17.3817 10.0586 16.6003 14.6633 16.2028 16.7885C16.0346 17.6877 15.7034 17.9892 15.3827 18.0188C14.6858 18.0829 14.1567 17.5582 13.4817 17.1158C12.4256 16.4235 11.8289 15.9925 10.8037 15.3169C9.61896 14.5362 10.387 14.107 11.0622 13.4058C11.2389 13.2222 14.3093 10.4295 14.3687 10.1761C14.3762 10.1444 14.3831 10.0263 14.3129 9.96397C14.2427 9.9016 14.1392 9.92293 14.0644 9.93989C13.9585 9.96393 12.2713 11.0791 9.00276 13.2855C8.52385 13.6143 8.09007 13.7745 7.70141 13.7662C7.27295 13.7569 6.44876 13.5239 5.83606 13.3247C5.08456 13.0804 4.48728 12.9513 4.53929 12.5364C4.56638 12.3203 4.86395 12.0993 5.43201 11.8734Z"
              fill="white"
            />
          </G>
          <Defs>
            <LinearGradient
              id="paint0_linear_4115_31813"
              x1="12"
              y1="0"
              x2="12"
              y2="23.822"
              gradientUnits="userSpaceOnUse"
            >
              <Stop stopColor="#2AABEE" />
              <Stop offset="1" stopColor="#229ED9" />
            </LinearGradient>
            <ClipPath id="clip0_4115_31813">
              <Rect width="24" height="24" fill="white" />
            </ClipPath>
          </Defs>
        </>
      ) : (
        <>
          <G clipPath="url(#clip0_4115_31935)">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.4301 8.85905C11.263 9.34452 8.93026 10.3493 5.43201 11.8734C4.86395 12.0993 4.56638 12.3203 4.53929 12.5364C4.49351 12.9016 4.95084 13.0454 5.5736 13.2412C5.65831 13.2679 5.74608 13.2955 5.83606 13.3247C6.44876 13.5239 7.27295 13.7569 7.70141 13.7662C8.09007 13.7745 8.52385 13.6143 9.00276 13.2855C12.2713 11.0791 13.9585 9.96393 14.0644 9.93989C14.1392 9.92293 14.2427 9.9016 14.3129 9.96397C14.3831 10.0263 14.3762 10.1444 14.3687 10.1761C14.3234 10.3693 12.5282 12.0382 11.5992 12.9019C11.3096 13.1712 11.1042 13.3621 11.0622 13.4058C10.9681 13.5035 10.8722 13.5959 10.7801 13.6847C10.2109 14.2335 9.78403 14.6449 10.8037 15.3169C11.2937 15.6398 11.6859 15.9069 12.077 16.1732C12.5043 16.4642 12.9304 16.7544 13.4817 17.1158C13.6222 17.2079 13.7563 17.3035 13.887 17.3966C14.3842 17.7511 14.8309 18.0695 15.3827 18.0188C15.7034 17.9892 16.0346 17.6877 16.2028 16.7885C16.6003 14.6633 17.3818 10.0586 17.5623 8.1611C17.5782 7.99485 17.5583 7.78209 17.5423 7.6887C17.5263 7.5953 17.4929 7.46223 17.3715 7.36372C17.2277 7.24706 17.0058 7.22246 16.9065 7.22421C16.4551 7.23216 15.7627 7.47294 12.4301 8.85905Z"
              fill={fill}
            />
          </G>
          <Defs>
            <ClipPath id="clip0_4115_31935">
              <Rect width="24" height="24" fill="white" />
            </ClipPath>
          </Defs>
        </>
      )}
    </>
  ),
  signal: (fill?: ColorValue) => (
    <Path
      d="M9.11911 0.350322L9.38845 1.44131C8.32691 1.70367 7.31091 2.12432 6.3746 2.68912L5.79842 1.72428C6.82904 1.10015 7.94881 0.63684 9.11911 0.350322ZM14.8809 0.350322L14.6115 1.44131C15.6731 1.70367 16.6891 2.12432 17.6254 2.68912L18.2084 1.72428C17.1751 1.1007 16.0531 0.637446 14.8809 0.350322ZM1.72427 5.79503C1.10072 6.82716 0.637457 7.94795 0.350307 9.11913L1.44129 9.38846C1.70365 8.32693 2.1243 7.31093 2.68911 6.37461L1.72427 5.79503ZM1.12423 12C1.12414 11.4545 1.16517 10.9097 1.24696 10.3704L0.135519 10.1999C-0.0451731 11.392 -0.0451731 12.6046 0.135519 13.7967L1.24696 13.6297C1.1653 13.0903 1.12427 12.5455 1.12423 12ZM18.2016 22.2723L17.6254 21.3109C16.6906 21.8762 15.6756 22.2969 14.615 22.5587L14.8843 23.6497C16.0532 23.3604 17.1716 22.8961 18.2016 22.2723ZM22.8758 12C22.8757 12.5455 22.8347 13.0903 22.753 13.6297L23.8645 13.7967C24.0452 12.6046 24.0452 11.392 23.8645 10.1999L22.753 10.3704C22.8348 10.9097 22.8759 11.4545 22.8758 12ZM23.6497 14.8775L22.5587 14.6082C22.297 15.671 21.8763 16.6882 21.3109 17.6254L22.2757 18.205C22.8999 17.172 23.3632 16.0499 23.6497 14.8775ZM13.6297 22.7531C12.5494 22.9167 11.4506 22.9167 10.3703 22.7531L10.2033 23.8645C11.3943 24.0452 12.6057 24.0452 13.7967 23.8645L13.6297 22.7531ZM20.7552 18.4505C20.1072 19.3292 19.3302 20.1051 18.4505 20.7518L19.1187 21.6587C20.0876 20.9454 20.9449 20.0916 21.6621 19.1255L20.7552 18.4505ZM18.4505 3.24485C19.3302 3.89279 20.1072 4.66977 20.7552 5.54955L21.6621 4.87451C20.9474 3.90756 20.0925 3.05263 19.1255 2.33796L18.4505 3.24485ZM3.24483 5.54955C3.89278 4.66977 4.66976 3.89279 5.54954 3.24485L4.87449 2.33796C3.90754 3.05263 3.05262 3.90756 2.33795 4.87451L3.24483 5.54955ZM22.2757 5.79503L21.3109 6.37461C21.8762 7.30945 22.2969 8.3244 22.5587 9.38506L23.6497 9.11572C23.3625 7.94563 22.8992 6.82595 22.2757 5.79503ZM10.3703 1.24698C11.4506 1.08331 12.5494 1.08331 13.6297 1.24698L13.7967 0.135534C12.6057 -0.0451779 11.3943 -0.0451779 10.2033 0.135534L10.3703 1.24698ZM3.82101 21.9587L1.49925 22.4974L2.04134 20.1756L0.946941 19.9199L0.404856 22.2417C0.370939 22.3856 0.365734 22.5348 0.389539 22.6808C0.413344 22.8267 0.465692 22.9666 0.543588 23.0923C0.621485 23.218 0.723402 23.3271 0.843508 23.4134C0.963615 23.4997 1.09956 23.5615 1.24355 23.5952C1.41196 23.6327 1.58655 23.6327 1.75495 23.5952L4.07671 23.0599L3.82101 21.9587ZM1.17878 18.9176L2.27658 19.1698L2.65161 17.5606C2.10394 16.642 1.69604 15.6469 1.44129 14.6082L0.350307 14.8775C0.595705 15.8718 0.966907 16.8307 1.45493 17.7311L1.17878 18.9176ZM6.42915 21.3518L4.81994 21.7268L5.07564 22.8246L6.25868 22.5485C7.15838 23.038 8.11751 23.4093 9.11229 23.6531L9.38163 22.5621C8.34612 22.3041 7.35459 21.8939 6.43938 21.345L6.42915 21.3518ZM12 2.24932C6.61325 2.25273 2.25272 6.62009 2.25272 12.0034C2.25568 13.837 2.77433 15.6328 3.74941 17.1856L2.81185 21.1882L6.81099 20.2506C11.3693 23.1178 17.3902 21.7507 20.2574 17.1958C23.1247 12.641 21.7609 6.62009 17.2061 3.74943C15.6467 2.76884 13.842 2.24882 12 2.24932Z"
      fill={fill || '#3A76F0'}
    />
  ),
};

interface ISocialIconProps extends SvgProps {
  variant?: keyof typeof socialVariants;
}

const SocialIcon: React.FC<ISocialIconProps> = ({
  variant = 'facebook',
  fill,
  width = 24,
  height = 24,
  ...rest
}) => (
  <View style={{width, height}}>
    <Svg {...rest} width="100%" height="100%" viewBox="0 0 24 24">
      {socialVariants[variant](fill)}
    </Svg>
  </View>
);

export default SocialIcon;

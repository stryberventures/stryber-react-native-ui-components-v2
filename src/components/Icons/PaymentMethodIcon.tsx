import * as React from 'react';
import Svg, {Path, SvgProps, Rect} from 'react-native-svg';

export const paymentMethodVariants = {
  amazon: (
    <>
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" fill="white" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.2933 13.9481H28.1319H28.1326C28.2204 13.9499 28.2933 13.8774 28.2965 13.7852V11.3417C28.2965 11.0348 28.3121 10.7577 28.4298 10.4805C28.5106 10.2697 28.7009 10.1277 28.9169 10.1172C29.4533 10.1172 29.4481 10.7352 29.4441 11.2206C29.4437 11.2616 29.4434 11.3016 29.4434 11.3402V13.8056C29.4538 13.8847 29.5165 13.9447 29.5924 13.9481H30.4384C30.5186 13.9499 30.5877 13.889 30.6 13.8056V10.9487C30.6 10.5095 30.6 9.89802 30.3803 9.53474C30.1427 9.14328 29.7748 9 29.398 9C28.8171 9 28.4871 9.29595 28.2518 9.91681H28.2354V9.22235C28.2184 9.14975 28.1575 9.09791 28.0865 9.09552H27.306C27.2235 9.09338 27.1532 9.15806 27.1443 9.24427V13.7852C27.1454 13.8723 27.2106 13.9436 27.2933 13.9481ZM26.5039 11.5664C26.5039 10.1337 25.8284 9.00626 24.5794 9.00626C23.3625 9.00626 22.687 10.1149 22.687 11.5187C22.687 12.9225 23.3543 14.0499 24.5794 14.0499C25.7591 14.0499 26.5039 12.9514 26.5039 11.5664ZM23.9277 11.3754C23.9277 10.8211 23.9672 9.93325 24.5876 9.93325C24.8542 9.93325 25.0427 10.0593 25.1372 10.3725C25.2475 10.735 25.2631 11.1938 25.2631 11.5758C25.2631 12.1583 25.2385 13.1135 24.5794 13.1135C23.9275 13.1135 23.9277 11.9554 23.9277 11.3938L23.9277 11.3754ZM8.19106 13.9575H9.03189H9.03263C9.07483 13.9585 9.11569 13.9419 9.14617 13.9111C9.17664 13.8804 9.19421 13.8382 9.19499 13.7938V11.3879L9.19497 11.3503C9.19463 10.8271 9.19417 10.1352 9.7759 10.1352C10.3137 10.1352 10.3054 10.7431 10.2987 11.2341V11.2341V11.2341V11.2341V11.2341C10.2979 11.287 10.2972 11.3386 10.2972 11.3879V13.7946C10.2987 13.8815 10.3636 13.9526 10.4462 13.9575H11.2892C11.3313 13.9583 11.372 13.9415 11.4023 13.9109C11.4326 13.8802 11.4501 13.8381 11.4509 13.7938V11.3879L11.4508 11.3307V11.3307C11.4503 11.0758 11.4496 10.7318 11.5298 10.5181C11.6116 10.2996 11.8093 10.1534 12.0325 10.1462C12.2761 10.1462 12.4645 10.2323 12.527 10.5377C12.559 10.6846 12.5548 11.0253 12.5521 11.2512V11.2512L12.5521 11.2513C12.5514 11.3046 12.5509 11.3515 12.5509 11.3879V13.7946C12.5519 13.8817 12.6171 13.9529 12.6998 13.9575H13.5407C13.5829 13.9585 13.6237 13.9419 13.6542 13.9111C13.6847 13.8804 13.7022 13.8382 13.703 13.7938V10.9291C13.703 10.8593 13.7042 10.788 13.7053 10.7159V10.7159V10.7158V10.7158V10.7157C13.7122 10.288 13.7195 9.83268 13.4908 9.50576C13.2134 9.13493 12.7674 8.95015 12.324 9.02235C11.8806 9.09455 11.5087 9.41252 11.3511 9.85416C11.115 9.28028 10.7776 9.0133 10.2592 9.0133C9.7409 9.0133 9.35586 9.28028 9.15179 9.85416H9.13615V9.26149C9.13172 9.17701 9.06756 9.10956 8.9872 9.1049H8.20297C8.11637 9.104 8.04493 9.17597 8.04211 9.26697V13.8079C8.04974 13.8897 8.11306 13.9532 8.19106 13.9575ZM6.7276 13.992C6.67222 14.0424 6.59263 14.0509 6.52875 14.0131C6.29046 13.8047 6.21861 13.692 6.10829 13.519L6.10828 13.519L6.10827 13.519C6.0893 13.4892 6.06919 13.4577 6.04689 13.4235C5.5844 13.9184 5.25745 14.0663 4.65941 14.0663C3.95114 14.0663 3.40002 13.6068 3.40002 12.6876C3.40002 11.9697 3.7724 11.4819 4.29373 11.2423C4.67869 11.0647 5.19233 11.0096 5.63639 10.962C5.71895 10.9531 5.79912 10.9445 5.8756 10.9354V10.8211C5.8756 10.7993 5.87577 10.777 5.87594 10.7545C5.87741 10.5596 5.87905 10.3426 5.77357 10.1791C5.67079 10.0163 5.47566 9.9497 5.30139 9.9497C4.9804 9.9497 4.69441 10.1227 4.62441 10.4805C4.61553 10.564 4.55444 10.6308 4.47545 10.6434L3.66665 10.5502C3.62629 10.5441 3.59006 10.5209 3.56642 10.486C3.54277 10.4511 3.53378 10.4075 3.54153 10.3654C3.72846 9.32571 4.62217 9.01176 5.42279 9.01176C5.8324 9.01176 6.36714 9.12606 6.68887 9.45176C7.06656 9.8235 7.06423 10.3101 7.06168 10.842C7.06146 10.8859 7.06125 10.9301 7.06125 10.9746V12.3517C7.06125 12.7226 7.19216 12.9071 7.33004 13.1014C7.34642 13.1245 7.3629 13.1478 7.37926 13.1714C7.43289 13.2497 7.4448 13.3476 7.37926 13.4063C7.20722 13.5574 6.90187 13.8361 6.7343 13.9935L6.7276 13.992ZM5.87931 11.8358L5.87934 11.8786C5.87963 12.2043 5.87988 12.4804 5.72217 12.7753C5.58811 13.0242 5.37585 13.1777 5.13902 13.1777C4.81654 13.1777 4.62812 12.9193 4.62812 12.5357C4.62812 11.7825 5.27084 11.6455 5.87931 11.6455V11.8358ZM18.3569 13.0982C18.3733 13.1213 18.3898 13.1446 18.4062 13.1683C18.4628 13.2497 18.4747 13.3452 18.4024 13.3993C18.2304 13.5504 17.925 13.8299 17.7575 13.9865C17.7018 14.0363 17.6224 14.0444 17.5586 14.0068C17.3193 13.7975 17.2484 13.6865 17.1365 13.5112L17.1364 13.5111C17.1178 13.4818 17.0979 13.4508 17.076 13.4173C16.6143 13.9121 16.2851 14.0601 15.6893 14.0601C14.981 14.0601 14.4299 13.6005 14.4299 12.6821C14.4299 11.9634 14.8 11.4756 15.3273 11.236C15.7131 11.0578 16.2296 11.0029 16.675 10.9556C16.7558 10.947 16.8343 10.9387 16.9092 10.9299V10.818C16.9092 10.7962 16.9094 10.7741 16.9095 10.7517C16.911 10.5567 16.9126 10.3397 16.8064 10.1767C16.7066 10.0139 16.5078 9.94656 16.3342 9.94656C16.0133 9.94656 15.7288 10.1196 15.658 10.4774C15.6489 10.5607 15.5879 10.6274 15.5091 10.6402L14.6935 10.5478C14.6529 10.542 14.6163 10.5188 14.5925 10.4836C14.5687 10.4485 14.5597 10.4046 14.5677 10.3623C14.7554 9.32179 15.6491 9.00862 16.4497 9.00862C16.8586 9.00862 17.3933 9.12292 17.7158 9.44862C18.0942 9.81843 18.0916 10.3013 18.0887 10.8304C18.0884 10.8771 18.0882 10.9241 18.0882 10.9714V12.3494C18.0882 12.7195 18.219 12.9039 18.3569 13.0982ZM16.1704 13.173C16.4065 13.173 16.6195 13.0195 16.7528 12.7713C16.9111 12.4749 16.9109 12.1974 16.9107 11.8677L16.9107 11.8326V11.6416C16.3022 11.6416 15.6595 11.7778 15.6595 12.5318C15.6595 12.9146 15.8479 13.173 16.1704 13.173ZM19.1181 9.25131V9.898C19.1177 9.94237 19.1345 9.98498 19.1648 10.0159C19.1951 10.0468 19.2361 10.0634 19.2782 10.0616H20.726L19.066 12.567C18.9902 12.7014 18.9544 12.8565 18.9632 13.0125V13.6741C18.9632 13.7696 19.0637 13.8784 19.1598 13.8244C20.0754 13.3253 21.1642 13.3233 22.0815 13.8189C22.1865 13.8761 22.2856 13.7657 22.2856 13.6701V12.9749C22.2827 12.8686 22.2259 12.7721 22.1366 12.722C21.6533 12.4363 21.091 12.3525 20.5592 12.3658L21.9921 10.2159C22.1254 10.0233 22.1999 9.90114 22.1999 9.80797V9.25131C22.2003 9.20709 22.1836 9.1646 22.1535 9.1337C22.1234 9.10281 22.0826 9.08618 22.0405 9.08768H19.2753C19.2332 9.08519 19.192 9.10157 19.1621 9.13277C19.1321 9.16396 19.1161 9.20703 19.1181 9.25131Z"
        fill="black"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5012 16.8449C20.6926 16.3446 21.1186 15.2234 20.916 14.9518H20.9175C20.7158 14.6795 19.5837 14.8224 19.0745 14.8867L19.0735 14.8868C18.9185 14.9064 18.8947 14.7647 19.034 14.6621C19.9381 13.9943 21.4194 14.1853 21.5915 14.4108C21.7635 14.6363 21.5446 16.1974 20.6978 16.9428C20.5674 17.0571 20.4431 16.996 20.5012 16.8449ZM14.4172 17.6169C16.3864 17.6169 18.6795 16.9631 20.2591 15.7378V15.7402C20.5205 15.5335 20.2963 15.2297 20.0297 15.3487C18.3055 16.1133 16.4546 16.5124 14.5833 16.5231C11.9871 16.5231 9.47576 15.7746 7.44406 14.5321C7.26606 14.4233 7.13349 14.6151 7.28244 14.7553C9.2384 16.6105 11.7828 17.631 14.4172 17.6169Z"
        fill="#FF9900"
      />
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" stroke="#F2F4F7" />
    </>
  ),
  visa: (
    <>
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" fill="white" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7503 15.8582H8.69056L7.146 9.79235C7.07269 9.51332 6.91703 9.26664 6.68806 9.15038C6.11664 8.85821 5.48696 8.62568 4.80005 8.50841V8.27487H8.11813C8.57607 8.27487 8.91953 8.62568 8.97677 9.0331L9.77817 13.4086L11.8369 8.27487H13.8394L10.7503 15.8582ZM14.9843 15.8582H13.039L14.6408 8.27487H16.5861L14.9843 15.8582ZM19.1028 10.3757C19.16 9.96725 19.5035 9.73372 19.9042 9.73372C20.5338 9.67508 21.2197 9.79235 21.7922 10.0835L22.1356 8.45079C21.5632 8.21725 20.9335 8.09998 20.3621 8.09998C18.4741 8.09998 17.1003 9.15038 17.1003 10.6082C17.1003 11.7173 18.0734 12.2996 18.7603 12.6504C19.5035 13.0002 19.7897 13.2337 19.7324 13.5835C19.7324 14.1082 19.16 14.3418 18.5886 14.3418C17.9017 14.3418 17.2147 14.1669 16.5861 13.8747L16.2426 15.5084C16.9295 15.7996 17.6727 15.9169 18.3596 15.9169C20.4766 15.9745 21.7922 14.9251 21.7922 13.35C21.7922 11.3664 19.1028 11.2502 19.1028 10.3757ZM28.6 15.8582L27.0555 8.27487H25.3965C25.053 8.27487 24.7095 8.50841 24.5951 8.85821L21.7349 15.8582H23.7374L24.1371 14.7502H26.5976L26.8265 15.8582H28.6ZM25.6827 10.3171L26.2541 13.1751H24.6523L25.6827 10.3171Z"
        fill="#172B85"
      />
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" stroke="#F2F4F7" />
    </>
  ),
  googlePay: (
    <>
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" fill="white" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0579 15.5279V12.5933H17.5725C18.1931 12.5933 18.717 12.3853 19.1441 11.9752L19.2466 11.8712C20.0266 11.022 19.9754 9.69908 19.1441 8.91343C18.7284 8.49749 18.159 8.27219 17.5725 8.28375H15.1411V15.5279H16.0579ZM16.058 11.7036V9.17333H17.5956C17.9259 9.17333 18.2391 9.30042 18.4726 9.5315C18.9681 10.0168 18.9795 10.8255 18.5011 11.3281C18.2676 11.5765 17.9373 11.7152 17.5956 11.7036H16.058ZM23.5228 10.9584C23.1299 10.5945 22.5947 10.4096 21.9171 10.4096C21.0459 10.4096 20.3911 10.7331 19.9583 11.3744L20.7669 11.8885C21.063 11.4495 21.4673 11.2299 21.9797 11.2299C22.3043 11.2299 22.6175 11.3512 22.8623 11.5708C23.1015 11.7787 23.2381 12.0791 23.2381 12.3969V12.6106C22.8851 12.4142 22.441 12.3102 21.8943 12.3102C21.2566 12.3102 20.7441 12.4604 20.3626 12.7666C19.9811 13.0728 19.7875 13.4771 19.7875 13.9913C19.7761 14.4592 19.9754 14.904 20.3285 15.2044C20.6872 15.5279 21.1427 15.6897 21.6779 15.6897C22.31 15.6897 22.8111 15.4066 23.1926 14.8405H23.2324V15.5279H24.1093V12.472C24.1093 11.8307 23.9157 11.3224 23.5228 10.9584ZM21.0347 14.6152C20.8467 14.4765 20.7328 14.2513 20.7328 14.0086C20.7328 13.7371 20.8581 13.5118 21.103 13.3327C21.3536 13.1536 21.6668 13.0612 22.037 13.0612C22.5495 13.0554 22.9482 13.171 23.2329 13.4021C23.2329 13.7949 23.0792 14.1357 22.7773 14.4246C22.504 14.7018 22.1338 14.8578 21.7465 14.8578C21.4903 14.8636 21.2397 14.7769 21.0347 14.6152ZM26.0795 17.7058L29.1429 10.5714H28.1464L26.7286 14.1299H26.7115L25.2595 10.5714H24.2631L26.2731 15.2102L25.1343 17.7058H26.0795Z"
        fill="#3C4043"
      />
      <Path
        d="M12.893 11.9578C12.893 11.6747 12.8702 11.3917 12.8247 11.1144H8.95837V12.7146H11.1734C11.0823 13.2287 10.7862 13.6909 10.3534 13.9797V15.0195H11.6745C12.4488 14.2974 12.893 13.2287 12.893 11.9578Z"
        fill="#4285F4"
      />
      <Path
        d="M8.95854 16.0247C10.0632 16.0247 10.997 15.655 11.6746 15.0196L10.3536 13.9797C9.98347 14.2339 9.51086 14.3783 8.95854 14.3783C7.88805 14.3783 6.98269 13.6447 6.65813 12.6626H5.29724V13.7371C5.99192 15.1409 7.40975 16.0247 8.95854 16.0247Z"
        fill="#34A853"
      />
      <Path
        d="M6.65822 12.6626C6.48737 12.1485 6.48737 11.5882 6.65822 11.0682V9.99951H5.29712C4.71053 11.1722 4.71053 12.5587 5.29712 13.7314L6.65822 12.6626Z"
        fill="#FBBC04"
      />
      <Path
        d="M8.95854 9.35247C9.54503 9.34092 10.1087 9.56621 10.5301 9.97637L11.7031 8.78634C10.9572 8.08156 9.97778 7.69451 8.95854 7.70606C7.40975 7.70606 5.99192 8.5957 5.29724 9.99948L6.65813 11.074C6.98269 10.0861 7.88805 9.35247 8.95854 9.35247Z"
        fill="#EA4335"
      />
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" stroke="#F2F4F7" />
    </>
  ),
  applePay: (
    <>
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" fill="white" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.44921 8.34316C9.16382 8.69506 8.70721 8.97261 8.2506 8.93296C8.19353 8.45715 8.41707 7.95161 8.67867 7.63936C8.96406 7.27755 9.46348 7.01983 9.86777 7C9.91533 7.49563 9.72983 7.98135 9.44921 8.34316ZM9.86297 9.02712C9.46071 9.003 9.09366 9.15319 8.79718 9.2745C8.60639 9.35256 8.44483 9.41867 8.32191 9.41867C8.18397 9.41867 8.01574 9.34903 7.82685 9.27084L7.82685 9.27084C7.57935 9.16838 7.29638 9.05124 6.99964 9.05686C6.31948 9.06677 5.68688 9.46823 5.33967 10.1076C4.62621 11.3863 5.15417 13.2796 5.84384 14.3205C6.18155 14.8359 6.58584 15.4009 7.11855 15.3811C7.35291 15.3719 7.5215 15.2973 7.69597 15.2202C7.89683 15.1314 8.10549 15.0391 8.43131 15.0391C8.74582 15.0391 8.94536 15.129 9.1369 15.2152C9.31903 15.2973 9.49393 15.376 9.75358 15.3712C10.3053 15.3613 10.6525 14.8557 10.9902 14.3403C11.3547 13.7871 11.5148 13.2471 11.5391 13.1652L11.542 13.1557C11.5414 13.1551 11.5369 13.153 11.5289 13.1492C11.4071 13.0911 10.476 12.6469 10.467 11.4557C10.4581 10.4559 11.2056 9.94935 11.3233 9.86961L11.3233 9.8696C11.3304 9.86476 11.3353 9.86149 11.3374 9.85978C10.8618 9.12625 10.1198 9.04695 9.86297 9.02712ZM13.6824 15.3167V7.5898H16.4649C17.9013 7.5898 18.9049 8.62071 18.9049 10.1274C18.9049 11.6341 17.8822 12.675 16.4268 12.675H14.8334V15.3167H13.6824ZM14.8333 8.60088H16.1603C17.1592 8.60088 17.7299 9.15599 17.7299 10.1324C17.7299 11.1088 17.1592 11.6688 16.1556 11.6688H14.8333V8.60088ZM22.7053 14.3898C22.4009 14.9945 21.7302 15.3761 21.0072 15.3761C19.9371 15.3761 19.1903 14.712 19.1903 13.7108C19.1903 12.7196 19.9133 12.1496 21.2498 12.0653L22.6862 11.9761V11.5499C22.6862 10.9204 22.2915 10.5784 21.5875 10.5784C21.0072 10.5784 20.5839 10.8907 20.4983 11.3665H19.4614C19.4947 10.3653 20.3984 9.63675 21.6208 9.63675C22.9383 9.63675 23.7945 10.3554 23.7945 11.4706V15.3167H22.729V14.3898H22.7053ZM21.3163 14.4592C20.7027 14.4592 20.3127 14.1519 20.3127 13.6811C20.3127 13.1954 20.6885 12.9129 21.4067 12.8683L22.6861 12.784V13.2202C22.6861 13.9438 22.0964 14.4592 21.3163 14.4592ZM27.3284 15.619C26.867 16.9721 26.3391 17.4181 25.2166 17.4181C25.131 17.4181 24.8456 17.4082 24.779 17.3884V16.4616C24.8503 16.4715 25.0263 16.4814 25.1167 16.4814C25.6256 16.4814 25.911 16.2584 26.087 15.6785L26.1916 15.3365L24.2415 9.7111H25.4449L26.8004 14.2759H26.8242L28.1798 9.7111H29.3499L27.3284 15.619Z"
        fill="black"
      />
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" stroke="#F2F4F7" />
    </>
  ),
  klarna: (
    <>
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" fill="#FEB4C7" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.26922 15.3796H3.88574V9H5.26922V15.3796ZM8.72318 9H7.36971C7.36971 10.174 6.85968 11.2516 5.97043 11.9565L5.43421 12.3815L7.51189 15.3799H9.22015L7.3084 12.6209C8.2146 11.666 8.72318 10.3811 8.72318 9ZM10.9298 15.3779H9.6233V9.00122H10.9298V15.3779ZM14.8773 10.9669V11.2491C14.5247 10.9945 14.0992 10.845 13.6403 10.845C12.4257 10.845 11.441 11.887 11.441 13.1725C11.441 14.4579 12.4257 15.5 13.6403 15.5C14.0992 15.5 14.5247 15.3504 14.8773 15.096V15.3779H16.1252V10.9669H14.8773ZM14.8735 13.1725C14.8735 13.7993 14.3672 14.3074 13.7427 14.3074C13.1183 14.3074 12.612 13.7993 12.612 13.1725C12.612 12.5457 13.1183 12.0377 13.7427 12.0377C14.3672 12.0377 14.8735 12.5457 14.8735 13.1725ZM28.0424 11.2491V10.9669H29.2902V15.3779H28.0424V15.096C27.6898 15.3504 27.2643 15.5 26.8053 15.5C25.5907 15.5 24.606 14.4579 24.606 13.1725C24.606 11.887 25.5907 10.845 26.8053 10.845C27.2643 10.845 27.6898 10.9945 28.0424 11.2491ZM26.9078 14.3074C27.5323 14.3074 28.0385 13.7993 28.0385 13.1725C28.0385 12.5457 27.5323 12.0377 26.9078 12.0377C26.2833 12.0377 25.7771 12.5457 25.7771 13.1725C25.7771 13.7993 26.2833 14.3074 26.9078 14.3074ZM29.8318 14.6421C29.8318 14.1844 30.1824 13.8134 30.6149 13.8134C31.0473 13.8134 31.398 14.1844 31.398 14.6421C31.398 15.0998 31.0473 15.4709 30.6149 15.4709C30.1824 15.4709 29.8318 15.0998 29.8318 14.6421ZM22.3885 10.8482C21.89 10.8482 21.4183 11.012 21.1029 11.4639V10.9671H19.8604V15.3779H21.1181V13.0599C21.1181 12.3891 21.5432 12.0607 22.0549 12.0607C22.6033 12.0607 22.9186 12.4074 22.9186 13.0508V15.3779H24.165V12.5728C24.165 11.5463 23.3938 10.8482 22.3885 10.8482ZM18.0556 10.967V11.5415C18.3058 11.1969 18.7719 10.9672 19.2786 10.9672V12.2507L19.2717 12.2505L19.2638 12.2502C18.7701 12.2502 18.0585 12.6237 18.0585 13.3185V15.3779H16.778V10.967H18.0556Z"
        fill="#17120F"
      />
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" stroke="#F2F4F7" />
    </>
  ),
  shopPay: (
    <>
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" fill="#5A31F4" />
      <Path
        d="M19.27 10.9738C19.27 12.4699 18.2211 13.5379 16.7554 13.5379H15.3744C15.3592 13.5379 15.3441 13.5409 15.33 13.5467C15.3159 13.5526 15.3032 13.5612 15.2924 13.572C15.2816 13.5828 15.2731 13.5956 15.2673 13.6097C15.2616 13.6238 15.2586 13.6389 15.2587 13.6542V15.6205C15.2587 15.6512 15.2465 15.6807 15.2248 15.7025C15.2032 15.7243 15.1737 15.7366 15.143 15.7368H14.1767C14.1537 15.7367 14.1313 15.7298 14.1122 15.717C14.0931 15.7042 14.0782 15.6861 14.0694 15.6649C14.0635 15.651 14.0605 15.6361 14.0604 15.6211V8.52541C14.0603 8.51017 14.0632 8.49506 14.069 8.48095C14.0748 8.46684 14.0833 8.45402 14.0941 8.44321C14.1048 8.43241 14.1176 8.42383 14.1317 8.41798C14.1458 8.41213 14.1608 8.40912 14.1761 8.40912H16.7615C18.2211 8.40743 19.27 9.47543 19.27 10.9738ZM18.0649 10.9738C18.0649 10.1136 17.4784 9.48498 16.6829 9.48498H15.3744C15.3592 9.48498 15.3441 9.48799 15.33 9.49384C15.3159 9.4997 15.3032 9.50827 15.2924 9.51908C15.2816 9.52988 15.2731 9.54271 15.2673 9.55682C15.2616 9.57092 15.2586 9.58603 15.2587 9.60128V12.3395C15.2587 12.3702 15.2709 12.3997 15.2926 12.4214C15.3143 12.4431 15.3437 12.4553 15.3744 12.4553H16.6829C17.4784 12.4609 18.0649 11.8317 18.0649 10.9738ZM19.5565 14.3755C19.5465 14.1461 19.594 13.9178 19.6947 13.7113C19.7953 13.5049 19.946 13.3269 20.133 13.1935C20.5099 12.9098 21.0993 12.7631 21.9645 12.7328L22.8858 12.7002V12.4283C22.8858 11.8833 22.5206 11.653 21.9341 11.653C21.3476 11.653 20.9757 11.8609 20.8903 12.2008C20.8833 12.2247 20.8686 12.2456 20.8485 12.2602C20.8283 12.2749 20.8039 12.2824 20.779 12.2817H19.8689C19.8521 12.2821 19.8355 12.2789 19.8201 12.2722C19.8048 12.2655 19.7911 12.2554 19.78 12.2428C19.769 12.2302 19.7608 12.2153 19.7562 12.1992C19.7516 12.1831 19.7505 12.1662 19.7532 12.1496C19.888 11.344 20.5582 10.7316 21.9757 10.7316C23.4836 10.7316 24.028 11.4339 24.028 12.7744V15.6205C24.0277 15.6515 24.0151 15.6812 23.993 15.703C23.9709 15.7248 23.941 15.7369 23.91 15.7368H22.9926C22.9619 15.7367 22.9324 15.7246 22.9105 15.7031C22.8998 15.6923 22.8913 15.6795 22.8855 15.6654C22.8797 15.6514 22.8768 15.6363 22.8768 15.6211V15.4081C22.8772 15.3905 22.8722 15.3733 22.8625 15.3586C22.8528 15.3439 22.8389 15.3325 22.8226 15.3258C22.8063 15.3192 22.7883 15.3177 22.7712 15.3214C22.754 15.3252 22.7383 15.3341 22.7263 15.3469C22.451 15.6463 22.0066 15.8626 21.2948 15.8626C20.2476 15.8626 19.5565 15.3177 19.5565 14.3755ZM22.8858 13.7587V13.5379L21.6925 13.6008C21.0639 13.6328 20.6981 13.8941 20.6981 14.334C20.6981 14.7317 21.0335 14.9519 21.6195 14.9519C22.4156 14.9519 22.8858 14.5222 22.8858 13.7587ZM24.9493 17.8874V17.0627C24.9495 17.0454 24.9535 17.0283 24.961 17.0127C24.9685 16.9971 24.9793 16.9834 24.9927 16.9725C25.0061 16.9615 25.0218 16.9537 25.0385 16.9495C25.0553 16.9452 25.0728 16.9448 25.0898 16.9481C25.2302 16.9745 25.3735 16.9879 25.5168 16.9885C25.7631 17.0005 26.0062 16.9295 26.2074 16.7869C26.4086 16.6443 26.5561 16.4383 26.6263 16.202L26.6859 16.0121C26.6945 15.9866 26.6945 15.9589 26.6859 15.9334L24.7741 11.0232C24.7671 11.0054 24.7647 10.9862 24.7668 10.9672C24.769 10.9483 24.7757 10.9301 24.7864 10.9143C24.7971 10.8985 24.8115 10.8855 24.8284 10.8765C24.8452 10.8675 24.864 10.8627 24.883 10.8625H25.81C25.8337 10.8628 25.8568 10.8701 25.8762 10.8837C25.8957 10.8972 25.9106 10.9163 25.919 10.9384L27.2174 14.4014C27.2255 14.4244 27.2406 14.4443 27.2605 14.4584C27.2804 14.4725 27.3042 14.48 27.3286 14.48C27.353 14.48 27.3768 14.4725 27.3967 14.4584C27.4166 14.4443 27.4317 14.4244 27.4398 14.4014L28.5674 10.9479C28.5752 10.9243 28.5903 10.9038 28.6105 10.8893C28.6306 10.8747 28.6549 10.867 28.6798 10.867H29.6388C29.658 10.8671 29.6769 10.8719 29.6938 10.8809C29.7108 10.8899 29.7254 10.9029 29.7362 10.9187C29.7471 10.9346 29.754 10.9528 29.7563 10.9719C29.7586 10.991 29.7562 11.0103 29.7494 11.0283L27.7045 16.4812C27.2337 17.7486 26.4263 18.0728 25.5376 18.0728C25.369 18.0773 25.2005 18.0571 25.0375 18.0127C25.0105 18.0055 24.9868 17.989 24.9706 17.9661C24.9545 17.9432 24.947 17.9153 24.9493 17.8874ZM7.85069 8.00012C6.63273 7.99144 5.45776 8.44985 4.56748 9.28105C4.5294 9.31591 4.50567 9.3637 4.50089 9.41511C4.49612 9.46651 4.51064 9.51785 4.54163 9.55914L5.09277 10.312C5.11063 10.337 5.13378 10.3579 5.16057 10.373C5.18736 10.3882 5.21714 10.3973 5.24783 10.3997C5.27851 10.4021 5.30936 10.3978 5.33818 10.387C5.36701 10.3762 5.39312 10.3592 5.41468 10.3372C5.73481 10.0172 6.11551 9.76418 6.53454 9.59296C6.95358 9.42174 7.40254 9.33575 7.85518 9.34004C9.74511 9.34004 10.7322 10.7625 10.7322 12.1671C10.7322 13.6941 9.69511 14.7682 8.20463 14.7896C7.05292 14.7896 6.18492 14.0261 6.18492 13.0176C6.18612 12.7629 6.24384 12.5115 6.35391 12.2818C6.46399 12.052 6.62367 11.8495 6.82145 11.689C6.86327 11.654 6.8897 11.6041 6.89505 11.5499C6.90041 11.4957 6.88427 11.4415 6.85011 11.3991L6.27088 10.6676C6.25336 10.6455 6.23159 10.6271 6.20685 10.6135C6.18211 10.5999 6.15491 10.5915 6.12684 10.5886C6.09877 10.5857 6.07041 10.5885 6.04343 10.5967C6.01645 10.605 5.9914 10.6186 5.96975 10.6367C5.61402 10.9233 5.32696 11.2859 5.12961 11.6979C4.93227 12.1099 4.82965 12.5608 4.82928 13.0176C4.82928 14.7536 6.30459 16.1155 8.19452 16.1267H8.2198C10.4637 16.0975 12.0862 14.4356 12.0862 12.1642C12.0862 10.1474 10.6007 8.00012 7.85125 8.00012H7.85069Z"
        fill="white"
      />
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" stroke="#F2F4F7" />
    </>
  ),
  maestro: (
    <>
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" fill="white" />
      <Path
        d="M19.2576 11.7058C19.2576 15.4092 16.2898 18.4115 12.6288 18.4115C8.96782 18.4115 6 15.4092 6 11.7058C6 8.00227 8.96782 5 12.6288 5C16.2898 5 19.2576 8.00227 19.2576 11.7058Z"
        fill="#ED0006"
      />
      <Path
        d="M27.8571 11.7058C27.8571 15.4092 24.8893 18.4115 21.2283 18.4115C17.5673 18.4115 14.5995 15.4092 14.5995 11.7058C14.5995 8.00227 17.5673 5 21.2283 5C24.8893 5 27.8571 8.00227 27.8571 11.7058Z"
        fill="#0099DF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9286 6.60193C18.3539 7.83189 19.2576 9.66205 19.2576 11.7057C19.2576 13.7494 18.3539 15.5796 16.9286 16.8096C15.5034 15.5796 14.5996 13.7494 14.5996 11.7057C14.5996 9.66205 15.5034 7.83189 16.9286 6.60193Z"
        fill="#6C6BBD"
      />
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" stroke="#F2F4F7" />
    </>
  ),
  sofort: (
    <>
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" fill="#F884A1" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.7841 9.43558L20.7239 4.6181C20.837 4.07764 20.5261 3.53303 20.0051 3.37505C19.4235 3.22539 18.8379 3.57461 18.6885 4.16495L17.837 7.16623L17.1657 4.21068C17.1132 3.93629 16.9516 3.69101 16.7214 3.53303C16.4912 3.37505 16.2045 3.32101 15.9339 3.37921C15.4008 3.49562 15.0535 4.13585 15.1868 4.71787L15.5828 8.06573C15.2388 7.71266 14.8369 7.6039 14.3713 7.88161L14.3107 7.92318C13.8863 8.22069 13.8 8.82863 14.0727 9.38237C13.8469 9.39544 13.6263 9.49233 13.4585 9.66926L13.4181 9.71499C13.0264 10.1307 13.1031 10.8333 13.5918 11.3363L13.9887 11.7436C14.0334 13.6263 15.521 14.9449 17.2751 14.9449C17.2958 14.9449 17.3159 14.942 17.3348 14.9365C19.7108 14.912 20.755 13.4553 20.9339 11.2449C20.9905 10.5464 20.8653 10.0684 20.6028 9.7815C20.4574 9.62352 20.3039 9.54869 20.1868 9.53206L19.7841 9.43558ZM19.3588 9.33369L20.2959 4.52663C20.3605 4.21068 20.1787 3.89888 19.888 3.80742C19.5487 3.72011 19.2014 3.93214 19.1085 4.28551L18.0222 8.11857C17.9898 8.23913 17.8687 8.30565 17.7516 8.27239C17.6586 8.24598 17.5987 8.16192 17.5941 8.06806L16.7376 4.30214C16.7053 4.14 16.6124 3.99865 16.4791 3.90719C16.3458 3.81573 16.1803 3.78663 16.0228 3.81989C15.7401 3.88225 15.5301 4.27304 15.6149 4.62225L15.6189 4.6472L16.1084 8.8012L16.4163 9.27424C16.5508 9.08209 16.7447 8.96236 16.9762 8.90846C17.17 8.86689 17.3679 8.87104 17.5577 8.9043C17.605 8.91126 17.641 8.92114 17.661 8.92661C17.6649 8.92767 17.6682 8.92857 17.6708 8.92925L19.3588 9.33369ZM16.2227 9.7847L15.7407 9.04409C15.7243 9.0262 15.7107 9.00552 15.7008 8.98283L15.4738 8.63408C15.1951 8.21419 14.9245 8.06869 14.6015 8.25992L14.557 8.29318C14.3066 8.47195 14.2743 8.896 14.5328 9.30341L15.4859 10.7626C15.6555 11.0204 15.9948 11.0869 16.2451 10.9123L16.2936 10.8832C16.3606 10.8381 16.416 10.7761 16.4558 10.7048C16.2164 10.4525 16.1572 10.1405 16.2227 9.7847ZM16.8967 10.5116C16.8717 10.4724 16.8346 10.4411 16.7887 10.4237C16.6066 10.2434 16.5994 10.0182 16.6854 9.7233C16.75 9.50712 16.8752 9.39487 17.0731 9.34914C17.2023 9.32004 17.3437 9.32419 17.481 9.34914C17.4964 9.35231 17.5101 9.35488 17.5217 9.35708C17.5406 9.36063 17.5543 9.3632 17.5617 9.36577L20.106 9.97689L20.1545 9.99352C20.1949 10.0102 20.2393 10.0434 20.2837 10.0891C20.4533 10.2762 20.5503 10.6296 20.5018 11.2116C20.3362 13.2487 19.4154 14.5125 17.2265 14.4918C17.2143 14.4918 17.2022 14.4928 17.1905 14.4948C15.8638 14.4583 14.7416 13.5666 14.4809 12.2486L14.8074 12.5835C15.1991 12.9702 15.817 12.9619 16.1966 12.5628L16.241 12.517C16.5423 12.1934 16.594 11.7167 16.3982 11.3396C16.4271 11.3235 16.4556 11.3058 16.4834 11.2865L16.5319 11.2532C16.6416 11.1763 16.7338 11.0771 16.8046 10.9629C16.952 11.042 17.1293 11.1114 17.3396 11.17L17.9494 11.3156C17.4971 11.5775 17.2144 12.0639 17.1821 12.808C17.174 12.9328 17.2669 13.0367 17.3881 13.045C17.5092 13.0492 17.6102 12.9577 17.6183 12.833C17.6506 12.1595 17.905 11.7978 18.3129 11.6398C18.531 11.5567 18.7693 11.5401 18.9793 11.5608L19.0318 11.5692C19.3104 11.6232 19.3993 11.195 19.1206 11.1285L17.4446 10.7418C17.2027 10.6738 17.024 10.5983 16.8967 10.5116ZM13.7735 9.98522C13.9411 9.80464 14.2141 9.78287 14.4108 9.92365L15.1224 11.0162C15.3176 11.3097 15.6337 11.4653 15.9533 11.4595C16.1276 11.6772 16.1183 11.9993 15.922 12.2052L15.8816 12.251C15.6716 12.4713 15.3283 12.4755 15.1143 12.2593L13.9027 11.0245C13.5675 10.6795 13.5231 10.2554 13.7331 10.0309L13.7735 9.98522ZM12.1581 19.1646C12.1581 19.8589 11.6331 20.3328 10.9465 20.3328C10.4659 20.3328 10.054 20.1083 9.79956 19.7508L10.2721 19.2644C10.4134 19.4515 10.6477 19.6552 10.9546 19.6552C11.2413 19.6552 11.4392 19.4806 11.4392 19.1979C11.4392 18.8985 11.205 18.8237 10.8375 18.7156C10.163 18.5119 9.88841 18.1502 9.88841 17.6804C9.88841 17.0901 10.3246 16.5829 11.0111 16.5829C11.4433 16.5829 11.8431 16.7908 12.0208 17.194L11.4513 17.564C11.3423 17.3811 11.1929 17.2605 10.9909 17.2605C10.7527 17.2605 10.6032 17.4268 10.6032 17.6389C10.6032 17.8925 10.8213 17.9714 11.1686 18.0754C11.7138 18.2417 12.1581 18.5202 12.1581 19.1646ZM12.4043 19.0066C12.4043 19.7342 12.9939 20.3328 13.7209 20.3328C14.4478 20.3328 15.0374 19.7342 15.0374 19.0066C15.0374 18.2791 14.4478 17.6804 13.7209 17.6804C12.9939 17.6804 12.4043 18.2791 12.4043 19.0066ZM13.7207 19.6676C14.072 19.6676 14.3507 19.3808 14.3507 19.0066C14.3507 18.6325 14.072 18.3456 13.7207 18.3456C13.3653 18.3456 13.0907 18.6325 13.0907 19.0066C13.0907 19.3849 13.3693 19.6676 13.7207 19.6676ZM16.7376 16.6286V17.2938C16.354 17.2772 16.0753 17.4767 16.0753 17.9174V18.1876C16.2288 18.0213 16.4469 17.9382 16.7174 17.9382V18.6117C16.3378 18.62 16.0753 18.8694 16.0753 19.2187V20.2663H15.3888V17.8758C15.3888 17.2024 15.8007 16.6286 16.6367 16.6286H16.7376ZM18.236 20.3328C17.509 20.3328 16.9194 19.7342 16.9194 19.0066C16.9194 18.2791 17.509 17.6804 18.236 17.6804C18.9629 17.6804 19.5525 18.2791 19.5525 19.0066C19.5525 19.7342 18.9629 20.3328 18.236 20.3328ZM18.8659 19.0066C18.8659 19.3808 18.5913 19.6676 18.2359 19.6676C17.8846 19.6676 17.6059 19.3849 17.6059 19.0066C17.6059 18.6325 17.8846 18.3456 18.2359 18.3456C18.5873 18.3456 18.8659 18.6325 18.8659 19.0066ZM20.5904 18.038V17.7511H19.924V20.2663H20.6106V19.1189C20.6106 18.7031 20.8489 18.4703 21.2608 18.4703V17.7137C20.9498 17.7012 20.7277 17.8093 20.5904 18.038ZM22.3432 18.3664V18.9817C22.3432 19.4224 22.6219 19.6178 23.0055 19.6053V20.2705H22.9045C22.0645 20.2705 21.6566 19.6968 21.6566 19.0233V16.9446H22.3432V17.3395C22.3432 17.6804 22.6138 17.9382 22.9853 17.9465V18.6158C22.7107 18.6158 22.4967 18.5327 22.3432 18.3664ZM23.8253 20.3079C24.0757 20.3079 24.2857 20.0959 24.2857 19.834C24.2857 19.5762 24.0798 19.36 23.8253 19.36C23.5709 19.36 23.3649 19.572 23.3649 19.834C23.3649 20.0959 23.5709 20.3079 23.8253 20.3079Z"
        fill="white"
      />
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" stroke="#F2F4F7" />
    </>
  ),
  stripe: (
    <>
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" fill="white" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.2682 8.14192L16.541 8.52349V7.08202L18.2682 6.70752V8.14192ZM21.8599 8.94038C21.1856 8.94038 20.7521 9.26542 20.5113 9.49153L20.4218 9.05344H18.908V17.2924L20.6282 16.9179L20.6351 14.9183C20.8828 15.102 21.2475 15.3634 21.853 15.3634C23.0847 15.3634 24.2063 14.3459 24.2063 12.106C24.1995 10.0568 23.0641 8.94038 21.8599 8.94038ZM21.4471 13.8089C21.0411 13.8089 20.8002 13.6605 20.6351 13.4768L20.6282 10.8553C20.8071 10.6504 21.0548 10.509 21.4471 10.509C22.0732 10.509 22.5067 11.2298 22.5067 12.1554C22.5067 13.1023 22.0801 13.8089 21.4471 13.8089ZM29.6286 12.1766C29.6286 10.3677 28.7754 8.94038 27.1446 8.94038C25.5069 8.94038 24.5161 10.3677 24.5161 12.1625C24.5161 14.2894 25.6858 15.3634 27.3648 15.3634C28.1836 15.3634 28.8029 15.1726 29.2708 14.9041V13.4909C28.8029 13.7312 28.2662 13.8795 27.585 13.8795C26.9175 13.8795 26.3257 13.6393 26.2501 12.8055H29.6148C29.6148 12.7666 29.6173 12.6782 29.6202 12.5763L29.6202 12.5761C29.624 12.4377 29.6286 12.2743 29.6286 12.1766ZM26.2294 11.5054C26.2294 10.7069 26.7042 10.3748 27.1377 10.3748C27.5574 10.3748 28.0047 10.7069 28.0047 11.5054H26.2294ZM16.5409 9.06052H18.2681V15.2433H16.5409V9.06052ZM14.58 9.06051L14.6901 9.5834C15.0961 8.82026 15.9012 8.97572 16.1214 9.06051V10.6857C15.908 10.608 15.22 10.509 14.814 11.0531V15.2433H13.0937V9.06051H14.58ZM11.2495 7.52717L9.57056 7.8946L9.56368 13.5545C9.56368 14.6003 10.3275 15.3705 11.3459 15.3705C11.9101 15.3705 12.323 15.2645 12.55 15.1373V13.7029C12.3298 13.7947 11.2426 14.1198 11.2426 13.074V10.5656H12.55V9.0605H11.2426L11.2495 7.52717ZM7.18295 10.4737C6.81826 10.4737 6.59807 10.5797 6.59807 10.8553C6.59807 11.1562 6.97702 11.2885 7.44715 11.4527C8.21358 11.7204 9.22234 12.0728 9.2266 13.3779C9.2266 14.6427 8.24262 15.3705 6.81138 15.3705C6.21961 15.3705 5.5728 15.2504 4.93287 14.9677V13.286C5.51087 13.611 6.24026 13.8513 6.81138 13.8513C7.19671 13.8513 7.47195 13.7453 7.47195 13.4203C7.47195 13.087 7.06116 12.9346 6.56522 12.7507C5.80994 12.4706 4.85718 12.1173 4.85718 10.9401C4.85718 9.6894 5.78611 8.9404 7.18295 8.9404C7.75407 8.9404 8.31831 9.03225 8.88944 9.26543V10.926C8.36648 10.6362 7.70591 10.4737 7.18295 10.4737Z"
        fill="#6461FC"
      />
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" stroke="#F2F4F7" />
    </>
  ),
  mastercard: (
    <>
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" fill="white" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.179 16.8295C15.9949 17.8275 14.459 18.43 12.7807 18.43C9.03582 18.43 6 15.4303 6 11.73C6 8.02972 9.03582 5.03003 12.7807 5.03003C14.459 5.03003 15.9949 5.63253 17.179 6.63057C18.363 5.63253 19.8989 5.03003 21.5773 5.03003C25.3221 5.03003 28.358 8.02972 28.358 11.73C28.358 15.4303 25.3221 18.43 21.5773 18.43C19.8989 18.43 18.363 17.8275 17.179 16.8295Z"
        fill="#ED0006"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.179 16.8295C18.6369 15.6006 19.5614 13.772 19.5614 11.73C19.5614 9.68807 18.6369 7.85947 17.179 6.63057C18.363 5.63253 19.8989 5.03003 21.5772 5.03003C25.3221 5.03003 28.3579 8.02972 28.3579 11.73C28.3579 15.4303 25.3221 18.43 21.5772 18.43C19.8989 18.43 18.363 17.8275 17.179 16.8295Z"
        fill="#F9A000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.179 16.8295C18.6369 15.6006 19.5614 13.772 19.5614 11.7301C19.5614 9.68811 18.6369 7.85952 17.179 6.63062C15.7211 7.85952 14.7966 9.68811 14.7966 11.7301C14.7966 13.772 15.7211 15.6006 17.179 16.8295Z"
        fill="#FF5E00"
      />
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" stroke="#F2F4F7" />
    </>
  ),
  paypal: (
    <>
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" fill="white" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6143 18.4483L14.835 16.9992L14.3433 16.9873H11.9954L13.6271 6.2937C13.6322 6.26132 13.6486 6.23126 13.6726 6.20987C13.6967 6.18849 13.7275 6.17676 13.7596 6.17676H17.7186C19.033 6.17676 19.94 6.45939 20.4135 7.01734C20.6356 7.27908 20.7769 7.55267 20.8454 7.85364C20.9172 8.16951 20.9183 8.54685 20.8484 9.00715L20.8433 9.04063V9.33561L21.0653 9.46563C21.2522 9.56815 21.4008 9.68546 21.5148 9.81975C21.7047 10.0436 21.8275 10.3281 21.8794 10.6652C21.9331 11.012 21.9153 11.4248 21.8275 11.892C21.7262 12.4295 21.5624 12.8976 21.3412 13.2805C21.1379 13.6334 20.8787 13.9262 20.571 14.153C20.2772 14.3686 19.9282 14.5322 19.5336 14.6369C19.1511 14.7398 18.7151 14.7917 18.2369 14.7917H17.9288C17.7086 14.7917 17.4946 14.8737 17.3266 15.0207C17.1581 15.1708 17.0467 15.3758 17.0126 15.6L16.9893 15.7305L16.5993 18.2848L16.5816 18.3785C16.5769 18.4082 16.5689 18.423 16.557 18.433C16.5465 18.4422 16.5314 18.4483 16.5166 18.4483H14.6143Z"
        fill="#28356A"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.2757 9.07458C21.264 9.15267 21.2504 9.23246 21.2353 9.31445C20.7132 12.0851 18.9269 13.0422 16.6457 13.0422H15.4841C15.2051 13.0422 14.97 13.2516 14.9266 13.536L14.1634 18.5393C14.1352 18.7261 14.2745 18.8944 14.4568 18.8944H16.5169C16.7608 18.8944 16.9681 18.7112 17.0065 18.4626L17.0267 18.3544L17.4146 15.8102L17.4396 15.6707C17.4775 15.4211 17.6852 15.2378 17.9291 15.2378H18.2372C20.2332 15.2378 21.7958 14.4003 22.2525 11.9765C22.4432 10.964 22.3445 10.1185 21.8396 9.52389C21.6869 9.34464 21.4974 9.1958 21.2757 9.07458Z"
        fill="#298FC2"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7293 8.84956C20.6495 8.82549 20.5672 8.80374 20.4828 8.78407C20.3979 8.76488 20.311 8.7479 20.2215 8.73299C19.9084 8.68069 19.5652 8.65588 19.1976 8.65588H16.0946C16.0181 8.65588 15.9455 8.67372 15.8806 8.70598C15.7374 8.7771 15.6311 8.91714 15.6054 9.08857L14.9452 13.4101L14.9263 13.5361C14.9697 13.2516 15.2048 13.0423 15.4838 13.0423H16.6454C18.9266 13.0423 20.7129 12.0847 21.235 9.31451C21.2506 9.23252 21.2637 9.15273 21.2754 9.07464C21.1433 9.00218 21.0003 8.94023 20.8462 8.88744C20.8082 8.87437 20.7689 8.86178 20.7293 8.84956Z"
        fill="#22284F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.6055 9.08862C15.6313 8.91718 15.7376 8.77715 15.8807 8.70652C15.9461 8.67414 16.0182 8.6563 16.0947 8.6563H19.1978C19.5653 8.6563 19.9085 8.68123 20.2217 8.73353C20.3112 8.74831 20.3981 8.76542 20.483 8.7846C20.5674 8.80415 20.6497 8.82603 20.7295 8.84998C20.7691 8.8622 20.8083 8.8749 20.8468 8.88749C21.0008 8.94028 21.144 9.00272 21.276 9.07469C21.4314 8.05082 21.2747 7.3537 20.7392 6.72245C20.1486 6.0274 19.083 5.72998 17.7192 5.72998H13.7601C13.4816 5.72998 13.244 5.9393 13.2009 6.22426L11.5519 17.0279C11.5194 17.2416 11.6789 17.4344 11.8875 17.4344H14.3316L15.6055 9.08862Z"
        fill="#28356A"
      />
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" stroke="#F2F4F7" />
    </>
  ),
};

interface IPaymentMethodIconProps extends SvgProps {
  variant?: keyof typeof paymentMethodVariants;
}

const PaymentMethodIcon: React.FC<IPaymentMethodIconProps> = ({
  variant = 'visa',
  ...rest
}) => (
  <Svg fill="none" {...rest}>
    {paymentMethodVariants[variant]}
  </Svg>
);

PaymentMethodIcon.defaultProps = {
  width: 34,
  height: 24,
};

export default PaymentMethodIcon;

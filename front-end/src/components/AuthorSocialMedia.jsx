import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Link from 'next/link';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(0, 2),
      display: 'flex',
      alignItems: 'center',
    },
  }),
);
const AuthorSocialMedia = ({ className, social }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      {social.linkedin && (
        <Link href={social.github} passHref={true}>
          <SvgIcon color="primary" size="small">
            <svg
              fill="none"
              height="24"
              viewBox="0 0 32 32"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                fill="#755BBE"
              />
              <path
                d="M11.546 9.8818C11.5224 8.8136 10.7586 8 9.51815 8C8.27774 8 7.4668 8.8136 7.4668 9.8818C7.4668 10.9279 8.25377 11.7649 9.47108 11.7649H9.49426C10.7586 11.7649 11.546 10.9279 11.546 9.8818Z"
                fill="white"
              />
              <path
                d="M11.3072 13.252H7.68121V24.1464H11.3072V13.252Z"
                fill="white"
              />
              <path
                d="M20.2089 12.9961C22.5949 12.9961 24.3837 14.5535 24.3837 17.8998L24.3836 24.1464H20.7578V18.3178C20.7578 16.8538 20.2331 15.8548 18.9205 15.8548C17.9187 15.8548 17.3221 16.5283 17.06 17.1788C16.9641 17.4119 16.9406 17.7367 16.9406 18.0623V24.1467H13.3142C13.3142 24.1467 13.362 14.2745 13.3142 13.2522H16.9406V14.7953C17.4218 14.0535 18.2838 12.9961 20.2089 12.9961Z"
                fill="white"
              />
            </svg>
          </SvgIcon>
        </Link>
      )}
      {social.github && (
        <Link href={social.github} passHref={true}>
          <IconButton color="primary" size="small">
            <SvgIcon color="primary" size="small">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 32 32"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" fill="#755BBE" r="16" />
                <path
                  d="M16.0001 4C9.3735 4 4 9.50847 4 16.3038C4 21.74 7.43839 26.3519 12.2064 27.9789C12.8061 28.0927 13.0263 27.7119 13.0263 27.387C13.0263 27.0936 13.0152 26.1244 13.01 25.0963C9.67157 25.8405 8.96712 23.6446 8.96712 23.6446C8.42125 22.2224 7.63473 21.8443 7.63473 21.8443C6.54596 21.0806 7.7168 21.0963 7.7168 21.0963C8.92181 21.1831 9.55632 22.3642 9.55632 22.3642C10.6266 24.2452 12.3636 23.7014 13.0484 23.387C13.1561 22.5918 13.4671 22.049 13.8102 21.7418C11.1449 21.4307 8.34295 20.3757 8.34295 15.6612C8.34295 14.3179 8.81172 13.2203 9.57937 12.3587C9.45477 12.0488 9.04402 10.7974 9.69562 9.10261C9.69562 9.10261 10.7033 8.77193 12.9965 10.3638C13.9537 10.0912 14.9803 9.95447 16.0001 9.94979C17.0199 9.95447 18.0473 10.0912 19.0063 10.3638C21.2967 8.77193 22.303 9.10261 22.303 9.10261C22.9562 10.7974 22.5452 12.0488 22.4206 12.3587C23.1901 13.2203 23.6557 14.3179 23.6557 15.6612C23.6557 20.3869 20.8484 21.4274 18.1762 21.732C18.6067 22.1138 18.9902 22.8626 18.9902 24.0105C18.9902 25.6568 18.9763 26.9817 18.9763 27.387C18.9763 27.7144 19.1923 28.098 19.8006 27.9772C24.566 26.3485 28 21.7381 28 16.3038C28 9.50847 22.6273 4 16.0001 4Z"
                  fill="white"
                />
                <path
                  d="M8.58043 21.5812C8.55405 21.6417 8.46043 21.6598 8.37514 21.6183C8.28827 21.5785 8.23947 21.496 8.26764 21.4353C8.29342 21.373 8.38724 21.3556 8.47392 21.3974C8.56099 21.4371 8.61058 21.5204 8.58043 21.5812Z"
                  fill="white"
                />
                <path
                  d="M9.06559 22.1315C9.00846 22.1853 8.89679 22.1603 8.82103 22.0752C8.74268 21.9903 8.728 21.8767 8.78592 21.822C8.84483 21.7682 8.95312 21.7934 9.03167 21.8783C9.11002 21.9642 9.12529 22.077 9.06559 22.1315Z"
                  fill="white"
                />
                <path
                  d="M9.53784 22.8331C9.46445 22.885 9.34445 22.8364 9.27027 22.728C9.19688 22.6197 9.19688 22.4898 9.27186 22.4377C9.34624 22.3857 9.46445 22.4325 9.53963 22.54C9.61282 22.6502 9.61282 22.7801 9.53784 22.8331Z"
                  fill="white"
                />
                <path
                  d="M10.1848 23.511C10.1192 23.5846 9.97936 23.5648 9.87701 23.4644C9.77229 23.3661 9.74313 23.2267 9.80898 23.1531C9.87543 23.0793 10.0161 23.1 10.1192 23.1997C10.2231 23.2977 10.2549 23.4381 10.1848 23.511Z"
                  fill="white"
                />
                <path
                  d="M11.0774 23.9046C11.0485 24 10.9138 24.0433 10.7781 24.0028C10.6426 23.961 10.554 23.8493 10.5813 23.7528C10.6095 23.6568 10.7448 23.6116 10.8814 23.655C11.0167 23.6966 11.1056 23.8075 11.0774 23.9046Z"
                  fill="white"
                />
                <path
                  d="M12.0576 23.9776C12.061 24.0781 11.946 24.1614 11.8036 24.1632C11.6604 24.1664 11.5445 24.0851 11.5429 23.9863C11.5429 23.8848 11.6554 23.8023 11.7986 23.7999C11.941 23.797 12.0576 23.8777 12.0576 23.9776Z"
                  fill="white"
                />
                <path
                  d="M12.9699 23.8196C12.9869 23.9177 12.8879 24.0183 12.7465 24.0452C12.6075 24.071 12.4787 24.0105 12.4611 23.9132C12.4438 23.8128 12.5446 23.7121 12.6834 23.6861C12.8251 23.6611 12.9518 23.72 12.9699 23.8196Z"
                  fill="white"
                />
              </svg>
            </SvgIcon>
          </IconButton>
        </Link>
      )}
    </div>
  );
};
export default AuthorSocialMedia;

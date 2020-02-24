import React from 'react';
import ImageGallery from 'react-image-gallery';
import {makeStyles} from "@material-ui/core/styles";
import Link from 'next/link';

const styles = makeStyles((theme) => ({
  media: {
    objectFit: 'contain',
    width: '100%',
    height: 230,
  },
}));



function MyGallery() {
  const classes = styles();
  const images = [
    {
      original: "/static/images/slider1.png",
      renderItem: () => (
        <Link href="/promos/headsnshoulders" key={1}>
          <img src="/static/images/slider1.png" className={classes.media} />
        </Link>
      )
    },
    {
      original: "/static/images/slider2.png",
      renderItem: () => (
        <a key={2} href="https://www.facebook.com/notes/%E6%83%A0%E5%BA%B7%E8%B6%85%E7%B4%9A%E5%B8%82%E5%A0%B4-wellcome-supermarket/%E6%83%A0%E5%BA%B7%E8%B3%9E%E8%B3%9E%E4%BD%A0-%E8%AA%B0%E8%B3%9E%E7%99%BB%E4%B8%8A%E6%9C%80%E5%96%9C%E6%84%9B%E8%A7%92%E8%89%B2%E5%AF%B6%E5%BA%A7-%E9%81%8A%E6%88%B2%E8%A9%B3%E6%83%85%E5%8F%8A%E5%8F%83%E5%8A%A0%E6%96%B9%E6%B3%95%E6%B4%BB%E5%8B%95%E6%A2%9D%E6%AC%BE%E5%8F%8A%E7%B4%B0%E5%89%87/10158807754298677/?__xts__[0]=68.ARBXjP_RENrhSw5JtOMQC4kJljQ-CZhRqIAqWImjDBcUn_p8ZBLDZppqKH8MsSPaNviTmBSzbCXpANokXZ6G35OHfN4cNaDPStObVw7N4uF3gzhiSwwzF0yb2k77SoPrIBGZT6WSA2l2ifgTwTbrQeutDH9eakJF2s_04ffQCiCpElO4eI0EvsJVBcY0EA8VNSMfWJPb4Zl__QwlX1RZ6Jh_dQBktUwxXWjSLmN8d1yEdgTn47i7BrUOuZQUZ-cWNBUAFCOmRUDXMe9VFSZuTxHuGwS0ypgW6FQ_UlC4yOsM75jYF7txAe2GKKmz_BiYxSvasXECArsUOcDtSls&__tn__=-R">
          <img src="/static/images/slider2.png" className={classes.media} />
        </a>
      )
    },
    {
      original: "/static/images/slider3.png",
      renderItem: () => (
        <a href="https://www.facebook.com/watsonshongkong/"  key={3}>
          <img src="/static/images/slider3.png" className={classes.media} />
        </a>
      )
    },
    {
      original: "/static/images/slider4.png",
      renderItem: () => (
        <a key={4} href="https://www.facebook.com/wellcome.supermarket/photos/a.455443234456/10157232217574457/?type=3&theater">
          <img src="/static/images/slider4.png" className={classes.media} />
        </a>
      )
    },
  ];

  return (
    <ImageGallery
      items={images}
      showNav={false}
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
      showBullets={true}
    />
  );
}

export default MyGallery;

import React from 'react';
import Carousel from "../src/components/Carousel";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
const promos = [
  {
    title: "Today Special",
    sub: "Power Brush B1G1",
    img: "/static/images/hp1.png",
    src: "/promos/oralb"
  },
  {
    title: "Limited Offer",
    sub: "Mannings Crazy!",
    img: "/static/images/hp2.png",
    src: "/promos/mannings",
  },
  {
    title: "Only For You",
    sub: "Wat Member only",
    img: "/static/images/hp3.png",
    src: "/promos/watsons",
  },
  {
    title: "Festive Hot",
    sub: "After Mooncake?",
    img: "/static/images/hp4.png",
    link: "https://www.facebook.com/wellcome.supermarket/photos/a.455443234456/10157142379674457/?type=3&theater"
  },
  {
    title: "Summer Special",
    sub: "Hokkaido Snacks",
    img: "/static/images/hp5.png",
    src: "/promos/hokkaido",
  },
  {
    title: "Big Clearance",
    sub: "Last 3 days",
    img: "/static/images/hp6.png",
    link: "https://www.facebook.com/parknshophk/photos/a.1449666655268995/2499945073574476/?type=3&theater",
  },
]

const styles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '100%',
  },
  special: {
    padding: theme.spacing(1)
  },
  specialGrid: {
    textDecoration: 'none',
  },
  specialContent: {
    textDecoration: 'none',
  },
  specialHeader: {
    textAlign: 'center',
  }
}));

const PromoCard = ({ promo, classes }) => {
  return (
    <Card
      variant="outlined"
    >
      <CardMedia
        className={classes.media}
        image={promo.img}
        title={promo.title}
      />
      <CardContent className={classes.specialContent}>
        <Typography>
          {promo.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {promo.sub}
        </Typography>
      </CardContent>
    </Card>
  )
};
const LinkCard = React.forwardRef(({ promo, classes, onClick, href }, ref) => (
  <a
    onClick={onClick}
    href={href}
    ref={ref}
    className={classes.specialGrid}
  >
    <PromoCard
      promo={promo}
      classes={classes}
    />
  </a>
));

const HomePage = () => {
  const classes = styles();

  return (
    <Grid container align-content-xs-center={'true'}>
      <Carousel />
      <Grid container justify="space-around">
        {
          promos.map((promo, i) => (
            <Grid item xs={6} className={classes.special} key={i}>
              {promo.src ? (
                <Link href={promo.src} passHref>
                  <LinkCard
                    promo={promo}
                    classes={classes}
                  />
                </Link>) : (
                <a href={promo.link} className={classes.specialGrid}>
                  <PromoCard
                    promo={promo}
                    classes={classes}
                  />
                </a>
              )}
            </Grid>
          ))
        }
      </Grid>

    </Grid>
  );
}


export default HomePage;

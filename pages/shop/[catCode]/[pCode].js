import React from 'react'
import { useRouter } from 'next/router'
import { Button, Box, Divider, Grid, Breadcrumbs, Card, CardMedia, CardContent, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { grey, blue } from '@material-ui/core/colors';
import FakeData, { brandName, logo } from '../../../src/utils/fake'

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const Breadcrumb = ({ cat1, cat2, cat3 }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        {cat1}
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        {cat2}
      </Link>
      <Link
        color="textPrimary"
        href="/components/breadcrumbs/"
        onClick={handleClick}
        aria-current="page"
      >
        {cat3}
      </Link>
    </Breadcrumbs>
  );
}

const useStyles = makeStyles(theme => ({
  breadcrumb: {
    padding: theme.spacing(1)
  },
  container: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  card: {
    padding: theme.spacing(1)
  },
  cardImage: {
    width: '120px',
    margin: '0 auto',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  brandName: {
    fontSize: '14px',
    color: grey[500]
  },
  addButton: {
    borderRadius: '30px',
    backgroundColor: blue[300]
  },
  priceCard: {
    padding: theme.spacing(1),
  }
}));

const PriceCard = ({ brand, date, price }) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.priceCard}>
      <Box display="flex">
        <Box width="50px" h="50px" mr="4px">
          <CardMedia
            style={{ height: '100%' }}
            component="img"
            alt="logo"
            image={logo(brand)}
            title="logo"
          />
        </Box>
        <Box display="flex" flexDirection="column" flex={1}>
          <Box fontSize="14px" fontWeight="fontWeightBold" component='span'>
            {brandName(brand)}
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="flex-end">
            <Box fontSize="10px" component='span' color={grey[500]}>
              {date}
            </Box>
            <Box fontSize="20px" component='span' color={blue[500]}>
              ${price}
            </Box>
          </Box>
        </Box>
      </Box>

    </Paper>
  )
}

const Product = () => {
  const classes = useStyles();
  const { query: { catCode, pCode } } = useRouter()
  const product = FakeData.find(d => d.code === catCode).data.find(p => p.code === pCode)
  const { cat1, cat2, cat3 } = product
  const cat1Name = FakeData.find(d => d.code === cat1).name.replace(/\//g, '&')
  const cat2Name = FakeData.find(d => d.code === cat1).subs.find(d => d.code === cat2).name.replace(/\//g, '&')
  const cat3Name = FakeData.find(d => d.code === cat1).subs.find(d => d.code === cat2).subs.find(d => d.code === cat3).name.replace(/\//g, '&')

  return (
    <Grid container align-content-xs-space-around={'true'} className={classes.container}>
      <Grid xs={12} item className={classes.breadcrumb}>
        <Breadcrumb cat1={cat1Name} cat2={cat2Name} cat3={cat3Name} />
      </Grid>
      <Grid xs={12} item>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardImage}
            component="img"
            alt={product.nameEN}
            image={product.imgUrl}
            title={product.nameEN}
          />
          <CardContent>
            <Typography className={classes.title} gutterBottom >
              {product.nameEN}
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" flexDirection="column">
                <Typography className={classes.brandName} gutterBottom >
                  {product.brandEN}
                </Typography>
              </Box>
              <Button className={classes.addButton} variant="contained" color="primary">Add To Cart</Button>
            </Box>
            <Box my={1}>
              <Divider />

            </Box>
            <Typography className={classes.title} gutterBottom >
              Latest Price
            </Typography>
            {Object.entries(product.data).map(([key, value]) => {
              return <Box key={key} mb={1}>
                <PriceCard brand={key} date={value.PriceDateShort} price={value.Price} />
              </Box>
            })}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Product
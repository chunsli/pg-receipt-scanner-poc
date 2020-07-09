import React from 'react'
import {Grid, Button, SvgIcon, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import { useRouter } from 'next/router'
import SearchBar from '../../src/components/SearchBar';
import { CatProductCard } from '../../src/components/CatProductCard';
import Link from 'next/link'
import FakeData from '../../src/utils/fake'


function FilterIcon(props) {
  return (
    <SvgIcon {...props}>
      <g><path d="M0,0h24 M24,24H0" fill="none"/><path d="M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6c0,0,3.72-4.8,5.74-7.39 C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"/><path d="M0,0h24v24H0V0z" fill="none"/></g>
    </SvgIcon>
  );
}

const cheapestPrice = (data) => Object.entries(data).reduce((cur, [key, value]) => {
  if (value.Price < cur) {
    return value.Price
  } else {
    return cur
  }
}, Number.POSITIVE_INFINITY)

const useStyles = makeStyles(theme =>  ({
  catImg: {
    objectFit: 'cover',
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
  catBtn: {
    padding: theme.spacing(1),
  },
  search: {
    padding: theme.spacing(1)
  },
  action: {
    marginBottom: theme.spacing(1)
  },
  title: {
    textDecoration: 'none',
    flexGrow: 1,
  }
}));

const Category = () => {
  const classes = useStyles();
  const {query: {catCode}} = useRouter()
  const cat = FakeData.find(d => d.code === catCode)

  return (
    <Grid container align-content-xs-space-around={'true'}>
      <Grid xs={12} item className={classes.search}>
        <SearchBar />
      </Grid>
      <Grid container direction={'row'} align-content-xs-between={'true'}	className={classes.action}>
        <Grid xs={6} item >
          <Button aria-label="sort" style={{color: '#64b5f6'}} fullWidth>
            <SortIcon/> Sort
          </Button>
        </Grid>
      
        <Grid xs={6} item >
          <Button aria-label="filter" style={{color: '#64b5f6'}} fullWidth>
            <FilterIcon/> Filter
          </Button>
        </Grid>
      </Grid>
      <Box display="flex" flexDirection="column" px={2} width="100%">
        {cat.data.filter(item => {
          const cheapestP = cheapestPrice(item.data)
          return cheapestP >0
        }).map(item => {
          return (
            <Link key={item.code} href={`/shop/${catCode}/${item.code}`}>
              <Box width="100%" mb={2}>
                <CatProductCard {...item} />
              </Box>
            </Link>
          )
        })}
      </Box>

    </Grid>
  );
}

export default Category
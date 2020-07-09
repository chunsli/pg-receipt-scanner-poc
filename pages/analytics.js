import React, { useState } from 'react'
import { Box, Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  PieSeries
} from '@devexpress/dx-react-chart-material-ui';
import { Animation, ValueScale, SelectionState, EventTracker } from '@devexpress/dx-react-chart';
import { grey, blue, orange } from '@material-ui/core/colors';
import {
  LocalHospital as LocalHospitalIcon,
  Flight as FlightIcon,
  ShoppingCart as ShoppingCartIcon,
  Restaurant as RestaurantIcon,
  LocalTaxi as LocalTaxiIcon
} from '@material-ui/icons';

const Icon = {
  Travel: <FlightIcon />,
  Shop: <ShoppingCartIcon />,
  Food: <RestaurantIcon />,
  Insurance: <LocalHospitalIcon />,
  Transport: <LocalTaxiIcon />,
  Restaurant: <RestaurantIcon />,
}

const thousandFormat = value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  space: {
    padding: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2)
  }
}));

const SpendingItem = ({ category, times, total }) => {
  return (
    <Box display="flex" alignItems="center" py={1}>
      <Grid item>
        <Box mx="16px" borderRadius="100%" display="flex" width="40px" height="40px" alignItems="center" justifyContent="center" bgcolor={grey[400]}>
          {Icon[category]}
        </Box>
      </Grid>
      <Grid container direction="column">
        <Typography>
          <Box fontSize="14px" fontWeight="bold">{category}</Box>
        </Typography>
        <Typography>
          <Box fontSize="10px" color={grey[700]}>{times} Transactions</Box>
        </Typography>
      </Grid>
      <Typography>
        <Box fontSize="18px" fontWeight="bold">{`$${thousandFormat(total)}`}</Box>
      </Typography>
    </Box>
  )
}


const DoughnutChart = () => {
  const [selection, setSelection] = useState([])
  const data = [
    { category: 'Travel', spend: 1000, times: 1 },
    { category: 'Shop', spend: 500, times: 2 },
    { category: 'Food', spend: 500, times: 8 },
  ];
  const click = ({ targets }) => {
    const target = targets[0]
    if (target) {
      setSelection(prev => {
        if (prev[0] && prev[0].point === target.point) {
          return []
        } else {
          return [target]
        }
      })
    }
  }
  const selected = selection[0]

  return (
    <>
      <Grid container direction="column" alignItems="center" style={{ margin: "10px 0 30px 0" }} >
        <Typography>
          <Box fontSize="18px" fontWeight="bold">Category spending</Box>
        </Typography>
      </Grid>
      <Box position="relative">
        {selected && (
          <Box
            position="absolute"
            display="flex"
            justifyContent="center"
            width="100px"
            height="100px"
            left="calc(50% - 50px)"
            top="calc(10px + 90px - 50px)"
          >
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" flexWrap="wrap">
              {React.cloneElement(Icon[data[selected.point].category], { fontSize: 'large' })}
              <Typography>
                <Box fontSize="14px" color={grey[600]}>
                  {data[selected.point].category}
                </Box>
              </Typography>
              <Typography>
                <Box fontSize="18px" fontWeight="bold">
                  {`$${thousandFormat(data[selected.point].spend)}`}
                </Box>
              </Typography>
            </Box>
          </Box>
        )
        }

        <Chart
          data={data}
          height={200}
        >
          <PieSeries
            valueField="spend"
            argumentField="category"
            innerRadius={0.78}
          />
          <Animation />
          <EventTracker onClick={click} />
          <SelectionState selection={selection} />
        </Chart>
        <SpendingItem category={'Travel'} times={2} total={1000} />
        <SpendingItem category={'Shop'} times={5} total={500} />
        <SpendingItem category={'Food'} times={3} total={500} />
      </Box>

    </>

  )
}

const DailySpendingBarChart = () => {
  const data = [
    { month: 'SUN', spend: 1200 },
    { month: 'MON', spend: 800 },
    { month: 'TUE', spend: 1300 },
    { month: 'WED', spend: 800 },
    { month: 'THU', spend: 900 },
    { month: 'FRI', spend: 700 },
    { month: 'SAT', spend: 600 },
  ];
  const labelComponent = (props) => {
    const { text } = props
    if (text % 1000 !== 0) return null
    return <ValueAxis.Label {...props} text={`${text / 1000}K`} />
  }
  const pointComponent = props => {
    const { arg, val, value } = props
    if (value === 2000) return null
    return (
      <>
        <BarSeries.Point {...props} />
        <Chart.Label
          x={arg - 13}
          y={val - 10}
          style={{ fontWeight: 'bold', fontSize: '14px' }}
        >
          {`${value / 1000}K`}
        </Chart.Label>
      </>
    );
  };


  return (
    <>
      <Grid container direction="column" alignItems="center" style={{ margin: "10px 0 30px 0" }} >
        <Typography>
          <Box fontSize="18px" fontWeight="bold">Daily spending</Box>
        </Typography>
        <Typography>
          <Box fontSize="24px" fontWeight="bold">$1,200</Box>
        </Typography>
        <Typography>
          <Box color={grey[600]} fontSize="12px">Avg. spent this week</Box>
        </Typography>
      </Grid>
      <Chart data={data} height={150}>
        <ArgumentAxis />
        <ValueScale modifyDomain={() => [0, 2000]} />
        <ValueAxis
          showGrid={false}
          tickFormat={scale => value => value}
          labelComponent={labelComponent}
        />
        <BarSeries
          valueField="spend"
          argumentField="month"
          pointComponent={pointComponent}
        />
        <Animation />
      </Chart>
    </>
  )
}

const CompareBarChart = () => {
  const data = [
    { week: 'Last week', spend: 3400 },
    { week: 'This week', spend: 3200 },
  ];
  const labelComponent = (props) => {
    const { text } = props
    if (text === 0 || text % 1000 !== 0) return null
    return <ValueAxis.Label {...props} text={`${text / 1000}K`} />
  }
  const pointComponent = props => {
    const { arg, val, value } = props
    if (value === 2000) return null
    const color = props.index === 0 ? orange[500] : blue[500]

    return (
      <>
        <BarSeries.Point {...props} color={color} />
        <Chart.Label
          x={arg - 13}
          y={val - 10}
          style={{ fontWeight: 'bold', fontSize: '14px' }}
        >
          {`${value / 1000}K`}
        </Chart.Label>
      </>
    );
  };


  return (
    <>
      <Grid container direction="column" alignItems="center" style={{ margin: "10px 0 30px 0" }} >
        <Typography>
          <Box fontSize="18px" fontWeight="bold">Compare to last week</Box>
        </Typography>
        <Typography>
          <Box fontSize="24px" fontWeight="bold">-$200</Box>
        </Typography>
        <Typography>
          <Box color={grey[900]} fontSize="14px">
            Spent less than last week
          </Box>
        </Typography>
      </Grid>
      <Chart data={data} height={250}>
        <ArgumentAxis />
        <ValueScale modifyDomain={() => [0, 4000]} />
        <ValueAxis
          showGrid={false}
          tickFormat={scale => value => value}
          labelComponent={labelComponent}
        />
        <BarSeries
          valueField="spend"
          argumentField="week"
          pointComponent={pointComponent}
        />
        <Animation />
      </Chart>
    </>
  )
}

const TopSpending = () => {
  const [selection, setSelection] = useState([])
  const data = [
    { category: 'Travel', spend: 1000, times: 1 },
    { category: 'Shop', spend: 500, times: 2 },
    { category: 'Food', spend: 500, times: 8 },
  ];
  const click = ({ targets }) => {
    const target = targets[0]
    if (target) {
      setSelection(prev => {
        if (prev[0] && prev[0].point === target.point) {
          return []
        } else {
          return [target]
        }
      })
    }
  }
  const selected = selection[0]

  return (
    <>
      <Grid container direction="column" alignItems="center" style={{ margin: "10px 0 30px 0" }} >
        <Typography>
          <Box fontSize="18px" fontWeight="bold">Top spending</Box>
        </Typography>
        <Typography>
          <Box color={grey[900]}>% of total money spent this month</Box>
        </Typography>
      </Grid>
      <Box>
        <SpendingItem category={'Insurance'} times={1} total={500} />
        <SpendingItem category={'Transport'} times={3} total={200} />
        <SpendingItem category={'Restaurant'} times={3} total={80} />
      </Box>
    </>
  )
}

const Analytics = () => {
  const classes = useStyles();

  return (
    <Grid container align-content-xs-space-around={'true'} className={classes.root}>
      <Grid
        xs={12}
        className={classes.space}
      >
        <Paper className={classes.paper}>
          <DailySpendingBarChart />
        </Paper>
      </Grid>
      <Grid
        xs={12}
        className={classes.space}
      >
        <Paper className={classes.paper}>
          <DoughnutChart />
        </Paper>
      </Grid>
      <Grid
        xs={12}
        className={classes.space}
      >
        <Paper className={classes.paper}>
          <CompareBarChart />
        </Paper>
      </Grid>
      <Grid
        xs={12}
        className={classes.space}
      >
        <Paper className={classes.paper}>
          <TopSpending />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Analytics
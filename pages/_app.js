import React, { Fragment } from 'react'
import App from 'next/app'
import Head from 'next/head'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import {makeStyles, MuiThemeProvider} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import store from '../src/store'
import theme from '../src/utils/theme'
import NavBar from "../src/components/NavBar";
import BottomBar from "../src/components/BottomBar";
import Router from 'next/router';
import { PersistGate } from 'redux-persist/integration/react';

const _App = withRedux(store)(
  class _App extends App {
    static async getInitialProps ({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      }
    }

    state = {
      path: '/'
    }

    componentDidMount () {
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
      Router.onRouteChangeStart = url => {
        this.setState(() => ({ path: url }));
      };
    }

    render () {
      const {
        Component,
        pageProps,
        store,
      } = this.props;

      return (
        <Fragment>
          <Head>
            <title>P&G Receipt Scanner</title>
          </Head>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
              <PersistGate persistor={store.__PERSISTOR} loading={null}>

                <div style={{ marginTop: '60px', marginBottom: '60px', display: 'flex' }}>
                  <NavBar
                    path={this.state.path}
                  />
                  <Component {...pageProps} />
                  <BottomBar />
                </div>
              </PersistGate>
            </Provider>
          </MuiThemeProvider>
        </Fragment>
      )
    }
  }
)

export default _App

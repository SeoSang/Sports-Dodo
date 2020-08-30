import '../styles/globals.css';
import Head from 'next/head';
import MyLayout from '../components/MyLayout';
import { Provider } from 'react-redux';
import createSagaMiddleware, { END } from 'redux-saga';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducers';
import rootSaga from '../sagas';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const MyApp = ({ Component, store, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        ></link>
        {/* material ui 폰트 불러오기 로보토 폰트 */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        ></link>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <MyLayout>
        <Component {...pageProps} />
      </MyLayout>
    </Provider>
  );
};

const makeStore = (initialState, options) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // Before we returned the created store without assigning it to a variable:
  // return createStore(reducer, initialState);

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
  );

  // 3: Run your sagas:
  store.sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  // 1. Wait for all page actions to dispatch
  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  };

  // 2. Stop the saga if on server
  if (ctx.req) {
    ctx.store.dispatch(END);
    await ctx.store.sagaTask.toPromise();
  }

  // 3. Return props
  return {
    pageProps,
  };
};

export const wrapper = withRedux.createWrapper(makeStore, { debug: true });

export default withRedux(makeStore)(withReduxSaga(myApp));

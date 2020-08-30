<<<<<<< HEAD
import '../styles/globals.css';
import Head from 'next/head';
import MyLayout from '../components/MyLayout';
import { Provider } from 'react-redux';
import { wrapper } from '../store';
=======
import "../styles/globals.css";
import Head from "next/head";
import MyLayout from "../components/MyLayout";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import "antd/dist/antd.css";
import {
  Middleware,
  applyMiddleware,
  compose,
  createStore,
  Store,
} from "redux";
import reducer from "../reducers";
import rootSaga from "../sagas";
>>>>>>> a4654feb147117dd091c69587335f0e17afb4a98

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
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
    </>
  );
};

export default wrapper.withRedux(MyApp);

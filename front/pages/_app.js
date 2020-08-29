import '../styles/globals.css';
import Head from 'next/head';
import MyLayout from '../components/MyLayout';
import { Provider } from 'react-redux';
import { wrapper } from '../store';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
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
    </>
  );
};

export default wrapper.withRedux(MyApp);

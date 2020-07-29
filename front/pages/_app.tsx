import "../styles/globals.css"
import { AppPropsType } from "next/dist/next-server/lib/utils"
import Head from "next/head"
import MyLayout from "../components/MyLayout"

const MyApp = ({ Component, pageProps }: AppPropsType) => {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css'
        ></link>
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </Head>
      <MyLayout>
        <Component {...pageProps} />
      </MyLayout>
    </>
  )
}

export default MyApp

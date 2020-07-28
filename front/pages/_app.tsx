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
      </Head>
      <MyLayout>
        <Component {...pageProps} />
      </MyLayout>
    </>
  )
}

export default MyApp

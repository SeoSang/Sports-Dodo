import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // 1. 스타일 시트 인스턴스 생성
    const sheet = new ServerStyleSheet();
    // 2. 페이지 스타일들을 추출한다.
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    // 3. 스타일 태그들을 전부 <style>로 만들어서 추출한다.
    const styleTags = sheet.getStyleElement();
    // 4. props 에 style태그들을 넘겨준다.
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {/* 최종 : head에 뽑았던 스타일 태그들을 넣어준다. */}

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

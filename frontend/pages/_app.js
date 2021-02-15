import NProgresting from 'nprogress';
import Router from 'next/router';
import Page from '../components/page';
// TODO: swap with our own
// import 'nprogress/nprogress.css';
import '../components/styles/nprogress.css';
import {ApolloProvider} from '@apollo/client';
import withData from '../lib/withData';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo}) {
  console.log("testing::")
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

export default withData(MyApp)

import React from 'react'
import {lazy , Suspense} from 'react'
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import AppStyles from './styles/AppStyles';
import TheNavbar from './components/navbar/TheNavbar';
import Footer from './components/footer/Footer';

const Home = lazy(() => import("./views/home/Home"));
// const ForCompanyPage = lazy(() => import("./pages/ForCompanyPage"));


const  App = () =>  {

  const theme = {
        colors : {
          primaryColor: '#0692C4',
          darkGreyColor:'#222428',
          lightGreyColor: '#E5E5E5',
          whiteColor: '#ffffff',
          signUpColor: '#E90C13'
        }
  }

  return (
<Router>
    <ThemeProvider  theme = {theme}>
          <GlobalStyle/>
            <AppStyles>
            <Suspense fallback =  { <h1>Page Loading, Please hold on ...</h1>}>
            <TheNavbar/>
              <Switch>
                <Route exact path = "/" component = {Home} />
                {/* <Route exact path = "/for-company" component = {ForCompanyPage} /> */}
                </Switch>
            <Footer/>
            </Suspense>
            </AppStyles>
    </ThemeProvider>
</Router>
  );
}

export default React.memo(App);

import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Home from '../Home';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
const Pages = () => {
  return (
    <>
     <Router>
        <Header />

          {/*  <Switch>
                <Route exact path ='/' component={Home} />
            </Switch> 

        <Footer />*/}
     </Router>
      
    </>
  )
}

export default Pages
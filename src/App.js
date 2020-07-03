import React from 'react';
import Header from './header';
import Footer from './footer';
import Home from './Home';
import Cart from './cart';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


class App extends React.Component {
   render() {
      return (
         <Provider store={store}> 
        
         <BrowserRouter>
         <Header/>
         <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/cart" component = {Cart} />
         </Switch>
         <Footer/>
         </BrowserRouter>
         </Provider>
      );
   }
}


export default App; 
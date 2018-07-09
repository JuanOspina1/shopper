import React, { Component, Fragment} from 'react';
import { Header, Footer } from './Layouts';
import Excercises from './Excercises';


export default class extends Component { 
    render(){
      return <Fragment>
        <Header />
        <Excercises/>
        <Footer />
      </Fragment>
    }
}
/**
* Sample React
* 作者：Hugo
*
* @format
* @flow
*index/:id 这里的ide表示参数
*/
import React, { Component } from 'react'
import {Switch,Route,Redirect} from  'react-router-dom'
import Index from './../view/index/index'
import About from './../view/about/index'
import Book from './../view/book/index'
import Details from  './../view/details/index'
import User from './../view/user/index'
class RouterIndex extends Component {
  render() {
      return(
        <Switch>
            <Route path="/" exact render={()=>(
                <Redirect  to="/index/all"/>
            )}/>
            <Route path="/index/:id" component={Index}/>
            <Route path="/about" component={About}/>
            <Route path="/book" component={Book}/>
            <Route path="/details/:id" component={Details}/>
            <Route path="/user/:id" component={User}/>
        </Switch>
      )
  }
}
export default RouterIndex
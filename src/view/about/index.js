/**
* 作者：TXK
* @format
* @flow
*/
import React,{ Component} from 'react';
import data from './data'
import PublicCard from './../public_card'
export default class About extends Component{
    render() {
        return <PublicCard data={data}/>;
    }
}
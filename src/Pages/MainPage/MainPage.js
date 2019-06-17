import React, {Component} from 'react';
import './MainPage.scss';
import { Feed } from '../../Components';

export default class MainPage extends Component{
    render(){
        return(
            <div>
                <Feed/>
            </div>
        )
    }
}
import React, {Component} from 'react';
import { Feed } from '../../Components';
import {API} from '../../api/api';
import Axios from 'axios';
import './MainPage.scss';

export default class MainPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: [],
            isLoading: false,
            pageCount: 1,
        };

        this.handleOnScroll = this.handleOnScroll.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleOnScroll);
        this.getData();
    }

    handleOnScroll(){
        var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        var clientHeight = document.documentElement.clientHeight || window.innerHeight;
        var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

        if(scrolledToBottom){
            this.setState({
                pageCount: this.state.pageCount+1,
            })
            this.getData()
        }
    }

    getData(){
        Axios.get(`${API}/page_${this.state.pageCount}.json`)
        .then(async(res) => {
            await this.setState({
                data: this.state.data.concat(...res.data)
            })
            console.log(this.state.data)
        }).catch(err => {
            console.log(err)
            }
        )
    }

    render(){
        const { data } = this.state;
        return(
            <div className="MainPage">
                <div className="filterContainer">
                    <img alt="checkbox__temp" src="./images/bt-checkbox-non-checked.svg"/>
                    <span className="filter__text">스크랩한 것만 보기</span>
                </div>
                <div className="feedContainer">
                {
                    data.map((data, index) => (
                        <Feed key={index} data={data}/>
                    ))
                }
                </div>
            </div>
        )
    }
}
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
            isScrap: false,
            pageCount: 1,
        };

        this.handleOnScroll = this.handleOnScroll.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleOnScroll);
        this.getData();
    }

    handleOnScroll(){
        let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        let scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        let clientHeight = document.documentElement.clientHeight || window.innerHeight;
        let scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

        if(scrolledToBottom){
            this.setState({
                pageCount: this.state.pageCount+1,
            })
            this.getData()
        }
    }

    handleCheck = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    
        this.setState({
            [e.target.name]: value
        })
      }

    getData(){
        Axios.get(`${API}/page_${this.state.pageCount}.json`)
        .then(async(res) => {
            await this.setState({
                data: this.state.data.concat(...res.data)
            })
        }).catch(err => {
            console.log(err)
            }
        )
    }

    render(){
        const { data, isScrap } = this.state;
        const localObj = localStorage.getItem("scrap") ? JSON.parse(localStorage.getItem("scrap")) : [];
        return(
            <div className="MainPage">
                <div className="filterContainer">
                    <input name="isScrap" type="checkbox" onChange={this.handleCheck}/>
                    <span className="filter__text">스크랩한 것만 보기</span>
                </div>
                <div className="feedContainer">
                {isScrap ? 
                 JSON.parse(localStorage.scrap).map((data, index) => (
                    <Feed key={index} data={data} localObj={localObj}/>
                 )) :                     
                 data.map((data, index) => (
                    <Feed key={index} data={data} localObj={localObj}/>
                ))}
                </div>
            </div>
        )
    }
}
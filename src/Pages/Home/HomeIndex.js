import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Url from '../../config/apiLink';

export default class HomeIndex extends Component{
    constructor(){
        super();
        this.state={
            data:''
        }
    }
    componentDidMount(){
        axios.get(Url+'users').then(res=>{

        }).catch(err=>{
            console.log(err);
            alert("Internal Server error")
        })
    }
    render() {
        return (
            <div>
                <div>
                    <Link to={'/server'}>Go to admin</Link>
                </div>
                <div className="justify-content-center flex-d row">
                    <div className="col-md-10 card pd-10">
                       <div>
                           <label htmlFor="event" style={{marginRight:10}}>Choose a car: </label>

                           <select name="event" id="event" onChange={()=>console.log("test")}>
                               <option value="volvo">Volvo</option>
                               <option value="saab">Saab</option>
                               <option value="mercedes">Mercedes</option>
                               <option value="audi">Audi</option>
                           </select>
                       </div>
                    </div>
                </div>
            </div>
        );
    }

}
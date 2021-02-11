import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Url from '../../config/apiLink';

export default class HomeIndex extends Component{
    constructor(){
        super();
        this.state={
            userData:[]
        }
    }
    componentDidMount(){
        axios.get(Url+'users').then(res=>{
            this.setState({userData:res.data});
        }).catch(err=>{
            console.log(err);
            alert("Internal Server error")
        })
    }
    _renderUserList(){
        var data = this.state.userData;
        var arr=[];
        for(var i =0;i<data.length;i++){
            arr.push( <Link to={{pathname:'/userDashboard', query:data[i]}} className="list-group-item list-group-item-action" key={"userKey-"+i}>{data[i].username}</Link>)
        }
        return arr;
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <div className="justify-content-center flex-d row mt-10">
                    <div className="col-md-10 pd-10">
                        <div>
                            <Link to={'/server'}>Go to admin</Link>
                        </div>
                       <div className="mt-10">
                           <h4>User Lists</h4>

                           <ul className="list-group">
                               {this._renderUserList()}
                           </ul>
                       </div>
                    </div>
                </div>
            </div>
        );
    }

}
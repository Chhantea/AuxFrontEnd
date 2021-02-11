import React,{Component} from 'react';
import Url from '../../config/apiLink';
import axios from 'axios';
import TotalTimer from "./TimerBox/TotalTimer";
import TotalAvailable from "./TimerBox/TotalAvailable";
import CurrentAux from "./TimerBox/CurrentAux";

export default class UserHomeIndex extends Component{
    constructor(){
        super();
        this.state={
            select:'Offline'
        }
    }
    componentDidMount(){
        if(typeof this.props.location.query !="undefined"){
            this.getDataFromapi();
        }else {
            // this.props.history.push('/')
        }
    }
    getDataFromapi(){
       axios.get(Url+'users/'+this.props.location.query.id+'/events').then(res=>{
           console.log(res.data);
       })
    }
    onHandleSelectChange=(e)=>{
      e.preventDefault();
      this.setState({select:e.target.value});
    };
    render() {
        return (
            <div className='pd-10'>
                 <div>
                     <label>Select Value</label>
                     <select value={this.state.select} onChange={this.onHandleSelectChange}>
                         <option value={"Available"}>Available</option>
                         <option value={"In a Meeting"}>In a Meeting</option>
                         <option value={'Lunch'}>Lunch</option>
                         <option value={"Offline"}>Offline</option>
                     </select>
                 </div>
                <br/>
                <div className="row pd-10">
                    <TotalTimer
                      select={this.state.select}
                    />
                    <TotalAvailable
                        select={this.state.select}
                    />
                    <CurrentAux
                        select={this.state.select}
                    />
                </div>
            </div>
        );
    }

}
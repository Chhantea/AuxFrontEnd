import React,{Component} from 'react';
import Timer from 'react-compound-timer';

export default class CurrentAux extends Component{

    UNSAFE_componentWillReceiveProps(nextProps){
        console.log(nextProps);
        if(nextProps.select =="Available"){
            this.timerRef.stop();
            this.timerRef.reset();
        }
        if(nextProps.select =="In a Meeting" || nextProps.select =="Lunch"){
            this.timerRef.start();
        }
        if(nextProps.select =="Offline"){
            this.timerRef.stop();
        }
    }
    render() {
        return (
            <div className="col-md mr-2 card pd-10">
                <div>
                    Current Aux
                </div>
                <br/>
                <div>
                    <Timer ref={(node) => { this.timerRef = node; }}
                           startImmediately={false}
                    >
                        {({ start, resume, pause, stop, reset, timerState }) => (
                            <>
                                <Timer.Hours /> <span style={{marginRight:5}}>h</span>
                                <Timer.Minutes /> <span style={{marginRight:5}}>m</span>
                                <Timer.Seconds /> <span style={{marginRight:5}}>s</span>
                            </>
                        )}
                    </Timer>
                </div>
            </div>
        );
    }

}
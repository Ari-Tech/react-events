import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TRTAG extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<tr><td>{this.props.trdata}</td></tr>)
    }
}
class MailData extends React.Component{
    constructor(props){
        super(props);
        this.logic();
    }
    logic(allmail){
       
    }
    render(){
        return (
            <table>
            <tbody>
            {this.props.allmail.map(function (i) {
            return (
              <TRTAG trdata={i}/>
            )
          })}
          </tbody>
          </table>
            
        )
    }
}

class BtnTag extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={"btnvalue":true,"cssclass":"green","mailList":props.maillist};
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
     this.setState(prevState=>({
        btnvalue:!prevState.btnvalue,
        cssclass:prevState.btnvalue?"red":"green"
     }))
     //state events are asynchromous so dont put logic here based in current btn value state. Always use prevState
     //below code will not work properly
     if(this.state.btnvalue){
         //DO NOT DO THIS
     }
       
    }
   
    render() {
        const maillist=this.state.mailList
        return (
            <div>
                <button class={this.state.cssclass} onClick={this.handleClick}>{this.state.btnvalue ? "ON" : "OFF"}</button>
                {this.state.btnvalue &&
                    <div>
                    <h3> Unread Mail Count is {maillist.length}</h3>
                    <MailData allmail={maillist}/>
                    </div>
                }

            </div>
        )
    }
}
const mails=["mail1","mail2","mail3","mail4"]

ReactDOM.render(
    <BtnTag maillist={mails}/>,
    document.getElementById('root')
);

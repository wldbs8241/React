import React, {Component} from "react";

// function 방식으로 컴포넌트를 만드는 방법
function Subject(props){
    return (
      <header>
        <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();
            this.setState({
                mode: 'read'
            });
        }.bind(this)}>{props.title}</a></h1>
        {props.sub}
      </header>
    );
  }
  // class Subject extends Component{
  //   render(){
  //     return (
  //       <header>
  //         <h1>{this.props.title}</h1>
  //         {this.props.sub}
  //     </header>
  //     );
  //   }
  // }


export default Subject;
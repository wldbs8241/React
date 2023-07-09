import React, {Component, useState} from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';


// class type 방식
class App extends Component {
  // 랜더 함수보다 먼저 실행되면서 컴포넌트를 초기화 싶은 코드는 constructor 내부에 작성 
  constructor(props){
    super(props);
    this.state = {
      mode: 'welcome',
      subject: {title:'web', sub:'world wide web!!'},
      welcome:{title:'welcome', desc: 'Hello, React-!'},
      contents: [
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title: 'CSS', desc:'CSS is for design'},
        {id:3, title: 'JAVASCRIPT', desc: 'JavaScript is for interactive'}
      ],
    }
  }
  // 상위 컴포넌트를 하위 컴포넌트로 전달할때 state값으로 -> props 쉽게 가능
  render() {
    console.log('render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if (this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}>
        </Subject> */}
        <header>
        <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();
            this.setState({
                mode: 'read'
            });
        }.bind(this)}>{this.state.subject.title}</a></h1>
        {this.state.subject.sub}
      </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}
export default App;

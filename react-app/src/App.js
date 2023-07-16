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
      mode: 'read',
      selected_content_id :2,
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
    // 초기 welcome message
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if (this.state.mode === 'read'){
      var i = 0;
      while(i< this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          // 그냥 변수명인가???  
          _title = data.title;
          _desc = data.desc;
            break;
          }
        i=i+1;
      }
      
    }
    return (
      <div className="App">
        {/* 방법1 */}
        <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}
        onChangePage={function(){
          // alert("메세지가 변경되었습니다. 🐯");
          this.setState({mode: 'welcome'});
        }.bind(this)}>
        </Subject>
        <TOC 
          onChangePage={function(id){
            this.setState({
              mode: 'read',
              selected_content_id : Number(id)
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}
export default App;

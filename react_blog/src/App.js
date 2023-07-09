// warning message 무시
/*eslint-disable*/
import React, { useState } from 'react';
import './App.css';

// JSX를 통해 자바스크립트 내에서 html을 쉽게 사용할 수 있게 된다.
function App() {
  // 변수 선언
  let [logo1, setLogo1] = useState('ReactBlog');
  let [logo2, setLogo2] = useState('강남 우동 맛집');
  let [logo3, setLogo3] = useState('파이썬 독학');
  let [따봉, 따봉변경] = useState(0);

  function like(){
    따봉변경(따봉 +1);
  }

  function WomenCoat(){
    setLogo1('여자 코트 추천');
  }

  // return 내부에 HTML 작성
  return (
    <div className="App">
      <div className="nav">
        <h3>🏷️  Blog</h3>
      </div>
      <div>
        <h2 style = {{ color : 'blue', fontSize : '20px' }}>_Category_</h2>
        <button onClick={()=>{let copy = logo1; copy='여자 코트'; setLogo1(copy)}}>women coat</button> 
        <span> | </span> 
        <button onClick={() => {}}>가나다순 정렬</button>
        <hr></hr>
      </div>
      <div className='list'>
        {/* onClick 핸들러 */}
        <h4>{logo1}<span className="like" onClick={()=> {따봉변경(따봉+1)}}> 🩷 {따봉}</span></h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{logo2}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{logo3}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal></Modal>
    </div>
  );
}


// function app을 벗어나서 function작성
// Modal 컴포넌트 생성
// 1. 반복적 HTMl을 축약할 때
// 2. 큰 페이지를 만들 때
// 3. 자주 변경되는 것들
// state를 가져다 사용할 때 문제가 생길 수 있다.
function Modal(){
  return (
    <>
      <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
      </div>
    </>

  )
}
export default App;

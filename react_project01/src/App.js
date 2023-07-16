import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';


// app에서 하위 컴포넌트인 expenses로 props를 이용해 데이터 보내기
function App(props) {
  // 가장 상위 컴포넌트인 app에서 expenses데이터를 items란 변수에 담아서 expenses로 보내준다.
  const expenses = [
    {id: 'e1',
    title: 'Toilet', 
    amount: 294.67, 
    date: new Date(2021, 2, 28),
  },
  {id: 'e2',
    title: 'Car insurance', 
    amount: 294.67, 
    date: new Date(2021, 2, 28),
  },
  {id: 'e3',
    title: 'Happy Day', 
    amount: 2.65, 
    date: new Date(2021, 2, 28),
  },
  {id: 'e4',
    title: 'Car racing', 
    amount: 94.17, 
    date: new Date(2021, 2, 28),
  }
  ];
  const numm = [1, 2, 3, 4];
  return (
    <div className='App'>
      <h2>let's get started !</h2>
      <p>This is also visible</p>
      <div className="title">
        {expenses.map((item, idx) => (
          <div className="titlebox" key={item}>
            {item.title}
          </div>
        ))}
        
        {numm.map((num, idx) => (
          <div>{num}</div>
        ))}
      </div>
      {/* 여기서 정의한 변수를 활용하기 때문에 props안붙여도됨 */}
      <Expenses items={expenses}></Expenses>
    </div>
   
  );
}

export default App;

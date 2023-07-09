import ExpenseDate from "./ExpenseDate";
// import Expense from "./expenses";
import "./ExpenseItem.css";

// props로 부모에게 데이터 받기
function ExpenseItem(props) {
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;
    // const year = props.date.getFullYear();
    // const month = props.date.toLocaleString('en-US', {month:'long'});
    // const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    return(
        <div className="expense-item">
            {/* 받은 데이터 출력하기 */}
            {/* 여기서 변수 date는 부모에서 받아온 데이터이므로 앞에 props가 붙는다. */}
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
               <h2>{props.title}</h2> 
               <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    );
}

// 작성한 컴포넌트를 사용하기위해 내보내야함
// default 함수명 : 함수를 기본값으로 내보낼 것임
export default ExpenseItem;

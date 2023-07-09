import './Expenses.css';
// App -> expenses 컴포넌트에서는 ExpensesItem으로 데이터 넘겨준다. 
import ExpenseItem from './ExpenseItem';


// App에서 id/title/amount/price 받아온 상태
function Expense(props){
    return(
        <div>
            <ExpenseItem 
            title={props.items[0].title}
            amount={props.items[0].amount}
            date = {props.items[0].date}
            />
            <ExpenseItem 
            title={props.items[1].title}
            amount={props.items[1].amount}
            date = {props.items[1].date}
            />
            <ExpenseItem 
            title={props.items[2].title}
            amount={props.items[2].amount}
            date = {props.items[2].date}
            />
        </div>
    );
}

export default Expense;
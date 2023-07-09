// 화면에 달력 렌더링
import './ExpenseDate.css';
import Aa from './Aa';

function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US', {month:'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
            <div>
                <Aa data={year}></Aa>
            </div>
        </div>
    )
}


export default ExpenseDate;
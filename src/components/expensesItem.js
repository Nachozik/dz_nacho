import './expensesItem.css'

const ExpensesItem = (props) => {
    let months = ['January','February','March','April','May','June','August','September','October','November','December']
    return (
    <div className="expense-item">
        <div className='expense-date'>
            <div className='expense-date__month'>{months[props.date.getMonth()]}</div>
            <div className='expense-date__year'>{props.date.getFullYear()}</div>
            <div className='expense-date__day'>{props.date.getDate()}</div>
        </div>
      <div className="expense-item__description">
        <h2>{props.tittle}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
};

export default ExpensesItem;
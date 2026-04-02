function ExpenseItem({items,ondeletes}){
    return (
        <div className="expense-item">
            <span>{items.title} </span>
            <span>₹{items.amount}</span>
            <button onClick={() => ondeletes(items.id)}>❌</button>
            </div>
    )
}

export default ExpenseItem;
import { useState } from "react";

function ExpenseForm({ addExpense }){
    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState("");

    const formhandle=(e)=>{
        e.preventDefault();
        const expenseAry={
            id:Date.now(),
            title,
            amount:parseFloat(amount)
        }
        addExpense(expenseAry)
        setTitle("");
        setAmount("");
    }
    return(
        <form onSubmit={formhandle} className="expense-form">
        <input placeholder="Expense Title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <input placeholder="Amount ₹" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} />
        <button type="submit">Add Expense</button>
      </form>
    )
}

export default ExpenseForm;
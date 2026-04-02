import { useState, useEffect } from 'react'
import './App.css'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

function App() {
  const [expenses,setExpenses]=useState(()=>{
    const saved=localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : []
  })
  const addExpense=(expense)=>{
    setExpenses((prev)=>[...prev,expense]);
    console.log(expense);
  }
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  },[expenses])

  const delets=((id)=>{
    setExpenses((prev)=>prev.filter((item)=>item.id!=id));
  })
const totalExpenses  = expenses.reduce((sum, item) => sum + item.amount, 0)
  return (
    <div className="app-container">
      <h1>💰 Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense}/>
      <h3 className="total">Total Expense: ₹{totalExpenses.toFixed(2)}</h3>
      <ExpenseList expenseList={expenses} onDelets={delets}/>
    </div>
  )
}

export default App

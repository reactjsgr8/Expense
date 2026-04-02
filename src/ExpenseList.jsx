import { useEffect } from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({expenseList,onDelets}){
    
    return (
        <div className="expense-list">
        {
            expenseList.map((item)=>(
                <ExpenseItem key={item.id} items={item} ondeletes={onDelets}/>
            ))
        }
            
      </div>
    )
}

export default ExpenseList;
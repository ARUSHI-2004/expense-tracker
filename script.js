const balance=document.getElementById("balance");
const money_plus=document.getElementById("money-plus");
const money_minus=document.getElementById("money-minus");
const form=document.getElementById("forms");
const list=document.getElementById("list");
const text=document.getElementById("text");
const amount=document.getElementById("amount");
const dummytranscations=[
{id: 1,text:"Flower", amount:-20},
{id: 2,text:"salary", amount:300},
{id: 3,text:"book", amount:-10},
{id: 4,text:"camera", amount:150},
];
let transactions = dummytransactions;
function addtransactionDOM(transaction){
    const sign=transaction.amount<0 ? "-":"+";
    const item=document.createElement("li");
    item.classList.add(
        transaction.amount<0?"minus":"plus"
    )
    item.innerHTML = `${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="">x</button>`;
    list.appendChild(item);
}
addtransactionDOM(transactions);
// objeto possuíra 2 propriedades arrays. 
//     receitas
//     despesas

// criar uma função que irá calcular o total de receitas e despesas e mostrara uma msg se a famalia está com saldo positivo ou negativo, seguido do valor do saldo:

let budget = {
    incomes: [],
    expenses: [30,70],
}

let totalIncomes = 0
let totalExpenses = 0

function calcIncomes(object, ...numbers){
    for(let valor of numbers){
        object.incomes.push(valor) 
        // budget.incomes.push[i] 
        // console.log(budget.incomes)
    }

    for(let i = 0; i < budget.incomes.length; i++ ){
        totalIncomes +=Number(budget.incomes[i]) 
        // console.log(totalincomes)
    }   
}

function calcExpenses(){
   
    for(let i = 0; i < budget.expenses.length; i++ ){
        totalExpenses +=Number(budget.expenses[i]) 
        // console.log(totalexpenses)

    }
}

calcIncomes(budget, 10, 20,30)
calcExpenses()
// console.log(totalincomes)
// console.log(totalexpenses)
let netBudget = totalIncomes - totalExpenses 
// netBudget = totalincomes - totalexpenses
// console.log(netBudget)

if(netBudget > 0){
    console.log(`O seu saldo é positivo: ${netBudget}`)
} else {
    console.log(`O seu saldo é negativo: ${netBudget}`)
}
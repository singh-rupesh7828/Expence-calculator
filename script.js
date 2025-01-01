const form = document.querySelector('#transaction-form');
const transaction_amount = document.querySelector('#transaction_amount')
const transaction_type = document.querySelector('#transaction_type')
const Summary = document.querySelector('#summary')

let total_transection = []

form.addEventListener('submit', function (event) {
    event.preventDefault();

    total_transection.push(
        {
            type : transaction_type.value,
            amount: Number(transaction_amount.value)
        }
    )

    transaction_amount.value = ''

    let sum = 0;
    let add = '';
    total_transection.forEach(function(val){

        if(val.type === 'income'){
            sum = sum + val.amount
        }
        else{
            sum = sum - val.amount
        }



    })


    add = add + `<h2 class="font-bold text-xl mb-2">Transactions Summary</h2>
            <h3 class="font-bold text-lg">
                Total Balance: <span id="total-balance" class="text-green-500">${sum}</span>
            </h3>`


    summary.innerHTML = add

});



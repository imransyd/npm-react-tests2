let initialState = {
  account :{
     accountNo:4638965931,
     balance:1500,
     openAccount: true,

   },
   customer:{
     name:'person',
     email: "email@gmail.com",
     number: "07445256"
   }
}

function rootReducer(state=initialState, action) {
    switch(action.type) {
        case WITHDRAW:
            return {
                balance: state.balance - action.amount
            };
        default:
            return state;
            
        case DEPOSIT:
            return {
                balance: state.balance + action.amount
            };
        default:
            return state;
            
        case TRANSFERS:
            return {
                balance: state.balance - action.amount
            };
        default:
            return state;    
     }
}

const withdraw = 'WITHDRAW';
const deposit ='DEPOSIT';
const transferFunds ='TRANSFERS';
    
//ACTIONS
function withdraw (amount) {
   const action ={
    type: "WITHDRAW",
    amount:amount
  }
  return {action.type,action.amount}

}
function deposit (amount) {
   const action ={
    type: "DEPOSIT",
    amount:amount
  }
  return {action.type,action.amount}

}

function transfers (amount, destAccount)  {
   const action ={
    type: "TRANSFERS",
    amount:amount,
    destinationAccount:destAccount
  }
  return {action.type,action.amount,action.destAccount}

}


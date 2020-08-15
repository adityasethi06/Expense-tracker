export default (state, action) => {
    switch(action.type){
        case ('ADD'):
            const {text, amount} = action.payload;
            return {
                transactions: [...state.transactions, {text, amount, id: state.transactions.length + 1}]
            }
        case ('DELETE'):
            const {id} = action.payload;
            return {
                transactions: state.transactions.filter(tx => tx.id != id)
            }
        default:
            return state;
    }
}
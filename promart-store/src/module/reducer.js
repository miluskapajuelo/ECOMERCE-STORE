export const initialState = {
    basket:[],
}

const reducer =(state, action)=>{
    console.log(action);
    switch(action.type){
        case 'add':
            return {
                ...state,
                basket:[...state.basket, action.item]
            }
        case 'remove':
            let newCart =[...state.basket]
            console.log('statebasket',state.basket)
            console.log('action.id',action.id)
            const index = state.basket.findIndex((basketItem)=>basketItem.id ===action.id)
            console.log('index',index)
            if(index>0){
                newCart.splice(index,1)
            }else{
                console.log('error to remove')
            }
    }
}

export default reducer
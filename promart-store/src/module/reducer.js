import {getItemCart} from './../module/cart-local'

export const initialState = {
    basket:[],
}

const reducer =(state, action)=>{
    switch(action.type){
        case 'add':
            localStorage.setItem("cart", JSON.stringify([...state.basket, action.item]));
            return {
                ...state,
                basket:[...state.basket, action.item]
            }
            case 'update':
                localStorage.setItem("cart", JSON.stringify([...getItemCart(), action.item]));
                return {
                    ...getItemCart(),
                    basket:[...getItemCart(), action.item]
                }
            case 'selected':
                localStorage.setItem("selectedCart", JSON.stringify([...state.basket, action.item]));
                return {
                    ...state,
                    basket:[...state.basket, action.item]
                }
        case 'reduce':
            localStorage.removeItem(JSON.stringify([action.item]));
            return {
                ...state,
                basket:[...state.basket, action.item]
            }
        case 'initial':
            return {
                ...state,
                basket:[...getItemCart()]
            }
        case 'remove':
            localStorage.removeItem(action.item)
            let newCart =[...state.basket]
            const index = state.basket.findIndex(element=>element.id ===action.item.id)
            newCart.splice(index,1)
            return {
                ...state,
                basket:[...newCart]
            }
    }
}

export default reducer
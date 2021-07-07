export function addToCard(product){
    const cart = getItemCart()
    if(cart!==null){
        localStorage.setItem("cart", JSON.stringify([...cart,product]));
    }
    else{
        localStorage.setItem("cart", JSON.stringify([product]));
    }    
}

 export function getItemCart(){
    const data = localStorage.getItem("cart");
    return JSON.parse(data)
}

/*
export function removeItemCart(product){
    localStorage.setItem("cart", [product]);
}

export function clearCart(product){
    localStorage.setItem("cart", [product]);
} */
/* JSON.stringify([...cart, product]) */
const saveToLocalStorage = (key, data)=>{
    localStorage.setItem(key, JSON.stringify(data));
}
const getFromStorage = (key, default_)=>{
    return JSON.parse(localStorage.getItem(key)) || default_;
}

const onLoad = () =>{
    const cart = getFromStorage('cart', []);
    console.log(cart)

    saveToLocalStorage('cart', ['Ботинки']);
}
document.addEventListener("DOMContentLoaded", ()=>{
onLoad()
})
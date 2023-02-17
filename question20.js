// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//Adding Meat to start of array list
if(!shoppingCart.includes("Meat")){
    shoppingCart.unshift("Meat")
}

//Adding Sugar at end of array list
if(!shoppingCart.includes("Sugar")){
    shoppingCart.push("Sugar")
}

//-----------Removing Honey from list-------------------

//1. non destructive method
const listWithoutHoney = shoppingCart.filter(items => !items.includes("Honey"))   
console.log(listWithoutHoney)

//2.destructive method
for(let i=0;i<shoppingCart.length;i++){
    if(shoppingCart[i]==="Honey"){
        let spliced = shoppingCart.splice(i, 1);
        console.log("Removed element: " + spliced);
        console.log("Remaining elements: " + shoppingCart);
    }
}
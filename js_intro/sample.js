console.log("Hello World");

function my_first_funct(arg_one, arg_two){
    console.log(arg_one, arg_two);
}

my_first_funct(10,"blaaa")

let sec_fun = function(arg_one, arg_two ="hola"){
    console.log(arg_one, arg_two);   
}

let arr_fun = () => {
    console.log("inside my arr fun")
}

((x) => {console.log(x)})(100)

function identity(price){
    return price;
}

function double_price(price){
    return price * 2;
}

function discount(price_cal, price){
    return price_cal(price) * .70
}

function my_curr(x){
    return function(y) {
            console.log(`${x} ${y}`)
        
    }
}

let x = my_curr("hello")
x("juve");
x("pablo");

function get_li_template (name, price){
    return `<li class="added-item">${name} ${price}</li>`
}

console.log(discount(identity, 100))
console.log(discount(double_price, 100))

document.getElementById("get-item").addEventListener("click", (event) => {
    let item_name = document.querySelector("#items").value;
    let item_price = document.querySelector("#price").value;
    let template = get_li_template(item_name, item_price);
    document.getElementById("list-items").innerHTML = template;
    debugger
    console.log("clicked")
})

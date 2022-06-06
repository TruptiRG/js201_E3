

let purchaseList=JSON.parse(localStorage.getItem("purchase"))||[]
let w=JSON.parse(localStorage.getItem("user"))||[]

let t=document.getElementById("purchased_vouchers");
purchaseList.map(function(el,index){
    let box=document.createElement("div");
    let name=document.createElement("h4");
    name.innerText=el.name;
    let price=document.createElement("p");
    price.innerText=el.price;
    let im=document.createElement("img");
    im.src=el.image;
    box.append(im,name,price);
    t.append(box)
});


let balance=document.getElementById("balance");
balance.innerText=w[0].amount;

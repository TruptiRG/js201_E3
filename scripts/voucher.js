// https://masai-vouchers-api.herokuapp.com/api/vouchers

async function Voucher(){
    try{
        let res=await fetch("https://masai-vouchers-api.herokuapp.com/api/vouchers");
        let data=await res.json();
        console.log(data[0].vouchers);
        let a=data[0].vouchers;
        add(a);
        return a;

    }catch(err){
        console.log(err);
    }
}
Voucher();

let purchaseList=JSON.parse(localStorage.getItem("purchase"))||[]
let w=JSON.parse(localStorage.getItem("user"))||[]

let vdiv=document.getElementById("voucher_list");
function add(data){
    data.forEach(function(el){
        let box=document.createElement("div");
        box.setAttribute("class","voucher")
        let h1=document.createElement("h3");
        h1.innerText=el.name;
        let h2=document.createElement("p");
        h2.innerText=el.price;
        let balance=h2.innerText;
        let h3=document.createElement("img");
        h3.src=el.image;
        let h4=document.createElement("button");
        h4.innerText="Buy voucher";
        h4.setAttribute("class","buy_voucher");
        h4.addEventListener("click",function(){
            store();
        })

        box.append(h3,h1,h2,h4)
        vdiv.append(box);

        function store(){
            purchaseList.push(el);
            localStorage.setItem("purchase",JSON.stringify(purchaseList));
            if((h2.innerText)<(wallet_balance)){
                alert("Hurray! purchase successful");
                let final=aa-balance;
                console.log(final);
                wallet_balance.innerText=final;
                // wamount[0].amount=final;
                // localStorage.setItem("user",JSON.stringify());
                w.amount=parseInt(final);
                localStorage.setItem("user",JSON.stringify(w));
            }else{
                alert("Sorry! insufficient balance");
            }
        }
    });

    
}

let wamount=JSON.parse(localStorage.getItem("user"));
console.log(wamount[0].amount);
let aa=wamount[0].amount;
let wallet_balance=document.getElementById("wallet_balance");
wallet_balance.innerText=aa;


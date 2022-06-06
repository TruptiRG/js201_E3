

let arr=JSON.parse(localStorage.getItem("user"))||[];

function T1(n,e,a,am){
    this.name=n;
    this.email=e;
    this.address=a;
    this.amount=am;
}

function t1(e){
    e.preventDefault();
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let address=document.querySelector("#address").value;
    let amount=document.querySelector("#amount").value;

    let t=new T1(name,email,address,amount);
    arr.push(t);
    console.log(arr);
    localStorage.setItem("user",JSON.stringify(arr));

    document.getElementById("name").value=null;
    document.getElementById("email").value=null;
    document.getElementById("address").value=null;
    document.getElementById("amount").value=null;

}
// Store the wallet amount to your local storage with key "amount"

//url1 = https://www.omdbapi.com/?apikey=6a41ddca&s=om_shanti_om


let money=JSON.parse(localStorage.getItem("amount"))||0;

document.querySelector("#wallet").innerText=money;

let addAmount=()=>{
  let amount=document.querySelector("#amount").value
  money=money+Number(amount);
  localStorage.setItem("amount",JSON.stringify(money));
  document.querySelector("#wallet").innerHTML=money;
  document.getElementById("amount").value="";
}

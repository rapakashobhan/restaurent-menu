let name =document.querySelector(".name");
let btn = document.getElementById('btn');
let form = document.querySelector('form');
let billAmount = document.getElementById('bill_amount');
let tipamount = document.getElementById('tipamount');
let gstpersentage = document.getElementById('gstpersentage');
let gstamount =document.getElementById('gstamount');
let totalbill = document.getElementById('totalbill');

form.addEventListener('submit',(e)=>{
  e.preventDefault()

 let first = billAmount.value;
 let second = tipamount.value;
 let third = gstamount.value;

totalbill.value = parseInt(first) + parseInt(second)+ parseInt(third);
 
let gst = (billAmount.value/100)*gstpersentage.value
gstamount.value = gst;
})


























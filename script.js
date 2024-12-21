let form1 = document.querySelector(".form1");
let form2 = document.querySelector(".form2");
let msg = document.querySelector(".msg");
function msgbtn(event){
  event.preventDefault();
  form2.classList.remove("hidden");
  form1.classList.add("hidden");
}

function showmsg(event){
  event.preventDefault();
  msg.classList.remove("hidden");
  form2.classList.add("hidden");
  alert("Your course has been booked successfully");
}
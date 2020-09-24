var cardPointer=document.querySelectorAll(".cardsTry");
var i=0;
for(i=0; i<cardPointer.length ; i++)
{
    let ele = cardPointer[i]; 
    let x=document.querySelector('.cardStack');
    ele.addEventListener('mousedown', function() { 
      ele.setAttribute("display","block");
      x.classList.add("cardPopUp");
    });
    ele.addEventListener('mouseup', function(){
      ele.setAttribute("display","inline");
      x.classList.remove("cardPopUp");
    });
} 
var productcontainer=document.getElementById("productboxs")
var search=document.getElementById("searchs")
var products=productcontainer.querySelectorAll("div")
search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()
    for(var i=0;i<products.length;i++)
    {
        var productname=products[i].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            products[i].style.display="none"
        }
        else{
            products[i].style.display="block"
        }
    }
})
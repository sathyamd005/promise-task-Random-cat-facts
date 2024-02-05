// displaying task name 
var title=document.createElement("h1");
title.innerText="Random Cat Facts"
// creating an container 
var container=document.createElement("div");
container.setAttribute("class","container");
// creating an row
var row=document.createElement("div");
row.setAttribute("class","row");
// appending row into container and container into document
container.append(row);
document.body.append(title,container);
// fetch api
async function foo(){
    let res=await fetch("https://meowfacts.herokuapp.com/");
    res=await res.json();
    return fun(res)
}
function fun(res){

// Adding an col and card in row
    row.innerHTML=`
    <div class="col-md-4 col-sm-12">
    <div class="card">
    <div class="card-body">${res.data}</div>
</div>
    </div>
    `
}
foo()






'use strict'
let myForm=document.getElementById("myForm");
myForm.addEventListener('submit',addUser);
let myTable=document.getElementById("myTable");
let tbody=document.getElementById("tbody");
let clearb=document.getElementById("clear");
clearb.addEventListener('click',clearlocal);
let myArray=[];

function MyConstractor(userName,phoneNum,foodType,foodSize){
this.userName=userName;
this.phoneNum=phoneNum;
this.foodType=foodType;
this.foodSize=foodSize;
this.bath=`img/${foodType}.jpg`;
myArray.push(this);
}
function addUser(event){
    event.preventDefault();
    let user=event.target.userName.value;
    let phone=event.target.phoneNum.value;
    let type=event.target.foodType.value;
    let size=event.target.foodSize.value;
    new MyConstractor(user,phone,type,size);
    console.log(user);
    settinglocal();
    render();
}
function render(){
   tbody.textContent = "";
    
    for (let i=0;i<myArray.length;i++)
    {let trEL=document.createElement('tr');
    tbody.appendChild(trEL);
        let tdEL1=document.createElement('td');
        trEL.appendChild(tdEL1);
        tdEL1.textContent=myArray[i].userName;

        let tdEL2=document.createElement('td');
        trEL.appendChild(tdEL2);
        tdEL2.textContent=myArray[i].phoneNum;

        let tdEL3=document.createElement('td');
        trEL.appendChild(tdEL3);
        tdEL3.textContent=myArray[i].foodType;

        let tdEL4=document.createElement('td');
        trEL.appendChild(tdEL4);
        tdEL4.textContent=myArray[i].foodSize;
        
        let tdEL5=document.createElement('td');
        trEL.appendChild(tdEL5);
        let imgEL=document.createElement('img');
        imgEL.setAttribute('src',myArray[i].bath);
        tdEL5.appendChild(imgEL);
    }
}
function settinglocal(){
    let data=JSON.stringify(myArray);
    localStorage.setItem('user',data);
}
function gettinglocal(){
    let stringOb=localStorage.getItem('user');
    let normalOb=JSON.parse(stringOb);
    if(normalOb !== null)
    {myArray=normalOb;}
    render();
}
function clearlocal()
{
    localStorage.clear();
    window.location.reload();
}
gettinglocal();
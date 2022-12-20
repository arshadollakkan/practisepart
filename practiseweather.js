let cityna=document.getElementById("city")
let count=document.getElementById("country")
let input=document.getElementById("adik")
let temparatue=document.getElementById("tem")
let as=async()=>{
    let cityvalue=input.value
    if(cityvalue==""){
alert("please enter your city")
    }
    else{
        let responce=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`)
        let data=await responce.json();
        // console.log(data);
       cityna.textContent=data.name
       count.textContent=data.sys.country
       temparatue.textContent=data.main.temp
       
    }
}
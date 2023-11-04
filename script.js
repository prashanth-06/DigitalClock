function displayTime(){
    let data=new Date();
    let hrs=data.getHours();
    let min=data.getMinutes();
    let sec=data.getSeconds();
    let sessionEl=document.getElementById('session')

    if (hrs>=12){
        sessionEl.innerHTML='PM'
    }else{
        sessionEl.innerHTML='AM'
    }

    document.getElementById('hours').innerHTML=hrs;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;
    
}

setInterval(displayTime,10);


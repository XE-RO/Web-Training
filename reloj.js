const d=document;
export function digitalClock(clock,buttonPlay,buttonStop,resetReloj){
    
    let clockSt;
    d.addEventListener("click",(e)=>{
        if(e.target.matches(buttonPlay)){
            clockSt=setInterval(()=>{
                
                let clockHour=new Date().toLocaleTimeString();
                
                d.querySelector(clock).innerHTML=`<h3> ${clockHour} </h3>`;
            },1000);
            
            e.target.disabled=true;
            
        }
        if(e.target.matches(buttonStop)){
            clearInterval(clockSt)
            d.querySelector(buttonPlay).disabled=false
        }
        if(e.target.matches(resetReloj)){
            clearInterval(clockSt)
            d.querySelector(clock).innerHTML=null
            d.querySelector(buttonPlay).disabled=false
        }
    })
}
export function alarm(sound,buttonPlay,buttonStop){
    let alarmSt;
    const $alarm=d.createElement("audio");
    $alarm.src=sound;

    d.addEventListener("click",(e)=>{
        if(e.target.matches(buttonPlay)){
            alarmSt=setTimeout(()=>{
                $alarm.play();
            },2000)
            e.target.disabled=true
        }
        if(e.target.matches(buttonStop)){
            clearTimeout(alarmSt)
            $alarm.pause()
            $alarm.currentTime=0
            d.querySelector(buttonPlay).disabled=false
        }

    })
}

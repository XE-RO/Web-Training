const d=document
const ls=localStorage
export default function darktheme(btn,classDark){
    const $themeBtn=d.querySelector(btn),
    $selectors=d.querySelectorAll("[data-Dark]");
   
    let moon="🌙",
    sun="☀️";
    const lightMode=()=>{
        $selectors.forEach(el=>el.classList.remove(classDark));
        $themeBtn.textContent=moon; 
        ls.setItem("theme","light")
    }
    const darkMode=()=>{
        $selectors.forEach(el=>el.classList.add(classDark));
        $themeBtn.textContent=sun;
        ls.setItem("theme","dark")

    }
    
    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            //console.log($themeBtn.textContent)
            if($themeBtn.textContent===moon){
               darkMode();
                }else{
                    lightMode();
                }
        }
    })

    d.addEventListener("DOMContentLoaded",e=>{
        console.log(ls.getItem("theme"))
        if(ls.getItem("theme")===null)ls.setItem("theme","light");
        if(ls.getItem("theme")==="light")lightMode();
        if(ls.getItem("theme")==="dark")darkMode();

        
    });
}
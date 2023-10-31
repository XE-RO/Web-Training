const d=document,
w=window

export default function scrollButton(btn){
    const $scrollBtn=d.querySelector(btn);
    w.addEventListener("scroll",e=>{
        let scrollTop=d.body.scrollTop;

        if(scrollTop>600){
            $scrollBtn.classList.remove("hidden")
        }else{
            $scrollBtn.classList.add("hidden")
        }
        //console.log(d.body.scrollTop);
    })
    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                top: 0,
                behavior:"smooth",      
            })
        }

    })
}
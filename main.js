import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock,alarm } from "./reloj.js";
import { moveBall,shortCuts } from "./teclado.js";
import countdown from "./countdown.js";

const d=document

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj","#reset-reloj");
    alarm("./assets/iPhone-15-Plus.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Jan 03, 2024","Feliz Cumpleaños")
})

d.addEventListener("keydown",e=>{
    shortCuts(e)
    moveBall(e,".ball",".stage")
})


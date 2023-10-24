import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock,alarm } from "./reloj.js";
import { moveBall,shortCuts } from "./teclado.js";
import countdown from "./countdown.js";
import scrollButton from "./button_scroll.js";
import darktheme from "./dark_mode.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";

const d=document

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj","#reset-reloj");
    alarm("./assets/iPhone-15-Plus.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","Jan 03 2024","Feliz Cumpleaños");
    scrollButton(".scroll-top-button");
    responsiveMedia("youtube","(min-width: 1024px)",`<a href="https://youtu.be/6IwUl-4pAzc?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA"> Ver video </a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=XIIU5PaYVMwNw4oC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    responsiveMedia("gmaps","(min-width: 1024px)",`<a href="https://maps.app.goo.gl/81QWNCbZ4mYAnkry6">Ver mapa</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3307860711352!2d-99.16888681116005!3d19.42702312496429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2smx!4v1698069128209!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester");
})

d.addEventListener("keydown",e=>{
    shortCuts(e)
    moveBall(e,".ball",".stage")
})
darktheme(".dark-mode-btn","dark-mode")


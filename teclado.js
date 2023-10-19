const d=document;
let x=0;
let y=0;
export function moveBall(e,ball,stage){
    const $ball=d.querySelector(ball),
    $stage=d.querySelector(stage),
    limitsBall=$ball.getBoundingClientRect(),
    limitsStage=$stage.getBoundingClientRect();

    //console.log(limitsBall,limitsStage)
    

    //console.log(e.keyCode)
    
    //console.log(e.key)

    switch(e.keyCode){
        case 37:
            // move("left")
            e.preventDefault()
            if(limitsBall.left > limitsStage.left)x--;
            break;
            case 38:
                //move("up")
                e.preventDefault()
                if(limitsBall.top > limitsStage.top)y--;
                
                break;
                case 39:
                    // move("right")
                    e.preventDefault()
                    if(limitsBall.right < limitsStage.right)x++;
                    
                    break;
                    case 40:
                        // move("down")
                        e.preventDefault()
                        if(limitsBall.bottom < limitsStage.bottom)y++;
                        
                        break;
                        default:
                            break;   
                        }
                        $ball.style.transform=`translate(${x*6}px,${y*6}px)`
}



export function shortCuts(e){
    // console.log(e.type)
    // console.log(e.key)
    // console.log(`Code: ${e.keyCode}`)
    // console.log(`Ctrl: ${e.ctrlKey}`)
    // console.log(`Alt: ${e.altKey}`)
    // console.log(`Shift: ${e.shiftKey}`)
    // console.log(e)
    if(e.key==="a" && e.altKey){
        alert(`Haz lanzado una alerta con el telclado `)
    }
    if(e.key==="c" && e.altKey){
        confirm(`Haz lanzado una confirmacion con el telclado `)
    }
    if(e.key==="p" && e.altKey){
        prompt(`Haz lanzado una aviso con el telclado `)
    }
}

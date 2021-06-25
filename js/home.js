// animation text bannière

const txts = document.querySelector('.wrapper_action').children
let txtIndex = 0
const textInTimer =2500
const textOutTimer = 2000

function animateText (){
    for(let i = 0; i<txts.length; i++){
        txts[i].classList.remove('text-in','text-out')
    }
    txts[txtIndex].classList.add('text-in')

    setTimeout(()=>{
        txts[txtIndex].classList.add('text-out')
    },textOutTimer)


    setTimeout(()=>{
        if(txtIndex == txts.length-1){
            txtIndex=0
        }else{
            txtIndex ++
        }
        animateText()
    },textInTimer)  
}
window.onload=animateText()


//slider article focus

const contentFocus = document.querySelectorAll('.content_focus')
console.log(contentFocus)

const leftBtnFocus = document.querySelector('#left_focus')
const rightBtnFocus = document.querySelector('#right_focus')


function slideFocus(){
    let i = 0
        rightBtnFocus.addEventListener('click', ()=>{
            if(i<contentFocus.length-1){
                contentFocus[i].classList.remove('focus_in','translate_right','translate_left')
                i++
                contentFocus[i].classList.add('focus_in', 'translate_right')
            }else if(i===contentFocus.length-1){
                contentFocus[i].classList.remove('focus_in','translate_right','translate_left')
                i = 0
                contentFocus[i].classList.add('focus_in','translate_right')
            }    
        })

        leftBtnFocus.addEventListener('click', ()=>{
            if(i>0){
                contentFocus[i].classList.remove('focus_in','translate_left','translate_right')
                i--
                contentFocus[i].classList.add('focus_in','translate_left')
            }else if(i===0){
                contentFocus[i].classList.remove('focus_in','translate_left','translate_right')
                i = contentFocus.length-1
                contentFocus[i].classList.add('focus_in','translate_left')
            }    
        })
}

window.onload=slideFocus()
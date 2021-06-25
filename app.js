//Menu collant

const scrollY = function(){
    let supportPageOffset = window.pageXOffset !== undefined
    let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat")
    return  supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
}
const pageNav= document.querySelector('#page_nav')
let rect= pageNav.getBoundingClientRect() 
let Top = rect.top + scrollY()
let rectWidth = rect.width
let fakeNav = document.createElement('div')
fakeNav.style.width = rectWidth + "px"
fakeNav.style.height = rect.height + "px"
let haveFixedClass = pageNav.classList.contains('fixed') 

window.addEventListener('scroll', ()=>{
    if(scrollY() > Top && !haveFixedClass) {
        pageNav.classList.add('fixed')
        pageNav.getElementsByClassName.width = rectWidth + "px"
        pageNav.parentNode.insertBefore(fakeNav, pageNav)
    }else{
        pageNav.classList.remove('fixed')
        pageNav.parentNode.removeChild(fakeNav)
    }
})


//menu dynamic url

const mainNavAnch=document.querySelectorAll('.main_nav_anch')
const mainNavLength = mainNavAnch.length
const currentLocation = location.href
for (let i=0; i<mainNavLength; i++){
    if(mainNavAnch[i].href === currentLocation){
        mainNavAnch[i].classList= ('main_nav_anch_active')
    }
}




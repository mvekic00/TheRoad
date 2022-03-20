const colors = ['#6495ed','#7fffd4','#ffa07a','#f08080','#afeeee']

document.querySelectorAll('.navigation-button').forEach((item)=>{
    item.addEventListener('click',()=>{
        item.parentElement.parentElement.classList.toggle('change')
    })
})

let i = 0

document.querySelectorAll('.nav-link').forEach((item)=>{
    item.style.cssText = `background-color:${colors[i++]}`
})


/* document.querySelector('.open-navbar-icon').addEventListener('click',()=>{
    document.querySelector('.container').classList.add('change')
})

document.querySelector('.close-navbar-icon').addEventListener('click',()=>{
    document.querySelector('.container').classList.remove('change')
}) */

document.querySelectorAll('.navbar-icon').forEach((item)=>{
    item.addEventListener('click',()=>{
        document.querySelector('.container').classList.toggle('change')
    })
})
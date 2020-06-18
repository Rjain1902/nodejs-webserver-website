
console.log('client side java script file is runing')
// fetch('http://puzzle.mead.io/puzzle').then((response)=>
// {
//     response.json().then((data)=>
//     {
//         console.log(data)
//     })
// })

fetch('http://localhost:3000/weather?address=Boston').then((response)=>
{
    response.json().then((data)=>
    {
        if(data.error){
            console.log(error)
        }
        else{
            console.log(data)
        }
    })
})


const   weatherForm= document.querySelector('form')
const search=document.querySelector('input')
const messageone=   document.querySelector("#message-1")
messageone.textContent=''

const messagetwo=   document.querySelector("#message-2")
messagetwo.textContent=''

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location=search.value

    fetch('/weather?address=' +location+ '').then((response)=>
{
    response.json().then((data)=>
    {
        if(data.error){
            messageone.textContent=data.error
            messagetwo.textContent='undefined'
        }
        else{
           messageone.textContent='undefined'
           messagetwo.textContent=data.data
           console.log(data)
        }
    })
})

   // console.log(location)
})


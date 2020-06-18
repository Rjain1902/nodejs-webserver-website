const express=require('express')
const path=require('path')
const hbs= require('hbs')
const geocode=require('./Utils/geocode')
const forecast=require('./Utils/forecast')


console.log(__dirname)
console.log(path.join(__dirname,'../public'))

console.log(__filename)

const app=express()
const port =process.env.PORT || 3000


const publicdirectorypath=path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../tempelate/views')
const partialpaths=path.join(__dirname,'../tempelate/partials')


hbs.registerPartials(partialpaths)
app.set('view engine','hbs')
app.set('views',viewsPath)
app.use(express.static(publicdirectorypath))

 app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather app',
        name:'Rishabh Jain'
    })

})

    

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'Rishabh Jain'
    })

})


app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        name:'Rishabh Jain'
    })
})


app.get('/products',(req,res)=>{
    //console.log(req.query)
    if(!req.query.search){
        return res.send({
            error:'you must provide search item'
        })
    }
    else{
       return res.send(req.query.search)
    }
   
    res.send({
       error
    })
})


app.get('/help/*',(req,res)=>{
    res.render('404',{
        message:'help page not found'
    })
})

app.get('/weather',(req,res)=>
{
    if(!req.query.address)
    {
        return res.send
        ({
            error:'enter an address'
        })
    }
    else
    {
        geocode(req.query.address,(error,{latitude,longitude}={})=>
        {
            if(error)
            {
                return res.send
                ({
                    error:error
                })
            }
                else
                {
                    forecast(latitude,longitude,(error,data)=>{
                        if(error){
                            return res.send({
                                error:error
                            })
                        }
                        else{
                            return res.send({
                                data:data
                            })

                        }
                        
                    })

                }
            

        })
        

    }
   
})


app.get('*',(req,res)=>{
    res.render('404',{
        message:'error 404 not found'
    })
})


// app.get('/help',(req,res)=>{
//  res.send([{
//      name:'Rishabh',
//      age:22
//  },{
//      name:'Sambhav',
//      age:11
//  }])
// })


// app.get('/about',(req,res)=>{
//     res.send('<h1>Express.js</h1>')
//    })

   


app.listen(port,()=>
{
    console.log('server is running')
})
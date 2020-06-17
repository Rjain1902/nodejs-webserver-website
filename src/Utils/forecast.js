const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=c16b8481baa81001f917ef9577e071d8&query=' + latitude + ',' + longitude + ' "
    request({url:url,json:true},(error,{body})=>{
        if(error){
            callback('Network issue',undefined)
        }
        else if(body.error){
            callback('Enter proper data',undefined)
        }
        else{
            callback(undefined,body.current.temperature)
        }

    })

}

module.exports=forecast
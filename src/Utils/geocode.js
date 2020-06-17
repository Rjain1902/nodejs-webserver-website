const request=require('request')

const geocode=(address,callback)=>
{
    
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicmlzaGFiaGphaW4tMTkwMiIsImEiOiJja2E0ejNydzMwaTYwM2ZvYXlyMGNnZnppIn0.Lt5V7_BHY8Kep4X3O6rZOg"
    request({url:url,json:true},(error,{body})=>{ 
        if(error){
            callback('network issue',undefined)
        }
        else if(body.message){
            callback('enter correct address',undefined)
        }
        else{
            callback(undefined,{
                latitude:body.features[0].center[0],
                longitude:body.features[0].center[1],
                location:body.features[0].place_name
            })
        }
    
    
    })
}

module.exports=geocode

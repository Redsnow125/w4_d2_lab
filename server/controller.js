let houseDB = require('./db.json')
let houseID = 4;

module.exports = {

getHouses: (req,res) =>{
    res.status(200).send(houseDB)
},
deleteHouse: (req,res) =>{
    
    const {params,query,body} = req;
    console.log('Params: ', params, 'Query: ' , query, 'Body: ',body)
    let {id}  = req.params;
    let index = houseDB.findIndex((house) => house.id === +params.id)
    houseDB.splice(index,1)
    res.status(200).send(houseDB)
},
createHouse: (req,res) =>{
    const {params,query,body} = req;
    console.log('Params: ', params, 'Query: ' , query, 'Body: ',body)
    body.id = houseID;
    houseDB.push(body)
    res.status(200).send(houseDB)
    houseID++;
},
updateHouse:(req,res) =>{
    const {params,query,body} = req;
    let priceAdj = 10000;
    console.log('Params: ', params, 'Query: ' , query, 'Body: ',body)
    let index = houseDB.findIndex((house) => house.id === +params.id)
    if(body.type === 'plus'){
        console.log('add')
        houseDB[index].price += priceAdj;
    }else if(body.type === 'minus'&& houseDB[index].price > 10000){
        console.log('minus')
        houseDB[index].price -= priceAdj;
    }
    res.status(200).send(houseDB)
}























}
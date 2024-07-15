const db = require("../config/db")

//GET Function
const getRef=async (req,res) =>{
 try {
    const data = await db.query('SELECT * FROM referal')
    res.status(200).json(data)
    if (!data){
        return res.status(404).send({success:"false",message:"No data found" })
    }
 } catch (error) {
    console.log(error)
    res.status(500).send({
        success:"false",
        message: "GET Method Error",

    })
 }
}//GET:id Function
const getRefById=async (req,res) =>{
    try {
       const refid=req.params.id 
       if(!refid){
        return res.status(404).send({success:"false",message:"No id found" })
       }
       const data = await db.query('SELECT * FROM referal WHERE id=?',[refid])
       res.status(200).send({
        success:"true",
        refDetails:data[0]
       })
       if(!data){
        return res.status(404).send({success:"false",message:"No data found" })
       }
    } catch (error) {
        console.log(error)
    res.status(500).send({
        success:"false",
        message: "GET By Id Method Error",

    })
    }
}
module.exports=getRefById
module.exports=getRef

//POST Function
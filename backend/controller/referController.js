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
        refDetails:data
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
const createRef = async(req,res)=>{
try {
    const{name,email,password}=req.body
    if(!name||!email||!password){
        return res.status(400).send({success:"false",message:"Please fill all the fields"})
    }
    const data = await db.query('INSERT INTO referal(name,email,password) VALUES(? ,?, ?)',[name,email,password])
   
    if(!data){
        return res.status(404).send({success:"false",message:"No data found" })
    } 
    res.status(200).send({success:"true",message:"Referal created successfully",data})
} catch (error) {
    res.status(500).send({
        success:"false",
        message: "Error Creating Ref",

    })
}
}
const updateRef = async(req,res)=>{
    try {
        const refid=req.params.id 
        if(!refid){
            return res.status(404).send({success:"false",message:"No id found" })
           }

        const{name,email,password}=req.body
        if(!name||!email||!password){
            return res.status(400).send({success:"false",message:"Please fill all the fields"})
        }
        const data = await db.query('UPDATE referal SET name=?, email=?, password=? WHERE id =?',[name,email,password,refid])
        if(!data){
            return res.status(404).send({success:"false",message:"No data found" })
            }
            res.status(200).send({success:"true",message:"Referal updated successfully",data})
        
    } catch (error) {
        res.status(500).send({
            success:"false",
            message: "Error Updating Ref",
    
        })
    }
}
const deleteRef = async(req,res)=>{
    try {
        const refid=req.params.id 
        if(!refid){
            return res.status(404).send({success:"false",message:"No id found" })
           }
           const data = await db.query('DELETE FROM referal WHERE id =?',[refid])
           if(!data){
            return res.status(404).send({success:"false",message:"No data found" })
            }
            res.status(200).send({success:"true",message:"Referal deleted successfully",data})
        
    } catch (error) {
        res.status(500).send({
            success:"false",
            message: "Error Deleting Ref",
    
        })
    }
}
const deleteAllRef = async(req,res)=>{
    try {
        const data = await db.query('DELETE FROM referal')
        if(!data){
            return res.status(404).send({success:"false",message:"No data found" })
            }
            res.status(200).send({success:"true",message:"Referal deleted successfully",data})
        
    } catch (error) {
        res.status(500).send({
            success:"false",
            message: "Error Deleting All Ref",
    
        })
    }
}

module.exports={getRef,getRefById,createRef,updateRef,deleteRef,deleteAllRef}

//POST Function,
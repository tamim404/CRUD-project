const ProductModel= require("../models/ProductModel")


//Create
exports.CreateData=(req,res)=>{
    let ReadBody=req.body;
    ProductModel.create(ReadBody,(err,data)=>{
        if(err) {
            res.status(400).json({status: "fail", data: err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        };
    });
};


//Read
exports.ReadData=(req,res)=>{

    ProductModel.find((err, data)=>{
        if(err) {
            res.status(400).json({status: "fail", data: err})
        }
        else{
            res.status(200).json({status:"success",data: data})
        };

    })
};


//Read by id
exports.ReadDataById=(req,res)=>{
    let id=req.params.id;
    let Query= {_id:id}
    ProductModel.find(Query,(err, data)=>{
        if(err) {
            res.status(400).json({status: "fail", data: err})
        }
        else{
            res.status(200).json({status:"success",data: data})
        };

    })
};


//Update
exports.UpdateData=(req,res)=>{
    let id=req.params.id;
    let Query= {_id:id}
    let reqBody=req.body;
    ProductModel.updateOne(Query,reqBody,(err,data)=>{
        if(err) {
            res.status(400).json({status: "fail", data: err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        };

    })
};



//Delete
exports.DeleteData=(req,res)=>{
    let id=req.params.id;
    let Query= {_id:id}

    ProductModel.remove(Query,(err,data)=>{
        if(err) {
            res.status(400).json({status: "fail", data: err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        };

    })
};
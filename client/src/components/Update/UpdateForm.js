import React, {Fragment, useEffect, useRef} from 'react';
import isEmpty from "validator/es/lib/isEmpty";
import {ErrorToast, SuccessToast} from "../../helper/ValidationHelper";
import {Create, ReadById} from "../../APIservices/CRUDservice";
import FullScreenLoader from "../Common/FullScreenLoader";


const UpdateForm = (props) => {


    let ProductName,ProductCode,Img,UnitPrice,Qty,TotalPrice,Loader=useRef();

    // let SaveData=()=>{
    //     let Product_Name=ProductName.value;
    //     let Product_Code=ProductCode.value;
    //     let Product_Img=Img.value;
    //     let Unit_Price=UnitPrice.value;
    //     let Product_Qty=Qty.value;
    //     let Total_Price=TotalPrice.value;
    //
    //     if (isEmpty(Product_Name)){
    //         ErrorToast("Product Name Required")
    //     }else if (isEmpty(Product_Code)){
    //         ErrorToast("Product Code Required")
    //     }else if (isEmpty(Product_Img)){
    //         ErrorToast("Product Image Required")
    //     }else if (isEmpty(Unit_Price)){
    //         ErrorToast("Product Price Required")
    //     }else if (isEmpty(Product_Qty)){
    //         ErrorToast("Product Qty Required")
    //     }else if (isEmpty(Total_Price)){
    //         ErrorToast("Total Price Required")
    //     }else{
    //         Loader.classList.remove("d-none")
    //         Create(Product_Name,Product_Code,Product_Img,Unit_Price,Product_Qty,Total_Price).then((Result)=>{
    //             if (Result===true){
    //                 Loader.classList.add("d-none")
    //                 SuccessToast("Save Success")
    //
    //                 ProductName.value="";
    //                 ProductCode.value="";
    //                 Img.value="";
    //                 UnitPrice.value="";
    //                 Qty.value="";
    //                 TotalPrice.value="";
    //
    //             }else {
    //                 ErrorToast("Fail Try Again")
    //             }
    //         })
    //     }
    // }

    useEffect( ()=>{

        console.log(props.id)
        ReadById(props.id).then((result)=>{
            console.log(JSON.stringify(result?.data))
        }).catch(err => {
            console.log(err)
        });
    },[])



    return (
        <Fragment>
            <div className="container">
                <h2>Update Product</h2>
                <div className="row">

                    <div className="col-md-4 p-2">
                        <label>Product Name</label>
                        <input ref={(input)=>ProductName=input} type="text" className="form-control"/>
                    </div>

                    <div className="col-md-4 p-2">
                        <label>Product Code</label>
                        <input ref={(input)=>ProductCode=input} type="text" className="form-control"/>
                    </div>

                    <div className="col-md-4 p-2">
                        <label>Image</label>
                        <input ref={(input)=>Img=input} type="text" className="form-control"/>
                    </div>

                    <div className="col-md-4 p-2">
                        <label>Unit Price</label>
                        <input ref={(input)=>UnitPrice=input} type="text" className="form-control"/>
                    </div>

                    <div className="col-md-4 p-2">
                        <label>Qty</label>
                        <input ref={(input)=>Qty=input} type="text" className="form-control"/>
                    </div>

                    <div className="col-md-4 p-2">
                        <label>Total Price</label>
                        <input ref={(input)=>TotalPrice=input} type="text" className="form-control"/>
                    </div>

                </div>

                <div className="row w-100">
                    <div className="col-md-6 p-3 m-auto">
                        <button className="btn btn-primary w-100">Save</button>
                    </div>

                </div>


            </div>

            <div className="d-none" ref={(div)=>Loader=div}>
                <FullScreenLoader/>
            </div>
        </Fragment>

    );

};

export default UpdateForm;
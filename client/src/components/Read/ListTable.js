import React, {useEffect, useState} from 'react';
import {Delete, Read, Update} from "../../APIservices/CRUDservice";
import FullScreenLoader from "../Common/FullScreenLoader";
import {ErrorToast, SuccessToast} from "../../helper/ValidationHelper";
import {useNavigate} from "react-router-dom"

const ListTable = () => {
    let [DataList,SetDataList]=useState([]);
    let [Loading,SetLoading]=useState(true)

    useEffect(()=>{
        Read().then((Result)=>{
            SetDataList(Result)
            SetLoading(false)
        })

    },[])
    const navigate = useNavigate();
    const UpdateItem=(id)=>{
        navigate("/update/"+id)
    }

    const DeleteItem=(id)=>{
        Delete(id).then((Result)=>{
            if(Result===true ){
                SuccessToast("Delete Success")
                window.location.reload(true)
            }else {
                ErrorToast("Delete Fail")
            }
        })
    }


    if (Loading){
        return (
            <div>
                <FullScreenLoader/>
            </div>
        )
    }else{
        return (
            <div className="container">
                <table className="table table-active table-hover">
                    <thead>
                    <tr>
                    <th>Product Name</th>
                    <th>Product Code</th>
                    <th>Image</th>
                    <th>Unit Price</th>
                    <th>Qty</th>
                    <th>Total Price</th>
                    <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        DataList.map((item,i)=>{
                            return(
                                <tr>
                                    <td>{item.ProductName}</td>
                                    <td>{item.ProductCode}</td>
                                    <td><img className="list-img" src={item.Img}/></td>
                                    <td>{item.UnitPrice}</td>
                                    <td>{item.Qty}</td>
                                    <td>{item.TotalPrice}</td>
                                    <td>
                                        <button onClick={UpdateItem.bind(this,item._id)} className="btn btn-success mx-1">Update</button>
                                        <button onClick={DeleteItem.bind(this,item._id)}className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }


                    </tbody>
                </table>
            </div>
        );
    }

};

export default ListTable;
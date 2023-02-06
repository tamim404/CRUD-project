import axios from "axios";

/* eslint-disable */

export function Create(ProductName,ProductCode,Img,UnitPrice,Qty,TotalPrice) {
    let URL="api/v1/CreateData";
    let postBody={
        ProductName:ProductName,
        ProductCode:ProductCode,
        Img:Img,
        UnitPrice:UnitPrice,
        Qty:Qty,
        TotalPrice:TotalPrice
    }
    return axios.post(URL,postBody).then((res)=>{
        if(res.status===200){
            return true;
        }else {
            return false;
        }
    }).catch((err)=>{
        console.log(err)
        return false;
    })

}


export function Read() {
    let URL="api/v1/ReadData";
    return axios.get(URL).then((res)=>{
        if(res.status===200){
            return res.data['data'];
    }else{
            return false;
        }

    }).catch((err)=>{
        console.log(err);
        return false
    })

}


export function ReadById(id) {
    console.log("This is id"+id)
    let URL="api/v1/ReadDataById/"+id;
    return axios.get(URL).then((res)=>{
        if(res.status===200){
            return res.data;
        }else{
            return false;
        }

    }).catch((err)=>{
        console.log(err);
        return false
    })

}







export function Update(id) {
    let URL="api/v1/UpdateData/"+id;
    let postBody={
        ProductName:ProductName,
        ProductCode:ProductCode,
        Img:Img,
        UnitPrice:UnitPrice,
        Qty:Qty,
        TotalPrice:TotalPrice
    }
    return axios.post(URL,postBody).then((res)=>{
        if(res.status===200){
            return true;
        }else {
            return false;
        }
    }).catch((err)=>{
        console.log(err)
        return false;
    })

}



export function Delete(id) {
    let URL="api/v1/DeleteData/"+id;
    return axios.get(URL).then((res)=>{
        if(res.status===200){
            return true;
        }else{
            return false;
        }

    }).catch((err)=>{
        console.log(err);
        return false
    })

}
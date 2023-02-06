import React from 'react';
import NevBar from "../components/Common/NevBar";
import UpdateForm from "../components/Update/UpdateForm";
import {useParams} from "react-router";

const UpdatePage = () => {
    const Params=useParams()


    return (
        <div>
            <NevBar/>
            <UpdateForm id={Params['id']}/>
        </div>
    );
};

export default UpdatePage;
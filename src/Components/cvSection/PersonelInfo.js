import React from "react";

function PersonelInfo({ adress, email, description }) {
    return (
        <div className="personal-infos px-8 py-4 mr-4 rounded-xl break-words">
            <div className="pb-2">
                <h1 className="h1 night-blue">Description</h1>
                <p className="p primary-blue ">{description}</p>
            </div>
            <div className="py-2 ">
                <h1 className="h1 night-blue">Contact Infos</h1>
                <p className="p primary-blue">{adress}</p>
                <p className="p primary-blue">{email}</p>
            </div>
            <div className="py-2">
                <h1 className="h1 night-blue">Referances</h1>
                <p className="p primary-blue">dsfsdafsadf</p>
            </div>
        </div>
    );
}

export default PersonelInfo;

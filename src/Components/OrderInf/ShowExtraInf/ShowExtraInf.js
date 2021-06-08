import React from "react";

const ShowExtraInf = ({option}) => {
    return(
            <div className="item-form">
                <div className="item-name">
                    {option}
                </div>
                <div className="item-line">
                </div>
                <div className="item-value">
                    Да
                </div>
            </div>
    );
};

export default ShowExtraInf;
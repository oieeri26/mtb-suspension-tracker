import React from 'react';
import BikeSummary from './BikesSummary';
import { Link } from "react-router-dom";


const BikeList = ({bikes}) => {
    return (
        <div className="">
            { bikes && bikes.map(bike => {
                return (
                    <Link to={"/bike/" + bike.id} key={bike.id} >>
                        <BikeSummary bike={bike} />
                    </Link>
                );
            })}
        </div>
    )
}
export default BikeList


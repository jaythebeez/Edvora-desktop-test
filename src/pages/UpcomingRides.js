import { useEffect } from "react";
import RideCard from "../components/RideCard";
const UpcomingRides = ({rides}) => {

    useEffect(()=>{
        console.log(rides)
    },[])

    return ( 
        <>
            {rides && rides.map(ride=> ride.future && <RideCard ride={ride} key={ride.id}/>)}
        </>
    );
}
 
export default UpcomingRides;
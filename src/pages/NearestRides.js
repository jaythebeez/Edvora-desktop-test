import { useEffect, useState } from "react";
import RideCard from "../components/RideCard";


const NearestRides = ({rides}) => {
    const [sortedRides, setSortedRides] = useState(null);
    
    useEffect(()=>{
        if (rides){
          setSortedRides(
            [...rides].sort((a,b)=>a.distance-b.distance)
          )
        }
      },[rides])

    return ( 
        <>
            {sortedRides && sortedRides.map(ride=>(<RideCard ride={ride} key={ride.id}/>))}
        </>
     );
}
 
export default NearestRides;
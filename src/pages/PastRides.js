import RideCard from "../components/RideCard";

const PastRides = ({rides}) => {
    return ( 
        <>
            {rides && rides.map(ride=> ride.past && <RideCard ride={ride} key={ride.id}/>)}
        </>
    );
}
 
export default PastRides;
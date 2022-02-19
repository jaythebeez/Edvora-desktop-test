import styles from './ridecard.module.css';
import mapImage from '../../assets/map-ride.png'
import { useEffect } from 'react';


const RideCard = ({ride}) => {
    return ( 
        <div className={styles.ride_card}>
            <div className={styles.image_container}>
                <img src={mapImage} className={styles.image} alt="Map"/>
            </div>
            <ul className={styles.ride_details}>
                <li><span className={styles.key}>Ride id:</span>  <span className={styles.value}>{ride.id}</span></li>
                <li><span className={styles.key}>Origin Station:</span>  <span className={styles.value}>{ride.origin_station_code}</span></li>
                <li><span className={styles.key}>station_path:</span>  <span className={styles.value}>[{ride.station_path.join(',')}]</span></li>
                <li><span className={styles.key}>Date:</span>  <span className={styles.value}>{ride.dateString}</span></li>
                <li><span className={styles.key}>Distance:</span>  <span className={styles.value}>{ride.distance}</span></li>
            </ul>
            <div className={styles.ride_floaters}>
                <div className={styles.ride_floater}>{ride.city}</div>
                <div className={styles.ride_floater}>{ride.state}</div>
            </div>
        </div>
    );
}
 
export default RideCard;
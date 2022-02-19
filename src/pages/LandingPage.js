import { Routes, Route } from "react-router";
import NearestRides from "./NearestRides";
import PastRides from "./PastRides";
import UpcomingRides from "./UpcomingRides";
import styles from './pages.module.css';
import Navbar from '../components/Navbar';
import { useEffect, useState, useContext } from "react";
import date from "date-and-time";
import ordinal from 'date-and-time/plugin/ordinal';
import { UserContext } from "../contexts/UserContext";


date.plugin(ordinal);

const LandingPage = () => {
    //get user data from global context
    const {user} = useContext(UserContext);

    const [filter,setFilter] = useState({city:'', state:''});
    const [newRides, setNewRides] = useState(null); 


    const [rides, setRides] = useState([
        {
          id:'001',
          origin_station_code: 23,
          station_path: [23, 42, 45, 48, 56, 60, 77, 81, 93],
          destination_station_code: 93,
          date: 1644924365,
          map_url: "url",
          state: 'Maharasht',
          city: "Panvel"
        },
        {
          id: '002',
          origin_station_code: 20,
          station_path: [20, 39, 40, 42, 54, 63, 72, 88, 98],
          destination_station_code: 98,
          date: 1644924365,
          map_url: "url",
          state: 'Maharashtra',
          city: "Panvel"
        },
        {
          id: '003',
          origin_station_code: 13,
          station_path: [13, 25, 41, 48, 59, 64, 75, 81, 91],
          destination_station_code: 91,
          date: 1644924365,
          map_url: "url",
          state: 'Maharashtra',
          city: "Panvel"
        },
    ]);

    //function to add Filter on every click
    const addFilter = (e,value) => setFilter({...filter, ...value});

    //function to format date from timestamp into String
    const parseDate = (timeStamp) =>{
      const time = new Date(timeStamp * 1000);
      return date.format(time, 'DDD MMM YYYY HH:mm');
    }

    //useEffect hook to run every time filter changes
    useEffect(()=>{
      const goal = user.station_code;
      const today = Date.now();
      setNewRides(
        rides.map(ride=>{
            const closest = ride.station_path.reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev)
            const distance = closest - goal;
            const dateString = parseDate(ride.date);
            const past = ride.date * 1000 < today ? true : false;
            const future = ride.date * 1000 > today ? true : false;
            return {...ride, distance, dateString, past, future}
        }) 
      )
      
    },[filter]);


    useEffect(()=>{
      setNewRides(newRides => {
        if(filter.state){
          return newRides.filter(ride=> ride.state == filter.state)
        }
        if(filter.city){
          return newRides.filter(ride=> ride.city == filter.city)
        }
        else{
          return newRides;
        }
      })
    },[filter])
    return ( 
      <>
        <Navbar rides={rides} addFilter={addFilter}/>
        <div className={styles.ride_grid_container}>
            <Routes>
                <Route path='/' element={<NearestRides rides={newRides} />}  />
                <Route path='/past' element={<PastRides rides={newRides} />}/>
                <Route path='/upcoming' element={<UpcomingRides rides={newRides} />}/>
            </Routes>
        </div>
      </>
    );
}
 
export default LandingPage;
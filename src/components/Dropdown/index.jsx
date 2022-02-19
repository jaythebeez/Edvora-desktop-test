import { useEffect, useState } from 'react';
import styles from './dropdown.module.css';



const Dropdown = ({states, cities, addFilter}) => {


    useEffect(()=>{
        console.log(states);
    })
    return ( 
        <div className={styles.dropdown}>
            <form>
                <div className={styles.filter_header}>Filter</div>
                <div className={styles.select_container} onChange={(e)=>addFilter(e, {state: e.target.value})}>
                    <select name="state" >
                        <option value="" selected disabled hidden>State</option>
                        {states.map(state=>(<option value={state}>{state}</option>))}
                    </select>
                </div>
                <div className={styles.select_container}>
                    <select name="city" onChange={(e)=>addFilter(e, {city: e.target.value})}>
                        <option value="" selected disabled hidden>City</option>
                        {cities.map(city=>(<option value={city}>{city}</option>))}
                    </select>
                </div>
            </form>
        </div>
    );
}
 
export default Dropdown;

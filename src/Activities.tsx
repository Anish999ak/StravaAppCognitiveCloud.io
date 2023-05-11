//@ts-nocheck
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);
  const accessToken = Cookies.get('accessToken')
       console.log(accessToken)
  useEffect(() => {
    const getActivities = async () => {
      const url = 'https://www.strava.com/api/v3/athlete/activities';
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setActivities(response.data);
    };

    if (accessToken) {
      getActivities();
    }
  }, [accessToken]);

console.log(activities)

const  handleCreateActivity  = () =>{
  navigation.navigate('createactivities')
}

  
  return (
    <div>
      <h1>My Activities</h1>
      <button onClick={()=>{handleCreateActivity()}}>CreateActivity</button>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(300px,500px))',justifyContent:'space-around',flexDirection:'row',alignItems:'flex-start',gap:'20px',flexWrap:'wrap'}}>
        {activities.map((data)=>{
        return(
          <>
          <div style={{padding:'10px', backgroundColor:'orange',display:'flex',alignItems:'flex-start',textAlign:'center',flexWrap:'wrap'}}>
            <h1>Name:{data?.name}</h1>
          <h1>SportType:{data?.sport_type}</h1>
          <h1>Distance:{data?.distance}</h1>
          <h1>AverageSpeed:{data?.average_speed}</h1>
          <h1>MaxSpeed:{data?.max_speed}</h1>
          </div>
          </>
        )
      })}
      </div>
    </div>
  );
};

export default ActivitiesPage;

//@ts-nocheck
import React , {useState} from 'react'
import Cookies from 'js-cookie';
import axios from 'axios';
const CreateActivities = () => {

    const [open, setOpen] = useState(false);
    const [name, setname] = useState('');
    const [type, setType] = useState('');
    const [sport_type, setsport_type] = useState('');
    const [elapsed_time, setelapsed_time] = useState(0);
    const [description, setdescription] = useState('');
    const [distance, setdistance] = useState(0);
    const [trainer, settrainer] = useState(0);
    const [commute, setcommute] = useState(0);
   console.log(name)
    const handleCreate = async () => {
        const start_date_local = new Date().toISOString()
        console.log('chk')
        let access_token = Cookies.get('accessToken')
        if(access_token && start_date_local){
        axios
          .post(
            `https://www.strava.com/api/v3/activities?access_token=${access_token}&name=${name}&sport_type=${sport_type}&start_date_local=${start_date_local}&elapsed_time=${+elapsed_time}&description=${description}&distance=${+distance}&trainer=${+trainer}&commute=${+commute}&type=${type}`,
          )

          .then((response)=>{
  navigation.navigate('activities')
            
            console.log(response)})
          .catch(err => {
            console.log(err);
          });
        }
      };

    
  return (
    <div>
   <input placeholder='Name' onChange={(e)=>{setname(e.target.value)}}></input>
   <input placeholder='Type' onChange={(e)=>{setType(e.target.value)}}></input>
   <input placeholder='sport_type' onChange={(e)=>{setsport_type(e.target.value)}}></input>
   <input placeholder='elapsed_time' onChange={(e)=>{setelapsed_time(e.target.value)}}></input>
   <input placeholder='description' onChange={(e)=>{setdescription(e.target.value)}}></input>
   <input placeholder='distance' onChange={(e)=>{setdistance(e.target.value)}}></input>
   <input placeholder='trainer' onChange={(e)=>{settrainer(e.target.value)}}></input>
   <input placeholder='commute' onChange={(e)=>{setcommute(e.target.value)}}></input>
   <button onClick={handleCreate}>Create</button>
    </div>
  )
}

export default CreateActivities
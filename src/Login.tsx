//@ts-nocheck
import React, { useState, useEffect } from "react";
import axios from 'axios'
import Cookies from "js-cookie";

const CLIENT_ID = "106811";
const CLIENT_SECRET = '5b93f93b9536407cf88b71ccf4c9bedfaf51f710'
const REDIRECT_URI = "http://www.strava.com/oauth/authorize?client_id=106811&response_type=code&redirect_uri=http://localhost:3000&approval_prompt=force&scope=read";
const STRAVA_AUTH_URL = `https://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&approval_prompt=auto&scope=activity:read_all,activity:write`;





const Login = () => {
    const [authCode, setAuthCode] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    const handleStravaLogin = async () => {
          try {
            window.location.href = STRAVA_AUTH_URL;
        } catch (err) {
            console.error(err);
        }
    };


    const handleTokenRequest = async (code:any) => {
        try {
            const response = await axios.post(
                'https://www.strava.com/oauth/token',
                {
                    client_id: CLIENT_ID,
                    client_secret: CLIENT_SECRET,
                    code: code,
                    grant_type: "authorization_code",
                    scope: "read_all,activity:read_all",
                }
            );
            const access_token = response.data.access_token
            console.log(access_token)
            setAccessToken(access_token); 
            Cookies.set('accessToken' , access_token)
            navigation.navigate('activities')
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const code = queryParams.get("code");
        if (code && !authCode) {
            setAuthCode(code);
            handleTokenRequest(code);
        }
    }, [])

    return (
        <div>
                <button onClick={handleStravaLogin}>Login with Strava</button>
        </div>
    );
};

export default Login;

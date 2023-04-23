import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, getTime, getGoal } from "../Firebase"

export default function Profile(){
    const[user] = useAuthState(auth)
    return (
        <div className="userProfile">
            <h1> {user.displayName} </h1>
            <img src={user.photoURL}/>
        </div>
    )
}

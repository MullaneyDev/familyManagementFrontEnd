import React from 'react'
import { useState } from "react";
import ProfileSelection from '../ProfileSelection/ProfileSelection';

const NotLoggedIn = () => {
    const [verified,setVerified] =  useState(false)

    if (!verified) {
        return (
            <div>log in/register</div>
        )
    }
  return (
    <div><ProfileSelection /></div>
  )
}

export default NotLoggedIn
import { Helmet } from "react-helmet"
import React from "react"

export const MainHelmet = () => {
    const profile = require("../assets/profileInformation.json")
    return (
        <Helmet>
            <meta charset="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <title>{profile.firstName} {profile.surName} - Curriculum Vitae</title>
            <meta name="description" content={profile.firstName + " " + profile.surName + " - Curriculum Vitae"}></meta>
            <meta name="robots" content="index, follow"></meta>
            <meta property="og:title" content={profile.firstName + " " + profile.surName}></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:image" content="/profiledata/profilePictureFull.jpeg"></meta>
            <meta property="og:description" content={profile.firstName + " " + profile.surName + " - Curriculum Vitae"}></meta>
            <meta property="og:site_name" content={profile.firstName + " " + profile.surName}></meta>
        </Helmet>
    )    
}
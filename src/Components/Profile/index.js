import React from 'react';
import s from './profile.module.css';

const Profile = ({ profile }) => {

   return (
      <div className={s.container}>
         {profile?.photos.large ?
            <div><img src={profile.photos.large} alt="photo" /></div> : false}
         <div className={s.containerInfo}>
            <div>Name: {profile?.fullName}</div>
            <div>AboutMe: {profile?.aboutMe}</div>
         </div>
      </div>
   )
}
export default Profile;
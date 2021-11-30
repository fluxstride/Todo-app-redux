import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	profileName
} from '../../features/counter/counterSlice';
import "./style.css"
import profilePic from "./alex-suprun-ZHvM3XIOHoE-unsplash.jpg"

const ProfileCard = () => {
	const name = useSelector(profileName)
	return (
		<div className="main__container">
			<div className="profilecard__container">
				<img src={profilePic} alt="profile" className="profile__photo" width='100px' />
				<p className="profile__name">{name}</p>
				<div className="line"></div>
				<p className="profile__position">
					Fluxtride CEO
				</p>
				<p className="profile__description">
					Hello my name is adekoya samuel and i am a software developer and i love my job
				</p>
			</div>
		</div>

	)
}


export default ProfileCard;


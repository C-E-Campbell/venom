import React from "react";
import style from "./Hero.module.scss";
import VENOMHEAD from "../../assets/head.png";
import VENOMSHOULDER from "../../assets/shoulder.png";

import Header from "../Header/Header";
export default function Hero() {
	return (
		<div className={style.hero}>
			<Header />
			<img className={style.head} src={VENOMHEAD} alt='venomface' />
			<img className={style.shoulder} src={VENOMSHOULDER} alt='venombody' />
			<h1>VENOM</h1>
		</div>
	);
}

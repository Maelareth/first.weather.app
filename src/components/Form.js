import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="Stad..."/>
		<input type="text" name="country" placeholder="Land..."/>
		<button>Hitta väder</button>
	</form>
);

export default Form;

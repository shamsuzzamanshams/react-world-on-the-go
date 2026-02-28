import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css';

const Countries = ({ countriesPromise }) => {
	const [visitedCountries, setVisitedCountries] = useState([]);
	const [visitedFlag, setVisitedFlag] = useState([]);

	const handelVisitedCountries = (country) => {
		console.log('Handle Visited Click', country);
		const newVisitedCountries = [...visitedCountries, country];
		setVisitedCountries(newVisitedCountries);

	}

	const handelVisitedFlag = (flag) => {
		const newVisitedFlag = [...visitedFlag, flag];
		setVisitedFlag(newVisitedFlag);

	}

	const countriesData = use(countriesPromise);
	const countries = countriesData.countries

	return (
		<div>
			<h1>In the countries: {countries.length}</h1>
			<h2>Total Visited Countries: {visitedCountries.length}</h2>
			<ol>
				{
					visitedCountries.map(country => <li key={country.cca3.cca3} >{country.name.common}</li>)
				}
			</ol>
			<h2>Total Visited Flag: {visitedFlag.length}</h2>
			<div className='visited-flag-container'>
				{
					visitedFlag.map((flag,index) => <img key={index} src={flag}></img>)
				}
			</div>
			<div className='countries'>
				{
					countries.map(country => <Country key={country.cca3.cca3} country={country}
						handelVisitedCountries={handelVisitedCountries}
						handelVisitedFlag={handelVisitedFlag}></Country>)
				}
			</div>
		</div>
	);
};

export default Countries;
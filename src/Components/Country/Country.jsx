import React, { useState } from 'react';
import './Country.css';

const Country = ({ country, handelVisitedCountries, handelVisitedFlag }) => {
	const [visited, setVisited] = useState(false)
	// console.log(country.area.area);
	// console.log(handelVisitedCountries);


	const handelVisited = () => {
		// setVisited(true);
		setVisited(!visited);
		handelVisitedCountries(country);

	}

	return (
		<div className={`country ${visited && 'country-visited'}`}>
			<img src={country.flags.flags.png} alt={country.flags.flags.alt} />
			<h3>Name: {country.name.common}</h3>
			<p>Population: {country.population.population}</p>
			<p>Region: {country.region.region}</p>
			<p>Area: {country.area.area}
				{country.area.area > 300000 ? " Big Country" : " Small Country"}
			</p>
			<button onClick={handelVisited}>
				{visited ? 'Visited' : 'Not Visited'}
			</button>
			<button onClick={() => handelVisitedFlag(country.flags.flags.png)}>Add Visited Flag</button>
		</div>
	);
};

export default Country;
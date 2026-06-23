import Hero from '@/components/Home/Hero';
import LatestTasks from '@/components/Home/LatestTasks';
import Stats from '@/components/Home/Stats';
import React from 'react';

const Home = () => {
	return (
		<div className="container mx-auto">
			<Hero />
			<Stats />
			<LatestTasks />
		</div>
	);
};

export default Home;
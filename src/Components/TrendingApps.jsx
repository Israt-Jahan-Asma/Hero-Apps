import React from 'react';
import AppCards from './AppCards/AppCards';
import { useLoaderData } from 'react-router';
import useApps from '../Hooks/useApps';
import { Github } from 'lucide-react';

const TrendingApps = () => {
    const {apps, loading, error} = useApps()
    
    const featureApps = apps.slice(0, 8)
    return (
        <div className='text-center py-20 bg-[#f5f5f5] space-y-4 mx-auto'>
            <h2 className='font-bold text-5xl'>Trending Apps</h2>
            <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 w-10/12 mx-auto py-5'>
                {
                    featureApps.map(app=>(<AppCards key={apps.id} app={app}></AppCards>))
                }
            </div>
            <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-md px-8" href='/apps'> Show All</a>
        </div>
    );
};

export default TrendingApps;
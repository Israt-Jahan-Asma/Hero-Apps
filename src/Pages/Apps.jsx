import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCards from '../Components/AppCards/AppCards';
import { Search } from 'lucide-react';
import { Link } from 'react-router';

const Apps = () => {
    const { apps, loading, error, id } = useApps()

    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchApps = term? apps.filter(app=>app.companyName.toLocaleLowerCase().includes(term)) : apps

    

    return (
        <div className='text-center py-20 bg-[#f5f5f5] space-y-4 mx-auto'>
            <h2 className='font-bold text-5xl'>Our All Applications</h2>
            <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between mx-auto w-10/12'>
                <p className='font-semibold text-2xl'>({searchApps.length}) Apps Found</p>
                <label className="input input-bordered bg-[#f5f5f5] flex items-center gap-2">
                    <Search className="text-gray-400" />
                    <input value={search} onChange={(e)=> setSearch(e.target.value)} type="search" className="grow" placeholder="Search Apps" />
                </label>

            </div>
            
            <div >
                {
                    searchApps.length> 0 ?<div className='grid grid-cols-1 md:grid-cols-4 gap-4 w-10/12 mx-auto py-5'>
                {
                     searchApps.map(app => (<AppCards key={app.id} app={app}></AppCards>)) 
                } 
            </div>: <p className='text-center font-bold text-6xl'>No Apps Found {search}</p>
                }
            
            </div> 
            
        </div>
    );

};

export default Apps;
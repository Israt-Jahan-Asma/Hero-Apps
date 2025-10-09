import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import { Download, Key, Star } from 'lucide-react';


const Installation = () => {
    const [sortOrder, setOrder] = useState(null)
    const [appList, setAppList] = useState([])

    useEffect(() => {
        const saveList = JSON.parse(localStorage.getItem('Installed'))
        if (saveList) setAppList(saveList)
        console.log(saveList);

    }, [])

    const sortedItem = (()=>{
        if(sortOrder=== 'download-asc'){
            return [...appList].sort((a,b)=> a.downloads - b.downloads)
        } else if(sortOrder=== 'download-desc'){
            return [...appList].sort((a,b)=> b.downloads - a.downloads)
    } else{
        return appList
    }
    }) ()

    return (
        <div className='text-center py-20 bg-[#f5f5f5]  '>
            <div className='w-10/12 mx-auto space-y-5'>
                <h2 className='font-bold text-5xl'>Your Installed Apps</h2>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                <div className='flex flex-col md:flex-row justify-between items-center space-y-3'>
                    <p className='font-semibold text-2xl'>({appList.length}) Apps Found</p>
                    <label className='form-control  mx-w-xs'>
                        <select className='border-1 border-gray-300 select' value={sortOrder} onChange={e => setOrder(e.target.value)}>
                            <option value="none">Sort by Download</option>
                            <option value="download-asc">Low to High</option>
                            <option value="download-desc">High to Low </option>

                        </select>
                    </label>

                </div>

                {/* installed app card */}

                {
                    sortedItem.map(app => (
                        <div className='bg-white md:flex gap-4 justify-between p-4 rounded-sm items-center space-y-3'>
                            <div className='md:flex gap-4 justify-between space-y-3'>
                                <img className='md:w-20 md:h-20 rounded-sm mx-auto' src={app.image} alt="" />
                                <div className='md:text-left content-center space-y-3'>
                                    <h3 className='text-[20px] font-medium'>{app.title}</h3>

                                    <div className='flex justify-center md:text-left space-x-5'>
                                        <div className='flex gap-2 items-center  rounded-sm'>
                                            <Download className='w-4 h-4 text-[#00D390]' />
                                            <p className='text-[#00D390]'>{app.downloads}</p>
                                        </div>
                                        <div className='flex gap-2 items-center rounded-sm'>
                                            <Star className='w-4 h-4 text-[#FF8811]' />
                                            <p className='text-[#FF8811]'>{app.ratingAvg}</p>
                                        </div>
                                        <div className='flex gap-2 items-center rounded-sm'>

                                            <p className='text-[#627382]'>{app.size} MB</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <button className='bg-[#00D390] text-white font-semibold px-10 py-4 rounded-sm'>Uninstall</button>
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Installation;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import downloadsIcon from '../assets/icon-downloads.png';
import reviewIcon from '../assets/icon-ratings.png'
import ratingIcon from '../assets/icon-review.png'
import { toast } from 'react-toastify';
import ErrorApp from '../ErrorPage/ErrorApp';
import { BarChart, Bar, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { updateAppList, loadAppList } from '../utils/localStorage';



const AppDetails = () => {
    const { id } = useParams();
    const { apps, loading, error } = useApps();
    const [installed, setInstalled] = useState(false);

    const app = apps.find(app => String(app.id) === id);


    useEffect(() => {
        if (!app) return;
        const existingList = loadAppList(); 
        const isAlreadyInstalled = existingList.some(existingApp => existingApp.id === app.id);
        setInstalled(isAlreadyInstalled);
    }, [app]);

    if (!app) return <ErrorApp></ErrorApp>;
    
    const { description, companyName, title, image, downloads, ratingAvg, reviews, size, ratings } = app;

    const chartData = ratings.map(r => ({
        star: `${r.name}`,
        users: r.count
    }));


    const handleInstallBtn = () => {
    //     const existingList = JSON.parse(localStorage.getItem('Installed')) || [];
    //     const isDuplicate = existingList.some(existingApp => existingApp.id === app.id);

    //     if (isDuplicate) {
    //         setInstalled(true);
    //         return;
    //     }

    //     const updatedList = [...existingList, app];
    //     localStorage.setItem('Installed', JSON.stringify(updatedList));
    //     setInstalled(true);
    //     toast.success('App installed successfully!');

     const updatedList = updateAppList(app); 
    if (updatedList.some(a => a.id === app.id)) {
        setInstalled(true);
        toast.success('App installed successfully!');
    }
    };


    return (
        <>
            <div className=' py-20 bg-[#f5f5f5] '>
                <div className='w-10/12 mx-auto'>
                    <div className='flex flex-col md:flex-row gap-10 '>
                        <img className='md:w-80 h-80 object-cover' src={image} alt="" />

                        <div className='w-full flex flex-col justify-between space-y-3'>
                            <div>
                                <h2 className='font-bold text-3xl'>{title}</h2>
                                <p className='text-[20px] text-#627382] font-light'>Developed by  <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-semibold'>{companyName}</span></p>
                            </div>
                            <hr className='text-gray-300 ' />

                            <div className='grid grid-cols-3 md:w-[50%] '>
                                <div className='space-y-2'>
                                    <img className='w-[40px] h-[40px]' src={downloadsIcon} alt="" />
                                    <p className='text-[#001931]'>Downloads</p>
                                    <h2 className='text-[#001931] font-extrabold md:text-[40px] leading-none'>{downloads}</h2>
                                </div>
                                <div className='space-y-2'>
                                    <img className='w-[40px] h-[40px]' src={reviewIcon} alt="" />
                                    <p className='text-[#001931]'>Average Ratings</p>
                                    {

                                    }
                                    <h2 className='text-[#001931] font-extrabold md:text-[40px] leading-none'>{ratingAvg}</h2>
                                </div>
                                <div className='space-y-2'>
                                    <img className='w-[40px] h-[40px]' src={ratingIcon} alt="" />
                                    <p className='text-[#001931]'>Total Reviews</p>
                                    <h2 className='text-[#001931] font-extrabold md:text-[40px] leading-none'>{reviews}</h2>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => handleInstallBtn()} disabled={installed} className="btn bg-[#00D390] text-white text-[20px] py-6 font-medium"> {installed ? "Installed" : `Install Now (${size} MB)`}</button>
                            </div>

                        </div>


                    </div>

                    {/* chart  */}
                    <div className='py-10 mt-10 border-y-1 border-gray-300'>
                        <h3 className='font-semibold text-2xl'> chart</h3>
                        <div className='h-100'>

                            <ResponsiveContainer >
                                <BarChart
                                    data={chartData}
                                    layout="vertical" >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis type="number" dataKey="users" />
                                    <YAxis type="category" dataKey="star" />
                                    <Tooltip />
                                    <Bar dataKey="users" fill="#FF8811" />
                                </BarChart>
                            </ResponsiveContainer>

                        </div>
                    </div>

                    {/* description */}
                    <div className='mt-10 space-y-3'>
                        <h3 className='font-semibold text-2xl'> Description</h3>
                        <p className='text-[#627382] font-light'>{description}</p>
                    </div>
                </div>

            </div>

        </>
    );
};

export default AppDetails;
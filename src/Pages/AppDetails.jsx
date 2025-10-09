import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import downloadsIcon from '../assets/icon-downloads.png';
import reviewIcon from '../assets/icon-ratings.png'
import ratingIcon from '../assets/icon-review.png'
import { ToastContainer, toast } from 'react-toastify';

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  const [installed, setInstalled] = useState(false);

  const app = apps.find(app => String(app.id) === id);

 
  useEffect(() => {
    if (!app) return;
    const existingList = JSON.parse(localStorage.getItem('Installed')) || [];
    const isAlreadyInstalled = existingList.some(existingApp => existingApp.id === app.id);
    setInstalled(isAlreadyInstalled);
  }, [app]);

  if (!app) return <p className="text-center py-10">App not found.</p>;

  const { description, companyName, title, image, downloads, ratingAvg, reviews, size } = app;

  const handleInstallBtn = () => {
    const existingList = JSON.parse(localStorage.getItem('Installed')) || [];
    const isDuplicate = existingList.some(existingApp => existingApp.id === app.id);

    if (isDuplicate) {
      setInstalled(true);
      return;
    }

    const updatedList = [...existingList, app];
    localStorage.setItem('Installed', JSON.stringify(updatedList));
    setInstalled(true);
    toast.success('App installed successfully!');
  };

    return (
        <>
            <div className=' py-20 bg-[#f5f5f5] '>
                <div className='w-11/12 mx-auto'>
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
                    </div>

                    {/* description */}
                    <div className='mt-10 space-y-3'>
                        <h3 className='font-semibold text-2xl'> Description</h3>
                        <p className='text-[#627382] font-light'>{description}</p>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </>
    );
};

export default AppDetails;
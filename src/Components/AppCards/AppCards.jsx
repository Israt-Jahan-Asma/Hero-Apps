import React from 'react';
import { Download, Star } from 'lucide-react';
import { NavLink } from 'react-router';


const AppCards = ({app}) => {
   
    const {image, downloads, title, ratingAvg, id}= app

    
    return (
        <NavLink to={`/app-details/${id}`}>
            <div className=' bg-white rounded-md p-4 shadow-sm space-y-4'>
                <img className='mx-auto rounded-md' src={image} alt="" />
                <h3 className='font-medium text[20px]'> {title}</h3>
                <div className='flex justify-between '>
                    <div className='flex gap-2 bg-[#F1F5E8] items-center p-2 rounded-sm'>
                        <Download className='w-4 h-4 text-[#00D390]'/>
                        <p className='text-[#00D390]'>{downloads}</p>
                    </div>
                    <div className='flex gap-2 bg-[#FFF0E1] items-center p-2 rounded-sm'>
                        <Star className='w-4 h-4 text-[#FF8811]'/>
                        <p className='text-[#FF8811]'>{ratingAvg}</p>
                    </div>
                </div>

        </div>
        </NavLink>
    );
};

export default AppCards;
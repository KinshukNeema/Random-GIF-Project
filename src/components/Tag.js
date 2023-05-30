import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spin from './Spin';
import useGif from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// const API_KEY = 'kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S';

const Tag = () => {

    const [tag, setTag] = useState('car'); 
    const {gif, loading, fetchData} = useGif(tag);

    return (
        <div className='w-1/2 bg-blue-500 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px]'>
            
            <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>Random {tag} Gif</h1>
            {console.log(loading)}
            {loading ? (<Spin />) : (<img src={gif} width="450"/>) }
            
            <input 
              className='w-10/12 rounded-lg text-lg py-2 mb-[3px] text-center'
              onChange={(event) => setTag(event.target.value)}
              value={tag}
            />

            <button onClick={() => fetchData(tag)}
            className='w-10/12 bg-slate-200 rounded-lg text-lg py-2 mb-[20px]'>
                Generate
            </button>

        </div>
  )
}

export default Tag;
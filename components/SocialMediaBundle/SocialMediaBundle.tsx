import React from 'react';                                    
import Line from '../Common/Line/Line';
import { IProduct } from '@/type';
import Hero from './Hero';
import Content from './Content';
import LineAnimateOne from './LineAnimateOne';


const SocialMediaBundle = () => {
    return (
        <div className='overflow-hidden'>
            {/* <Hero /> */}
            {/* <LineAnimateOne /> */}
            <Content />
        </div>
    );
};

export default SocialMediaBundle;
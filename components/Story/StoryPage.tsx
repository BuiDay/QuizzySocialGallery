import React from 'react';
import HeroStory from './HeroStory';
import StoryContent from './StoryContent';
const StoryPage = () => {
    return (
        <div className='w-full h-full flex flex-col gap-[30px] overflow-hidden bg-pattern'>
            <HeroStory />
            <StoryContent/>
        </div>
    );
};

export default StoryPage;
import React, { useState } from 'react';
import { VideoOverlay, VideoElement, Overlay } from '../../styles/components/Hero.styles'
import surf from '../../videos/stocksurf.mp4';
import vball from '../../videos/vball.mp4';
import snowboard from '../../videos/snowboardingvid.mp4';
import climb from '../../videos/rockclimbing.mp4';

const Hero = () => {
  const vidArr = [surf, snowboard, climb, vball];
  const [srcIndex, setSrcIndex] = useState(0);

  const handleVideoEnded = () => {
    const nextIndex = (srcIndex + 1) % vidArr.length;
    setSrcIndex(nextIndex);
  };

  return (
    <VideoOverlay>
      <VideoElement src={vidArr[srcIndex]} autoPlay muted onEnded={handleVideoEnded} />
      <Overlay>
        <h1>Connecting Photographers and Hobbyists</h1>
      </Overlay>
    </VideoOverlay>
  )
}

export default Hero
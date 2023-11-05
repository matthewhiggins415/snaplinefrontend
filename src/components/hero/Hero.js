import React, { useState } from 'react';
import { VideoOverlay, VideoElement, Overlay } from '../../styles/components/Hero.styles'
import surf from '../../videos/stocksurf.mp4';
import vball from '../../videos/vball.mp4';
import snowboard from '../../videos/snowboardingvid.mp4';
import climb from '../../videos/rockclimbing.mp4';

const Hero = () => {
  const vidArr = [surf, vball, snowboard, climb];
  const [src, setSrc] = useState(vidArr[0])

  return (
    <VideoOverlay>
      <VideoElement src={src} autoPlay loop muted />
      <Overlay>
        {/* You can add content inside the overlay, such as text or other elements */}
        <h1>Connecting Photographers and Hobbyists</h1>
      </Overlay>
    </VideoOverlay>
  )
}

export default Hero
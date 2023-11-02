import React from 'react';
import { VideoOverlay, VideoElement, Overlay } from '../../styles/components/Hero.styles'
import surfVid from '../../videos/stocksurf.mp4'

const Hero = () => {
  return (
    <VideoOverlay>
      <VideoElement src={surfVid} autoPlay loop muted />
      <Overlay>
        {/* You can add content inside the overlay, such as text or other elements */}
        <h1>Connecting Photographers and Hobbyists</h1>
      </Overlay>
    </VideoOverlay>
  )
}

export default Hero
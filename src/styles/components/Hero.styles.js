import styled from 'styled-components';

export const VideoOverlay = styled.div`
  position: relative;
  width: 100%;
  min-height: 40vh;
`;

export const VideoElement = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;

export const Overlay = styled.div`
  font-size: 2.5em;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: .8px;
  color: rgba(0, 0, 0, 0.4);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); /* Adjust the overlay background color and opacity as needed */
  z-index: 1; /* Position the overlay above the video */
`;

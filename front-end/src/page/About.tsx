import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: white;
`;

interface Props { }

const AboutComponent: React.FC = (props: Props) => {
  return <StyledDiv><br />Food waste is an major issue in North America and many other parts of the world, so we thought about a way that we could reduce it by making home appliances and devices more intelligent. Our project strives to make a positive impact on the environment as well as improve our day to day lives simultaneously.
  <br/><br/>We accomplish this by creating a rapberry pi based hardware solution that can be installed inside any fridge or pantry. Through image recognition and motion detection, a webcam detects what comes in and out of your refrigerator and puts it all in a neat little list on this webpage, essentially keeping track of the contents of it for you. It can then tell you if something is about to go bad or if you're missing some items from your weekly shopping list. You can even configure it to automatically order these items from Amazon. 
  <br/><br/>The model we integrated in Tensorflow includes 120 classes of fruits and has a detection accuracy of 97.1%.
  <br /><img src="./model_graph.png" style={{width:"1000px", transform: "translateX(-25%)"}}/> <img src="./Matrix.png" style={{width:"1000px", transform: "translateX(-25%)"}}/><br /> </StyledDiv>;
};

export const About = AboutComponent;

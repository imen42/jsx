import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';
import { AiOutlineLike , AiOutlineScissor } from "react-icons/ai";
import { BiDislike , BiShare } from "react-icons/bi";


const Channel = {
    Imageurl: "https://kultt.fr/wp-content/uploads/2022/09/RickAstley-ad2022.jpg",
    ChannelName: "rickrollers",
    SubscribersNumber: "400k",

};




const ProfileDescription = () => {
  return (
    <div>
        <div id = "container profile">
        {/*img*/}
        <div>
            {/*channel name*/}
            {/*nombre de vue */}
        </div>
        {/*button subscribe*/}
        <div id = "viewer reaction">
            
        <ButtonGroup aria-label="Basic example">

      <Button variant="secondary">
        {" "}
        <AiOutlineLike/> 12k
        </Button> 
        {" "}
      <Button variant="secondary">
        {" "}
        <BiDislike/> 20k
        {" "}
        </Button>
    </ButtonGroup>
    <Button variant="secondary"> <BiShare/>partager</Button>{' '}
    <Button variant="secondary">  <AiOutlineScissor/> Extraire</Button>{' '}

           
        </div>
    </div>
        </div>
  )
}

export default ProfileDescription
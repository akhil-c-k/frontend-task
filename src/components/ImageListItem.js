import React from 'react';
import './image-list-item.css'

const ImageListItem = props => {
    return (
      <div className="">
      {props.imageitem.map(item => {
        return  <div className="target-image-container">
       
        <div className="target-image-wrapper">
             <img src={item.url} key={item.id}/>
         </div>


         <div className="target-image-content">
            <ul key={item.id}>
              <li>Id: {item.id}</li>
              <li>Author: {item.author_fullname}</li>
              <li>Uploads: {item.ups}</li>
              <li>Score: {item.score}</li>
            </ul>
         </div>
       
       </div>
      })};
      </div>
    )
 
}

export default ImageListItem;

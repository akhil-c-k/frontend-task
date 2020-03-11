import React from 'react';
import './image-list.css'

const ImageList = props => {
    return (
      <div className="my-posts">
      {props.data.map((key,index) => (
        <div>
        <div className="box-holder" onClick={e => props.getImage(e)}>
          <div className="image_thumb_wrapper">
            <img  id={key.id}  src={key.thumbnail}/>  
           </div>
           <div className="title-wrapper">
            {key.title}
           </div>
         </div>
       </div> 
       ))}
      </div>
      );
 
}

export default ImageList;

// {users.map((user, index) => (
//     <div key={index}>
//       <h3>{user.name}</h3>
//       <p>{user.location}</p>
//       <p>{user.car}</p>
//     </div>
//   ))}
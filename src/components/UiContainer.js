//holds all ui


import React,{Component} from 'react';
import axios from 'axios';
import redditApi from '../api/redditApi.js'
import ImageList from '../components/ImageList'
import ImageListItem from '../components/ImageListItem.js'
import '../components/ui-container.css';
class Uicontainer extends Component {
    constructor(props)
     {
      super(props)
      this.getImage = this.getImage.bind(this)
     }
      state = {
        data:[],
        targetImages:[]
      };
  
      componentDidMount()
       {
        fetch('https://www.reddit.com/r/pics/.json?jsonp')
         .then(res => res.json())
         .then(res => res.data.children)
         .then(res => 
           this.setState({
             data:res.map(item => item.data)
           })  
       )
    }

    getImage(e)
      {
       let imageId = e.target.id;
       const {data} = this.state
       this.searchImage(data,imageId)
      }

      searchImage = (targetimage,currentid) => {
          console.log("test")
           let targetData = targetimage.filter(item => item.id == currentid);
           this.setState({
            targetImages: targetData
         })
        }
   
  render()
   { 
     const {data,imageThumbail,title,targetImages} = this.state
     return (
      <div className="main-container">
        <div>
            <ImageList data = {data} getImage={this.getImage}/>
        </div>
        <div>
          <ImageListItem imageitem={targetImages}/>
        </div>
      </div>
     )
   }
}

export default Uicontainer;


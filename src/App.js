import { useState } from 'react';
import './App.css';

function App() {
  //ex1
  const [voteBana,setVoteBana] = useState(0)
  const [voteOra,setVoteOra] = useState(0)

  const handleOraUpvote = () => {
    setVoteOra(voteOra+1)
  }
  const handleOraDownvote = () => {
    setVoteOra(voteOra-1)
  }
  const handleBanaUpvote = () => {
    setVoteBana(voteBana+1)
  }
  const handleBanaDownvote = () => {
    setVoteBana(voteBana-1)
  }
  //ex2
  const imgs = ['https://bit.ly/3lmYVna','https://bit.ly/3flyaMj']
  const [images,setImages] = useState(imgs)
  const handleRemoveImg = (index) =>{
      const newImg = [...images]
      newImg.splice(index,1)
      setImages(newImg) 
  }
  const handleRemoveAll = () =>{
    setImages((prevState)=>{
      prevState = [];
      return prevState;
    })
  }
  
  return (
    <div className="App">
      {/* ex1 */}
      <h1>Exersise1</h1>
      <ul>
        <li>
        <span>Oranges</span> - <span>votes: {voteOra}</span><button onClick={handleOraUpvote}>+</button>
        <button onClick={handleOraDownvote}>-</button>
        </li>
        <li> <span>Bananas</span> - <span>votes: {voteBana}</span><button onClick={handleBanaUpvote}>+</button>
        <button onClick={handleBanaDownvote}>-</button>
        </li>
      </ul>
      {/* ex2 */}
      <h1>Exersise2</h1>
      <div>
        {images.map((img,index)=>(
          <div className="image" key={index}>
          <img src={img} alt=''/>
          <button className="remove" onClick={()=>handleRemoveImg(index)}>X</button>
          </div>
        ))}
        <button onClick={handleRemoveAll}>Remove all</button>
        </div>
    </div>
  );
}

export default App;

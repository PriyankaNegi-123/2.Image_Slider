import React, {useState, useEffect} from 'react'
import people from '../data'
import {FaChevronCircleLeft, FaChevronCircleRight, FaQuoteRight} from 'react-icons/fa'
import '../index.css'

const Slide = () => {
  const [index, setIndex] = useState(0);
  const {name, image, job, text} = people[index];

  const nextPerson =()=>{
      setIndex(()=>{
        if(index===people.length-1){
          let newIndex = 0;
          return newIndex;
        }else{
          let newIndex = index+1;
          return newIndex;
        }
      })
  }

  const prevPerson =()=>{
    setIndex(()=>{
      if(index===0){
        let newIndex = people.length-1;
        return newIndex;
      }else{
        let newIndex = index-1;
        return newIndex;
      }
  })
  }

  const randomPerson = ()=>{
    setIndex(()=>{
      let newIndex = Math.trunc(Math.random()*people.length);
      return newIndex;
    })
  }

  return (
    
    <article className = "review">
        <div className="image-container">
          <img src={image} alt={name} className = "person-img"/>
          <span className = "quote-icon">
            <FaQuoteRight/>
          </span>
        </div>
          <div className="author">{name}</div>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="button-container">
            <button className="prev-btn" onClick={()=>prevPerson()}><FaChevronCircleLeft/></button>
            <button className="next-btn" onClick={()=>nextPerson()}><FaChevronCircleRight/></button>
          </div>
          <div className="random-btn" onClick={()=>randomPerson()}>Random User</div>
      </article>
  )
}

export default Slide
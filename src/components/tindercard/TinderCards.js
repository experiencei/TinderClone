import React,{ useState}from 'react'
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";

function TinderCards() {
     const [people , setPeople] = useState([{
         name:"Elon Musk",
         url : ""
     },
     {
        name:"Elon Musk",
        url : ""
    }] )

  const swiped = (direction , nameToDelete) => { 
    //   setLastDirection(direction)
    }

    const outOfFrame = (name) => {

    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {
                 people.map(person =>(
                     <TinderCard
                       className="swipe"
                       key={person.name}
                       preventSwipe={"up" , "down"}
                       onSwipe={(dir) => swiped(dir , person.name)}
                       onCardLeftScreen={() => outOfFrame(person.name)}
                     >{person.name}</TinderCard>
                 ))
             }
            </div>
        </div>
    )
}

export default TinderCards

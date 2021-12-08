import React, { useState, useMemo, useRef } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import {
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom'

const db = [
  {
    name: 'Elon Musk',
    age: '50',
    url: '/images/elonmusk-magic.jpg'
  },
  {
    name: 'Jeff Bezos',
    age: '59',
    url: '/images/jeffbezos-magic.jpg'
  },
  {
    name: 'Sundar Pichai',
    age: '49',
    url: '/images/Sundarpichai-magic.png'
  },
  {
    name: 'Tim Cook',
    age: '69',
    url: '/images/timcook-magic.jpg'
  },
  {
    name: 'Parag Agrawal',
    age: '37',
    url: '/images/ParagAgrawal2-magic.jpg'
  },
  {
    name: 'Satya Nadella',
    age: '54',
    url: '/images/satyanadella-magic.jpg'
  },
  {
    name: 'Eric Yuan',
    age: '51',
    url: '/images/ericyuan-magic.jpg'
  },
  {
    name: 'Bill Gates',
    age: '66',
    url: '/images/billgates-magic.jpg'
  },
  {
    name: 'Mark Zuckerberg',
    age: '37',
    url: '/images/markzuckerberg-magic.jpg'
  },
  {
    name: 'Warren Buffet',
    age: '91',
    url: '/images/warrenbuffet-magic.jpg'
  },
]

function MoveData () {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <div className = 'matches-page'>
      
      <div className = 'matches-title'>
        <h1 className = 'title-match'> YOU MATCHED WITH: </h1>
      </div>

      <link
        href = 'https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel = 'stylesheet'
      />
      <link
        href = 'https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel= ' stylesheet'
      />

      <div className = 'cardContainer-parent'>
        <div className ='cardContainer'>
          {db.map((character, index) => (
            <TinderCard
              ref = {childRefs[index]}
              className = 'swipe'
              key = {character.name}
              key = {character.age}
              onSwipe = {(dir) => swiped(dir, character.name, index)}
              onCardLeftScreen = {() => outOfFrame(character.name, index)}
            >
              <div
                style = {{ backgroundImage: 'url(' + character.url + ')' }}
                className = 'card'
              >
                
                <Link to = {`/user/${ character.name }`}>
                  <button className = 'goToProfile' style = {{ backgroundColor: !canSwipe && '#c3c4d3' }}> <b>Go to profile!</b> </button> 
                </Link>
<<<<<<< HEAD

                <div> <h3> <b>{character.name}</b> </h3> </div>
                <div className = 'character-age'> <h3> {character.age} </h3> </div>
              </div>
              

=======
>>>>>>> feat/front-end-Sprint5-v3

                <div> <h3> <b>{character.name}</b> </h3> </div>
                <div className = 'character-age'> <h3> {character.age} </h3> </div>
              </div>
              
            </TinderCard>
          ))}
        </div>
      </div>

      <div className='buttons'>
        <button style = {{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick = {() => swipe('left')}> Swipe left! </button>
        <button style = {{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick = {() => swipe('right')}> Swipe right! </button>
        <button style = {{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick = {() => goBack()}> Undo swipe (testing) </button>
      </div>

      {lastDirection ? (
        <h2 key = {lastDirection} className = 'infoText'>
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className = 'infoText'>
          Swipe a card right or press a button !
        </h2>
      )}
    </div>
  )
}
export default MoveData
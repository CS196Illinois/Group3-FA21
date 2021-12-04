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
    url: '/images/elonmusk-magic.jpg'
  },
  {
    name: 'Jeff Bezos',
    url: '/images/jeffbezos-magic.jpg'
  },
  {
    name: 'Sundar Pichai',
    url: '/images/Sundarpichai-magic.png'
  },
  {
    name: 'Tim Cook',
    url: '/images/timcook-magic.jpg'
  },
  {
    name: 'Parag Agrawal',
    url: '/images/ParagAgrawal2-magic.jpg'
  },
  {
    name: 'Satya Nadella',
    url: '/images/satyanadella-magic.jpg'
  },
  {
    name: 'Eric Yuan',
    url: '/images/ericyuan-magic.jpg'
  },
  {
    name: 'Bill Gates',
    url: '/images/billgates-magic.jpg'
  },
  {
    name: 'Mark Zuckerberg',
    url: '/images/markzuckerberg-magic.jpg'
  },
  {
    name: 'Warren Buffet',
    url: '/images/warrenbuffet-magic.jpg'
  },
]

function MoveData () {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
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
    <div>
      <link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      />

      <div className = 'matches-title'>
        <h1> YOU MATCHED WITH: </h1>
      </div>

      <div className = 'cardContainer-parent'>
        <div className='cardContainer'>
          {db.map((character, index) => (
            <TinderCard
              ref = {childRefs[index]}
              className = 'swipe'
              key = {character.name}
              onSwipe = {(dir) => swiped(dir, character.name, index)}
              onCardLeftScreen = {() => outOfFrame(character.name, index)}
            >
              <div
                style={{ backgroundImage: 'url(' + character.url + ')' }}
                className='card'
              >
                <h3>{character.name}</h3>
              </div>

              <Link to = {`/user/${ character.name }`}>
                <button className = 'goToProfile' style = {{ backgroundColor: !canSwipe && '#c3c4d3' }}> Go to profile! </button> 
              </Link>

            </TinderCard>
          ))}
        </div>
      </div>

      <div className='buttons'>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button>
        <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}> Undo swipe (testing) </button>
      </div>

      {lastDirection ? (
        <h2 key={lastDirection} className='infoText'>
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className='infoText'>
          Swipe a card right or press a button !
        </h2>
      )}
    </div>
  )
}

export default MoveData
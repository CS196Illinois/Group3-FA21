import React, { useEffect, useState } from 'react'
//import database from "Database";
import TinderCard from 'react-tinder-card'
import './Style.css';

function UserCards() {
    const [people, setPeople] = useState([])
    useEffect(() => {
        /* database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.database()))
        )) */
    }, []);

    return (
        <div>
           <div className = "cardContainer">
            {people.map((person) => (
                <TinderCard className = "swipe" key = {person.name} preventSwipe = {['up', 'down']}>
                    <div style = {{ backgroundImage: `url(${person.url})` }} className = "card">
                        <h3> {person.name} </h3>
                    </div>
                </TinderCard>
                ))}
           </div>
        </div>
    )
}

export default UserCards
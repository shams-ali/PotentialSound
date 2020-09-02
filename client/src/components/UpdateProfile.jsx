import React, {useState} from 'react';

const UpdateProfile = () => {

    const [newUser, setNewUser] = useState('Previous Username');
    const [newCity, setNewCity] = useState('Previous City');
    const [newCell, setNewCell] = useState('Previous Cell');
    const [newDescription, setNewDescription] = useState('Previous Description');

    const updateProfile = () => {
        console.log({newUser, newCity, newCell, newDescription}, 'hit');
    }

    return(<div>
        <h1>Update Your Profile</h1>
        <input value={newUser} onChange={(e) => {setNewUser(e.target.value)}}></input><br/>
        <input value={newCity} onChange={(e) => {setNewCity(e.target.value)}}></input><br/>
        <input value={newCell} onChange={(e) => {setNewCell(e.target.value)}}></input><br/>
        <input value={newDescription} onChange={(e) => {setNewDescription(e.target.value)}}></input><br/>
        <button onClick={() => updateProfile()}>Submit Change</button>
    </div>)
}

export default UpdateProfile;
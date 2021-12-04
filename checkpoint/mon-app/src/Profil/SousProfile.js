import React from 'react'

const SousProfile = ({fullName, Bio, Profesion, image}) => {
    const HandleName=()=>{
        alert('Alkaly SOUMAH')
    }

    return (
        <div>
            <div><span><b>fullName:</b>{fullName}</span></div>
            <div><span><b>Bio:</b>{Bio}</span></div>
            <div><span><b>Profession:</b>{Profesion}</span></div>
            <div><span><img src="./profile.jpg" width="120px" height="120px" alt="profile"/></span></div>
            <button onClick={HandleName}>Bouton</button>
            
        </div>
    )
}

export default SousProfile

import React from "react";
class App extends React.Component {
  person = {
    fullname: "Alkaly SOUMAH",
    bio:"je fais actuellement une formation a GoMyCode",
    profession:"Etudiant",
    imgSrc:"",
    shows:false
  };
  
  render() {
    return(
    <div>
      <div>fullname: <span>{this.person.fullname}</span></div>
      <div>bio: <span>{this.person.bio}</span></div>
      <div>profession: <span>{this.person.profession}</span></div>
      <div>imgSrc: <span>{this.person.imgSrc}<img src="./profile.jpg" alt="photo" width="120px" height="120px"/></span></div>
    </div>
     )};
 }
 
export default App;

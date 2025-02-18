import { useState } from "react";
import pets from "../petsData";

function PetItem({ pet,handleAdopt }) {
  const [petImage, setImage] = useState(pet.image);

// Pet button 
  const petBtn = () => {
    setImage(pet.image2);
    console.log("working");
  };

// Adopt button 
  const adpotBtn = () => {
    // pets.forEach((petObj) => {
    //   if (petObj.id === pet.id) petObj.id = 0;
    // });
    
    console.log("deleted");
    alert(`Congrats you adopted ${pet.name}`);
  };



// return
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={petImage} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button onClick={petBtn} type="button" className="btn btn-info">
            Pet
          </button>
          <button
            onClick={() => handleAdopt(pet.id)}
            type="button"
            className="btn btn-info  m-2"
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;

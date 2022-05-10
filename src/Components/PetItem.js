import { useState } from "react";

function PetItem({ pet }) {
  const [petImage, setImage] = useState(pet.image);
  const petBtn = () => {
    setImage(pet.image2);
    console.log("working");
  };
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={petImage} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button onClick={petBtn} type="button" className="btn btn-info">
            Pet
          </button>
          <button type="button" className="btn btn-info  m-2">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;

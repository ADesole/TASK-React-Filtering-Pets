import pets from "../petsData";
import PetItem from "./PetItem";
import { useState } from "react";

function PetsList() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [petList, setPetList] = useState(pets);
  

// handle adopt
const handleAdopt = petId => {setPetList(petList.filter(pet => pet.id !== petId))
}
// const petItemId = petList.map((pet) => <PetItem pet={pet} key={pet.id} handleAdopt={handleAdopt}/>);
// petItemId.filter(pet => pet.name.toLowerCase().includes(query.toLowerCase()))

const petListFiltered = petList.filter(pet => pet.name.toLowerCase().includes(query.toLowerCase()) && pet.type.toLowerCase().includes(type.toLowerCase())).map((pet) => <PetItem pet={pet} key={pet.id} handleAdopt={handleAdopt}/>);


  //Filtering if all is selected display all else display only selected type
  // if (type === "") {
  //   petList = pets
  //     .filter(
  //       (pet) =>
  //         pet.name.toLowerCase().includes(query.toLowerCase()) && pet.id !== 0
  //     )
  //     .map((pet) => <PetItem pet={pet} key={pet.id}/>);
  // } else {
  //   petList = pets
  //     .filter(
  //       (pet) =>
  //         pet.name.toLowerCase().includes(query.toLowerCase()) &&
  //         pet.type === type &&
  //         pet.id !== 0
  //     )
  //     .map((pet) => <PetItem pet={pet} key={pet.id}/>);
  // }

  
  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
              <br />
              Type:
              <select
                className="form-select"
                onChange={(event) => setType(event.target.value)}
              >
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petListFiltered}</div>
      </div>
    </section>
  );
}

export default PetsList;

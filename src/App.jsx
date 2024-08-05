import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [interests, setInterests] = useState([]);
  const [color, setColor] = useState("");
  const [formData, setFormData] = useState(false);

  const interestsHandler = (event) => {
    let value = event.target.value;
    if (value) {   
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest != value));
    }
  };

  const formHandler = (event) => {
    event.preventDefault();   
    if (name && address && gender && interests && color) {
      setFormData(true);   
    }
  };
  return (
    <main>
      <h1>User Profile Form</h1>
      <form onSubmit={formHandler}>
        <label htmlFor="nameInput">Name: </label>
        <input
          id="nameInput"
          onChange={(event) => setName(event.target.value)}
        />
        <br /> <br />
        <label htmlFor="addressInput">Address: </label>
        <br />
        <textarea
          id="addressInput"
          rows={4}
          cols={40}
          onChange={(event) => setAddress(event.target.value)}
        ></textarea>
        <br /> <br />
        <label>Gender: </label>
        <br />
        <input
          type="radio"
          value="Female" 
          name="gender"
          onChange={(event) => setGender(event.target.value)}
        />{" "}  

        
        Female
        <br />
        <input
          type="radio"
          value="Male"
          name="gender"
          onChange={(event) => setGender(event.target.value)}
        />{" "}
        Male
        <br />
        <input
          type="radio"
          value="Others"
          name="gender"
          onChange={(event) => setGender(event.target.value)}
        />{" "}
        Others
        <br /> <br />
        <label>Interests: </label>
        <br />
        <input
          type="checkbox"
          value="Reading"
          onChange={interestsHandler}
        />{" "}
        Reading
        <br />
        <input
          type="checkbox"
          value="Singing"
          onChange={interestsHandler}
        />{" "}
        Singing
        <br />
        <input
          type="checkbox"
          value="Painting"
          onChange={interestsHandler}
        />{" "}
        Painting
        <br /> <br />
        <label htmlFor="colorSelect">Favourite Color: </label>
        <select
          id="colorSelect"
          onChange={(event) => setColor(event.target.value)}
        >
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Orange">Orange</option>
        </select>
        <br /> <br />
        <button type="submit">Submit</button>
      </form>

      {formData && (
        <div>
          <h2>Submitted Details: </h2>
          <p>Name: {name}</p>
          <p>Address: {address}</p>
          <p>Gender: {gender}</p>
          <p>Interests: {interests.join(", ")}</p>
          <p>Favourite Color: {color}</p>
        </div>
      )}
    </main>
  );
}

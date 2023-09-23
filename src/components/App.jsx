import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";

function Createcard(props) {
  return (
    <Emoji
      id={props.id}
      key={props.id}
      emoji={props.emoji}
      name={props.name}
      meaning={props.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(Createcard)};</dl>
    </div>
  );
}

export default App;

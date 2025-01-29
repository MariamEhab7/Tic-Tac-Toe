import { useState } from "react"; //useState is used to refresh/re-excute on changes

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(!isEditing);  NOT Recommended
    setIsEditing((isEditing) => !isEditing); // BEST practise
  }

  function HandelChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    //If clicked input will appear instead of the span
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={HandelChange} /> //Two way binding
    );
  }

  return (
    <li className={isActive? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

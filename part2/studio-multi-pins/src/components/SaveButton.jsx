import "./styling.css";

function SaveButton() {
  function handleClick() {
    alert("You are saving this pin!");
  }
  return (
    <button id="saveButton" onClick={handleClick}>
      Save Pin
    </button>
  );
}

export default SaveButton;

import React from "react";

function Escrever(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    
    props.onAdd(note);
    setNote({
      tarefa: "",
      texto: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="tarefa"
          onChange={handleChange}
          value={note.tarefa}
          placeholder="Title"
        />
        <textarea
          name="texto"
          onChange={handleChange}
          value={note.texto}
          placeholder="Describe your work"
          row="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default Escrever;

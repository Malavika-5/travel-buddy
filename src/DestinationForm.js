import React, { useState } from "react";

function DestinationForm({ addDestination }) {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [image, setImage] = useState("");
  const [priority, setPriority] = useState("High");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDestination = { name, notes, image, priority };
    addDestination(newDestination);
    setName("");
    setNotes("");
    setImage("");
    setPriority("High");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Destination Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Notes (Optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL (Optional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="Low">Low Priority</option>
      </select>
      <button type="submit">Add Destination</button>
    </form>
  );
}

export default DestinationForm;
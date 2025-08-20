"use client";

import { useState } from "react";

type Event = { name: string; date: string };
type Props = {
  onAdd: (event: Event) => void;
};

export default function EventForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleAdd = () => {
    setErrorMsg("");
    if (name.trim() === "" && date.trim() === "") {
      setErrorMsg("Both fields are required.");
      return;
    }
    if (!name) {
      setErrorMsg("Event name is required.");
      return;
    }
    if (!date) {
      setErrorMsg("Event Date is required.");
      return;
    }

    if (new Date(date) < new Date()) {
      setErrorMsg("Event date cannot be in the past.");
      return;
    }
    onAdd({ name, date });
    setName("");
    setDate("");
  };

  return (
    <div className="flex flex-col gap-2 mb-6">
      <input
        type="text"
        placeholder="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {errorMsg && <p className="text-red-500">{errorMsg}</p>}

      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        Add Event
      </button>
    </div>
  );
}

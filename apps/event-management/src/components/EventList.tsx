"use client";

import { useState, useEffect } from "react";

type Event = { name: string; date: string };
type Props = {
  events: Event[];
  onDelete: (index: number) => void;
};

export default function EventList({ events, onDelete }: Props) {
  const [searchText, setSearchText] = useState("");

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchText.toLowerCase())
  );

  if (events.length === 0) {
    return <p className="text-gray-500">No events yet.</p>;
  }

  return (
    <>
      <div>
        <input
          type="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search events here.."
          className="p-2 w-full rounded-2xl mb-4 border border-amber-50 focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <ul className="space-y-3">
        {filteredEvents.length === 0 ? (
          <p className="text-gray-500">Event with this name did not exist</p>
        ) : (
          filteredEvents.map((event, i) => (
            <li
              key={i}
              className="flex justify-between items-center p-4 mb-3 rounded-xl shadow-md border border-gray-200 bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-gray-800">
                  {event.name}
                </span>
                <span className="text-sm text-gray-500">
                  Date: {event.date}
                </span>
              </div>

              <button
                onClick={() => onDelete(i)}
                className="px-3 py-1 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 hover:text-red-700 transition-colors duration-300"
              >
                ✕ Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </>
  );
}

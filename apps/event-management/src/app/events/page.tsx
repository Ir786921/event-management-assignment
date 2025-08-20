"use client";

import { useState, useEffect } from "react";
import EventForm from "@/components/EventForm";
import EventList from "@/components/EventList";

type Event = { name: string; date: string };

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedEvents = localStorage.getItem("events");
      if (storedEvents) {
        setEvents(JSON.parse(storedEvents));
      }
    }
  }, []);

  const addEvent = (event: Event) => {
    const updatedEvents = [...events, event];
    setEvents(updatedEvents);
    if (typeof window !== 'undefined') {
      localStorage.setItem("events", JSON.stringify(updatedEvents));
    }
  };

  const deleteEvent = (index: number) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
    if (typeof window !== 'undefined') {
      localStorage.setItem("events", JSON.stringify(updatedEvents));
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Events</h1>
      <EventForm onAdd={addEvent} />
      <EventList events={events} onDelete={deleteEvent} />
    </div>
  );
}
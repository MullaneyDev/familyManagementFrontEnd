import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  const events = [
    {
      title: "Dentist",
      start: "2023-11-10T12:00:00",
      end: "2023-11-10T13:00:00",
    },
    {
      title: "Graduation",
      start: "2023-11-17T13:30:00",
      end: "2023-11-17T15:00:00",
    },
    {
      title: "Graduation party",
      start: "2023-11-17T15:00:00",
      end: "2023-11-17T17:30:00",
    },
    {
      title: "Doctor",
      start: "2023-11-20T16:00:00",
      end: "2023-11-20T17:00:00",
    },
    {
      title: "My Birthday party",
      start: "2023-11-21T18:00:00",
      end: "2023-11-21T00:00:00",
    },

    {
      title: "Matthew,s wedding",
      start: "2023-11-18T12:00:00",
      end: "2023-11-18T00:00:00",
    },
    {
      title: "School parents meeting",
      start: "2023-11-30T11:00:00",
      end: "2023-11-30T12:00:00",
    },
    {
      title: "Hair salon",
      start: "2023-12-24T14:00:00",
      end: "2023-12-24T15:00:00",
    },
    {
      title: "Restaurant reservation",
      start: "2023-12-24T19:00:00",
      end: "2023-12-24T21:00:00",
    },
    {
      title: "New Year's Eve party",
      start: "2023-12-31T20:00:00",
      end: "2023-12-31T02:00:00",
    },
  ];

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today,prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"90vh"}
        eventTimeFormat={{
          meridiem: "short",
          hour: "numeric",
          minute: "2-digit",
        }}
        events={events}
        eventClick={(info) => {
          console.log(info);
          return <h1>Test</h1>;
        }}
      />
    </div>
  );
}
export default Calendar;

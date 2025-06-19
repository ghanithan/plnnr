import React, { useState } from 'react';
import TileDate from './TileDate.jsx';

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function generateCalendar(year, month) {
  const result = [];
  const startDay = new Date(year, month, 1).getDay();
  let current = new Date(year, month, 1 - startDay);

  for (let w = 0; w < 6; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const dstr = current.toISOString().slice(0, 10);
      week.push({
        value: current.getDate(),
        current: current.getMonth() === month,
        isToday: dstr === new Date().toISOString().slice(0, 10),
        dateStr: dstr
      });
      current.setDate(current.getDate() + 1);
    }
    result.push(week);
    if (current.getMonth() > month && current.getDate() > 7) break;
  }
  return result;
}

export default function Calendar({ onSelect }) {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());

  const weeks = generateCalendar(year, month);

  function prevMonth() {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }

  function nextMonth() {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }

  return (
    <div className="p-4">
      <header className="flex items-center justify-between mb-2">
        <button className="px-2 py-1 bg-gray-200" onClick={prevMonth}>Prev</button>
        <h4>{monthNames[month]} {year}</h4>
        <button className="px-2 py-1 bg-gray-200" onClick={nextMonth}>Next</button>
      </header>
      <div className="grid grid-cols-7 gap-1">
        {dayNames.map(d => (
          <div key={d} className="h-[50px] p-2 border border-[#e6e4e4] text-right cursor-pointer"><strong>{d}</strong></div>
        ))}
        {weeks.map((week, i) => (
          week.map(day => (
            <TileDate key={`${i}-${day.dateStr}`} day={day} onSelect={onSelect} />
          ))
        ))}
      </div>
    </div>
  );
}

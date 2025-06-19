import React, { useState, useEffect } from 'react';

export default function OverlayCard({ date, onClose }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes') || '{}');
    setValue(notes[date] || '');
  }, [date]);

  function save() {
    const notes = JSON.parse(localStorage.getItem('notes') || '{}');
    notes[date] = value;
    localStorage.setItem('notes', JSON.stringify(notes));
    onClose();
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="card" onClick={e => e.stopPropagation()}>
        <h4>{date}</h4>
        <textarea
          value={value}
          onChange={e => setValue(e.target.value)}
          rows="5"
          style={{ width: '100%' }}
        />
        <button onClick={save}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

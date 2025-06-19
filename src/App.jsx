import React, { useState } from 'react';
import Calendar from './components/Calendar.jsx';
import OverlayCard from './components/OverlayCard.jsx';

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <Calendar onSelect={setSelected} />
      {selected && (
        <OverlayCard date={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

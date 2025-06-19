import React from 'react';

export default function TileDate({ day, onSelect }) {
  const { value, current, isToday, dateStr } = day;
  const classes = ['tile'];
  if (!current) classes.push('other');
  if (isToday) classes.push('today');

  return (
    <div
      className={classes.join(' ')}
      onClick={() => onSelect(dateStr)}
    >
      {value}
    </div>
  );
}

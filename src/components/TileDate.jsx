import React from 'react';

export default function TileDate({ day, onSelect }) {
  const { value, current, isToday, dateStr } = day;
  let classes = 'h-[50px] p-2 border border-[#e6e4e4] text-right cursor-pointer';
  if (!current) classes += ' opacity-40';
  if (isToday) classes += ' text-[#5286fa] bg-[#c4d9fd] border-current';

  return (
    <div
      className={classes}
      onClick={() => onSelect(dateStr)}
    >
      {value}
    </div>
  );
}

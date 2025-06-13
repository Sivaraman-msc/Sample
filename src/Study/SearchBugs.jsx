import React, { useState } from 'react';

const SearchBugs = ({ allBugs }) => {
  const [query, setQuery] = useState('');

  const filtered = allBugs.filter(bug =>
    bug.BugName.toLowerCase().includes(query.toLowerCase()) ||
    bug.status.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search by title or status..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filtered.map((bug) => (
        <div key={bug.id}>{bug.BugName} - {bug.status}</div>
      ))}
    </>
  );
};
import React from "react";

function Dashboard({ candidates, searchQuery, setSearchQuery, onUpdateStatus, onDeleteCandidate }) {
  const filtered = candidates.filter((c) =>
    c.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Referred Candidates</h2>
      <input
        type="search"
        placeholder="Search by job title or status"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filtered.length === 0 ? (
        <p>No candidates found.</p>
      ) : (
        filtered.map((candidate) => (
          <div key={candidate.id} className="candidate-card">
            <h3>{candidate.name}</h3>
            <p><strong>Job Title:</strong> {candidate.jobTitle}</p>
            <p><strong>Status:</strong> {candidate.status}</p>
            <select
              value={candidate.status}
              onChange={(e) => onUpdateStatus(candidate.id, e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="Reviewed">Reviewed</option>
              <option value="Hired">Hired</option>
            </select>
            <button className="delete-btn" onClick={() => onDeleteCandidate(candidate.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
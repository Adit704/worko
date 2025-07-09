import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import ReferralForm from "./components/ReferralForm";
import "./App.css";

function App() {
  const [candidates, setCandidates] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddCandidate = (newCandidate) => {
    const candidateWithId = {
      ...newCandidate,
      id: Date.now(),
      status: "Pending",
    };
    setCandidates([candidateWithId, ...candidates]);
  };

  const handleUpdateStatus = (id, newStatus) => {
    const updated = candidates.map((c) =>
      c.id === id ? { ...c, status: newStatus } : c
    );
    setCandidates(updated);
  };

  const handleDeleteCandidate = (id) => {
    const filtered = candidates.filter((c) => c.id !== id);
    setCandidates(filtered);
  };

  return (
    <div className="container">
      <ReferralForm onAddCandidate={handleAddCandidate} />
      <Dashboard
        candidates={candidates}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onUpdateStatus={handleUpdateStatus}
        onDeleteCandidate={handleDeleteCandidate}
      />
    </div>
  );
}

export default App;
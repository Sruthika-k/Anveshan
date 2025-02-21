import { useEffect, useState } from "react";
import { getMatches } from "../services/api";

export default function MatchList({ userId, skills }) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function fetchMatches() {
      const result = await getMatches(userId, skills);
      setMatches(result);
    }
    fetchMatches();
  }, [userId, skills]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Your Matches</h2>
      {matches.length > 0 ? (
        <ul>
          {matches.map((user) => (
            <li key={user.id} className="p-2 border-b">{user.name} - {user.skills.join(", ")}</li>
          ))}
        </ul>
      ) : (
        <p>No matches found.</p>
      )}
    </div>
  );
}

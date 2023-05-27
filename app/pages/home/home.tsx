import { useState, useEffect } from "react";
import { getDashboardData } from "../api/dashboard"; // Rust function to fetch data

interface DashboardProps {
    name: string;
}

interface DashboardData {
    news: string[];
    events: string[];
    updates: string[];
}

export default function Dashboard({ name }: DashboardProps) {
    const [data, setData] = useState<DashboardData | null>(null);

    useEffect(() => {
        getDashboardData()
        .then((data) => setData(data))
        .catch((error) => console.error(error));
    }, []);

  return (
    <div>
      <h1>Hello, {name}!</h1>
      {data ? (
        <>
          <h2>News</h2>
          <ul>
            {data.news.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2>Events</h2>
          <ul>
            {data.events.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2>Updates</h2>
          <ul>
            {data.updates.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading dashboard data...</p>
      )}
    </div>
  );
}

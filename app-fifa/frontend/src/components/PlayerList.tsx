import { useEffect, useState } from 'react'
import axios from 'axios'

export default function PlayerList() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
      const fetchPlayers = async () => {
        try {
          const response = await axios.get('http://localhost:3000/players');
          setPlayers(response.data);
        } catch (error) {
          console.error('Error fetching players:', error);
        }
      };
  
      fetchPlayers();
    }, []);
  
    return (
      <div>
        <h1>Player List</h1>
        <ul>
          {(players as { name: string, club: string, nationality: string, price: number }[]).map(player => (
            <li key={player.name}>
              <strong>Name:</strong> {player.name}<br />
              <strong>Club:</strong> {player.club}<br />
              <strong>Nationality:</strong> {player.nationality}<br />
              <strong>Price:</strong> {player.price}<br />
              <br />
            </li>
          ))}
        </ul>
      </div>
    );
}

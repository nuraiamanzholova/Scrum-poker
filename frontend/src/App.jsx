import { useState } from 'react'; // Bibliothek hinzufügen
import './App.css'; // CSS Datei

function App() {
  function Card({ value, onClick, disabled }) { // Value = Zahl, onClick = Funktion, disabled true/false
    return (
      <button className="card" onClick={onClick} disabled={disabled}>
        {value}
      </button>
    );
  }

  function getCookie(name) { // Cookie lesen
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [key, value] = cookie.split('=');
      if (key === name) return value;
    }
    return null;
  }

  function Room() {
    const [room, setRoom] = useState('');
    const [voted, setVoted] = useState(false);

    function joinRoom() {
      if (room.trim() === '') {
        alert('Bitte gib einen Raumnamen ein!');
      } else {
        alert('Raum beitreten: ' + room);
      }
    }

    // Cookie setzen
    function vote(value) {
      if (!getCookie('voted')) {
        document.cookie = 'voted=true; path=/; max-age=86400';
        setVoted(true);
        alert('Danke für deine Stimme: ' + value);
      } else {
        alert('Du hast bereits abgestimmt.');
      }
    }

    // Cookie löschen
    function deleteCookie(name) {
      document.cookie = name + '=; path=/; max-age=0';
      setVoted(false);
      alert('Cookie gelöscht! Du kannst jetzt wieder abstimmen.');
    }

    return (
      <>
        <div className="login-container">
          <h1>Login</h1>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </div>

        <section className="cards-container">
          <h2>Abstimmung</h2>
          <div className="cards">
            <Card value={0} onClick={() => vote(0)} />
            <Card value={0.5} onClick={() => vote(0.5)} />
            <Card value={1} onClick={() => vote(1)} />
            <Card value={2} onClick={() => vote(2)} />
            <Card value={3} onClick={() => vote(3)} />
            <Card value={5} onClick={() => vote(5)} />
            <Card value={8} onClick={() => vote(8)} />
            <Card value={13} onClick={() => vote(13)} />
          </div>
          <button className="end-btn">Abstimmung beenden</button>
        </section>

        <button onClick={() => deleteCookie('voted')}>Cookie löschen</button>
      </>
    );
  }


  return <Room />;
}

export default App

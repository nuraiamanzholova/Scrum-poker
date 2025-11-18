import { useState } from 'react';
import './App.css';

function App() {
  function Card({ value, onClick, disabled }) {
    return (
      <button className="card" onClick={onClick} disabled={disabled}>
        {value}
      </button>
    );
  }

  function getCookie(name) {
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

    function vote(value) {
      if (!getCookie('voted')) {
        document.cookie = 'voted=true; path=/; max-age=86400';
        setVoted(true);
        alert('Danke für deine Stimme: ' + value);
      } else {
        alert('Du hast bereits abgestimmt.');
      }
    }

    function deleteCookie(name) {
      document.cookie = name + '=; path=/; max-age=0';
      setVoted(false);
      alert('Cookie gelöscht! Du kannst jetzt wieder abstimmen.');
    }

    function prüfen() {
      const wert = Number(document.getElementById("Raum-ID").value);
      const fehler = document.getElementById("fehler");

      if (wert <= 0) {
        fehler.textContent = "Raum ID darf nicht kleiner als 0 sein";
      fehler.style.display = "block";
      } else {
        fehler.style.display = "none";
      }
    }

    return (
      <>
        <div className="login-container">
          <h1>Login</h1>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <p id="fehler" style={{ color: "red", display: "none" }}></p>
          <button>Login</button>
          <br /><br />

          <h1>Raum ID eingeben</h1>
          <input type="number" id="Raum-ID" />
          <button onClick={prüfen}>Beitreten</button>
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
          <br></br>
          <button className="end-btn">Abstimmung beenden</button>
        </section><br></br>

        <button onClick={() => deleteCookie('voted')}>Cookie löschen</button>
        <br></br>
         <button className="end-btn">Abstimmung aufdecken</button>
      </>
    );
  }

  return <Room />;
}

export default App;

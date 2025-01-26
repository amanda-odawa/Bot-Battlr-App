import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);

  const addToArmy = (bot) => {
    if (!army.some((armyBot) => armyBot.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter((armyBot) => armyBot.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, { method: "DELETE" })
      .then(() => {
        setBots(bots.filter((b) => b.id !== bot.id));
        setArmy(army.filter((armyBot) => armyBot.id !== bot.id));
      })
      .catch((err) => console.error("Error deleting bot:", err));
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} removeFromArmy={removeFromArmy} dischargeBot={dischargeBot} />
      <BotCollection bots={bots} addToArmy={addToArmy} dischargeBot={dischargeBot} />
    </div>
  );
}

export default App;

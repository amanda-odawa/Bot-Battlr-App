import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  // Function to add a bot to the army
  const addToArmy = (bot) => {
    if (!botArmy.find((b) => b.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  // Function to remove a bot from the army
  const removeFromArmy = (bot) => {
    setBotArmy(botArmy.filter((b) => b.id !== bot.id));
  };

  // Function to discharge a bot forever
  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setBots(bots.filter((b) => b.id !== bot.id));
        setBotArmy(botArmy.filter((b) => b.id !== bot.id));
      })
      .catch((error) => console.error("Error discharging bot:", error));
  };

  return (
    <div>
      <h1 style={{textAlign: "center", marginTop: "20px", color: "#28812b"}}>Bot Battlr</h1>
      <YourBotArmy botArmy={botArmy} onRemoveFromArmy={removeFromArmy} onDischarge={dischargeBot} />
      <BotCollection bots={bots} onAddToArmy={addToArmy} onDischarge={dischargeBot} />
    </div>
  );
}

export default App;

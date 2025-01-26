import React from "react";
import BotCard from "./BotCard";
import "../styles/YourBotArmy.css";

function YourBotArmy({ botArmy, onRemoveFromArmy, onDischarge }) {
  return (
    <div className="bot-army">
      {botArmy.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onAddToArmy={null} // Not needed in YourBotArmy
          onDischarge={onDischarge}
          onRemoveFromArmy={onRemoveFromArmy}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;

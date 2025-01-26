import React from "react";
import BotCard from "./BotCard";
import "../styles/BotCollection.css";

function BotCollection({ bots, onAddToArmy, onDischarge }) {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onAddToArmy={onAddToArmy}
          onDischarge={onDischarge}
        />
      ))}
    </div>
  );
}

export default BotCollection;


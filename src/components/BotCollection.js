import React from "react";
import BotCard from "./Components/BotCard";

function BotCollection({ bots, addToArmy, dischargeBot }) {
  return (
    <div>
      <h2>All Bots</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleClick={addToArmy} dischargeBot={dischargeBot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;

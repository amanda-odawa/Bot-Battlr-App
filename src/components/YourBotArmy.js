import React from "react";
import BotCard from "./Components/BotCard";

function YourBotArmy({ army, removeFromArmy, dischargeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {army.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleClick={removeFromArmy} dischargeBot={dischargeBot} />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;

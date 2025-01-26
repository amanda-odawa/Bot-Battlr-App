import React from "react";

function BotCard({ bot, handleClick, dischargeBot }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px", width: "200px" }}>
      <img src={bot.avatar_url} alt={bot.name} style={{ width: "100%" }} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p>
        <strong>Class:</strong> {bot.bot_class}
      </p>
      <p>
        <strong>Health:</strong> {bot.health}
      </p>
      <p>
        <strong>Damage:</strong> {bot.damage}
      </p>
      <p>
        <strong>Armor:</strong> {bot.armor}
      </p>
      <button onClick={() => handleClick(bot)}>Select</button>
      <button onClick={() => dischargeBot(bot)} style={{ color: "red" }}>
        x
      </button>
    </div>
  );
}

export default BotCard;

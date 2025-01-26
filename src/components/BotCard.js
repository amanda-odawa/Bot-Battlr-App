import React from "react";

function BotCard({ bot, onAddToArmy, onDischarge, onRemoveFromArmy }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} className="bot-image" />
      <h3>{bot.name}</h3>
      <p>
        <strong>Class:</strong> {bot.bot_class}
      </p>
      <p>
        <strong>Catchphrase:</strong> <em>"{bot.catchphrase}"</em>
      </p>
      <p>
        <strong>Health:</strong> {bot.health} | <strong>Damage:</strong> {bot.damage} | <strong>Armor:</strong> {bot.armor}
      </p>
      {onAddToArmy && (
        <button onClick={() => onAddToArmy(bot)}>Add to Army</button>
      )}
      {onRemoveFromArmy && (
        <button onClick={() => onRemoveFromArmy(bot)}>Remove from Army</button>
      )}
      <button onClick={() => onDischarge(bot)} className="discharge-button">
        Discharge
      </button>
    </div>
  );
}

export default BotCard;

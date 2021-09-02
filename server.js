const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  res.json({
    id: 1373,
    weapon: 'Scimitar',
    chestArmor: 'Silk Robe',
    hearArmor: 'Hood of Reflection',
    waistArmor: 'Sash',
    footArmor: 'Holy Greaves',
    handArmor: '"Victory Moon" Gauntlets of Vitriol +1',
    necklace: 'Amulet',
    ring: 'Gold Ring'
  });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

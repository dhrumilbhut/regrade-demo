import { answer } from "./bot.mjs";

// Each case checks that the bot's answer still contains the key fact.
const cases = [
  ["opening-hours", "9am to 5pm"],
  ["refund-window", "30 days"],
  ["shipping-time", "3 to 5 business days"],
  ["support-email", "help@example.com"],
  ["gift-cards", "never expire"],
  ["price-match", "14 days"],
];

export default {
  name: "support-bot",
  pipeline: { name: "support-bot", run: (id) => answer(String(id)) },
  cases: cases.map(([id, fact]) => ({ id, input: id, scorers: ["hasKeyFact"], scorerConfig: { hasKeyFact: { fact } } })),
  scorers: {
    hasKeyFact: ({ output, config }) => output.includes(config.fact),
  },
};

// A tiny store-support bot. In a real project this would call an LLM with a prompt;
// here the "prompt" is a table of answers, so the demo runs without an API key.
const ANSWERS = {
  "opening-hours": "Happy to help: we are open 9am to 5pm, Monday to Friday.",
  "refund-window": "You can return any item within 30 days for a full refund.",
  "shipping-time": "Standard shipping takes 3 to 5 business days.",
  "support-email": "Write to help@example.com and we reply within a day.",
  "gift-cards": "Gift cards never expire and work online and in store.",
  "price-match": "We match any lower price from a major retailer within 14 days.",
};

export function answer(questionId) {
  return ANSWERS[questionId] ?? "Sorry, I don't know.";
}

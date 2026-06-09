import { useState } from "react";

const restaurants = [
  { name: "Novara", socialPressure: 3, comfort: 4, energy: 3, soloFriendly: 2, effort: 3, archetypes: ["Comfort Gathering"], emotionalNote: "Good when you want to go out without a large commitment", atmosphere: "low-lit, cinematic, nostalgic" },
  { name: "Fuji Assembly", socialPressure: 5, comfort: 3, energy: 3, soloFriendly: 3, effort: 3, archetypes: ["Intentional Evening"], emotionalNote: "Easy date night spot", atmosphere: "romantic, low-lit" },
  { name: "Wicked Craft", socialPressure: 5, comfort: 2, energy: 5, soloFriendly: 1, effort: 4, archetypes: ["Social Momentum"], emotionalNote: "The kind of place when you want energy", atmosphere: "dark, energetic, trendy, flashy" },
  { name: "Chickadee", socialPressure: 3, comfort: 4, energy: 2, soloFriendly: 2, effort: 4, archetypes: ["Intentional Evening"], emotionalNote: "Good for catching up with friends while still having the food be intentional", atmosphere: "intimate" },
  { name: "Stillwater", socialPressure: 4, comfort: 2, energy: 2, soloFriendly: 2, effort: 4, archetypes: ["Intentional Evening"], emotionalNote: "Feels upscale without the pressure", atmosphere: "upscale, modern, bright" },
  { name: "The Q", socialPressure: 3, comfort: 4, energy: 3, soloFriendly: 2, effort: 2, archetypes: ["Comfort Gathering"], emotionalNote: "The place that makes rainy days warmer", atmosphere: "warm, grounding" },
  { name: "Happy Lamb Hotpot Chinatown", socialPressure: 4, comfort: 3, energy: 2, soloFriendly: 2, effort: 2, archetypes: ["Comfort Gathering"], emotionalNote: "Good when you want comfort food", atmosphere: "warm, cozy, grounding" },
  { name: "Shabu Zen Chinatown", socialPressure: 5, comfort: 4, energy: 2, soloFriendly: 4, effort: 2, archetypes: ["Comfort Gathering"], emotionalNote: "Good when you want comfort food", atmosphere: "intimate, welcoming" },
  { name: "Ogawa Coffee", socialPressure: 2, comfort: 5, energy: 1, soloFriendly: 5, effort: 1, archetypes: ["Solo Reset"], emotionalNote: "Good when you need a change of scenery", atmosphere: "welcoming, communal" },
  { name: "Barcelona Wine Bar", socialPressure: 5, comfort: 4, energy: 3, soloFriendly: 3, effort: 4, archetypes: ["Worth Leaving the House For"], emotionalNote: "The place for long conversations with people you know well", atmosphere: "romantic, low-lit, intimate" },
  { name: "Coreanos", socialPressure: 1, comfort: 2, energy: 2, soloFriendly: 5, effort: 1, archetypes: ["Easy Win"], emotionalNote: "Good when food is the goal, not the outing", atmosphere: "cozy" },
  { name: "MalaTown", socialPressure: 1, comfort: 5, energy: 2, soloFriendly: 4, effort: 2, archetypes: ["Comfort Gathering"], emotionalNote: "Good when you're hungry and making a decision feels annoying", atmosphere: "cozy" },
  { name: "Kimchi Papi", socialPressure: 2, comfort: 1, energy: 2, soloFriendly: 4, effort: 1, archetypes: ["Easy Win"], emotionalNote: "Good when food is the goal, not the outing", atmosphere: "warm" },
  { name: "Seoul Soulongtang", socialPressure: 3, comfort: 3, energy: 3, soloFriendly: 2, effort: 2, archetypes: ["Comfort Gathering"], emotionalNote: "Good when you're craving something warm and restorative", atmosphere: "warm, welcoming" },
  { name: "Row 34", socialPressure: 4, comfort: 3, energy: 3, soloFriendly: 2, effort: 4, archetypes: ["Date Night"], emotionalNote: "Good when you want the evening to be special", atmosphere: "airy, modern, upscale, bright" },
  { name: "Scoop & Scootery", socialPressure: 1, comfort: 2, energy: 2, soloFriendly: 5, effort: 1, archetypes: ["Tiny Reward"], emotionalNote: "The place for a small win after a rough day", atmosphere: "playful, nostalgic, cheerful" },
  { name: "Meet Fresh", socialPressure: 1, comfort: 2, energy: 2, soloFriendly: 2, effort: 2, archetypes: ["Tiny Reward"], emotionalNote: "The place for a small win after a rough day", atmosphere: "calming, casual, comforting" },
  { name: "FroyoWorld", socialPressure: 1, comfort: 1, energy: 3, soloFriendly: 5, effort: 1, archetypes: ["Tiny Reward"], emotionalNote: "The place for a small win after a rough day", atmosphere: "playful, energetic" },
  { name: "Weekend", socialPressure: 2, comfort: 3, energy: 1, soloFriendly: 5, effort: 2, archetypes: ["Easy Social"], emotionalNote: "Good for a quick catch up with friends", atmosphere: "chill, steady" },
  { name: "Spring Shabu", socialPressure: 2, comfort: 2, energy: 3, soloFriendly: 2, effort: 2, archetypes: ["Comfort Gathering"], emotionalNote: "Good for long meals that naturally turn into conversation", atmosphere: "communal, cozy" },
  { name: "Crazy Good Kitchen", socialPressure: 3, comfort: 2, energy: 3, soloFriendly: 2, effort: 2, archetypes: ["Worth Leaving the House For"], emotionalNote: "The place when the food is the main character", atmosphere: "lively, casual, satisfying" },
  { name: "Kaju Tofu House", socialPressure: 2, comfort: 4, energy: 2, soloFriendly: 3, effort: 2, archetypes: ["Comfort Gathering"], emotionalNote: "Good when you want a comfort meal but want it to be intentional still", atmosphere: "warm, cozy, grounding" },
  { name: "Lolita Cocina & Tequila Bar", socialPressure: 5, comfort: 1, energy: 5, soloFriendly: 1, effort: 5, archetypes: ["Social Momentum"], emotionalNote: "The place for when you want the night to have momentum", atmosphere: "low-lit, lively, welcoming" },
  { name: "Mala Restaurant", socialPressure: 3, comfort: 5, energy: 4, soloFriendly: 2, effort: 3, archetypes: ["Comfort Gathering"], emotionalNote: "Good for long meals that naturally turn into conversation", atmosphere: "warm, bustling, energetic" },
  { name: "Buttermilk Bourbon", socialPressure: 5, comfort: 3, energy: 3, soloFriendly: 3, effort: 2, archetypes: ["Intentional Evening"], emotionalNote: "The place for comfort food that still feels like a night out", atmosphere: "warm, lively, rustic" },
  { name: "Matcha Maiko", socialPressure: 2, comfort: 2, energy: 2, soloFriendly: 5, effort: 1, archetypes: ["Tiny Reward"], emotionalNote: "Good for when you want a treat without turning it into an outing", atmosphere: "playful, bright, calming" },
  { name: "Committee", socialPressure: 4, comfort: 4, energy: 3, soloFriendly: 3, effort: 3, archetypes: ["Social Momentum"], emotionalNote: "Good for groups that want something energetic without committing to a full night", atmosphere: "romantic, airy, cozy" },
  { name: "The Bowery Bar", socialPressure: 5, comfort: 2, energy: 4, soloFriendly: 2, effort: 2, archetypes: ["Social Momentum"], emotionalNote: "Good when you want the night to pick up speed", atmosphere: "lively, cozy" },
  { name: "Shake Shack", socialPressure: 2, comfort: 2, energy: 2, soloFriendly: 5, effort: 1, archetypes: ["Reliable Default"], emotionalNote: "Good when you want something reliable after a long day", atmosphere: "bustling" },
  { name: "Lucy's Tavern", socialPressure: 5, comfort: 3, energy: 3, soloFriendly: 4, effort: 1, archetypes: ["Easy Social"], emotionalNote: "Good when you want the conversation to be the focus", atmosphere: "casual, welcoming, familiar" },
  { name: "Chicken and Co", socialPressure: 2, comfort: 4, energy: 1, soloFriendly: 5, effort: 1, archetypes: ["Easy Win"], emotionalNote: "Good when you want something reliable after a long day", atmosphere: "cozy, intimate" },
  { name: "Gyukaku", socialPressure: 3, comfort: 4, energy: 3, soloFriendly: 1, effort: 2, archetypes: ["Light Adventure"], emotionalNote: "The place where it's both the activity and place to eat", atmosphere: "low-lit, intimate, energetic" },
  { name: "Yvonne's", socialPressure: 5, comfort: 3, energy: 4, soloFriendly: 1, effort: 4, archetypes: ["Intentional Evening"], emotionalNote: "Good for quiet intimate dates or social gatherings", atmosphere: "romantic, intimate, low-lit" },
  { name: "Yume Ga Arukara", socialPressure: 2, comfort: 5, energy: 1, soloFriendly: 4, effort: 1, archetypes: ["Solo Reset"], emotionalNote: "Good when you want to be around people without having to interact with them", atmosphere: "grounding, communal, focused" },
  { name: "Bartaco", socialPressure: 3, comfort: 3, energy: 3, soloFriendly: 2, effort: 1, archetypes: ["Date Night"], emotionalNote: "For when you want consistently good drinks and food", atmosphere: "lively, warm" },
  { name: "Woods Hill Pier 4", socialPressure: 4, comfort: 2, energy: 4, soloFriendly: 2, effort: 4, archetypes: ["Intentional Evening"], emotionalNote: "For when you want an upscale intimate dinner but not overly formal", atmosphere: "modern, intimate, ambient" },
  { name: "Earls Kitchen + Bar", socialPressure: 3, comfort: 1, energy: 2, soloFriendly: 1, effort: 1, archetypes: ["Easy Social"], emotionalNote: "Good for easy group outings without overthinking", atmosphere: "lively, casual" },
  { name: "Yardhouse", socialPressure: 2, comfort: 3, energy: 2, soloFriendly: 3, effort: 1, archetypes: ["Reliable Default"], emotionalNote: "Good when everyone wants something different and nobody wants to overthink it", atmosphere: "lively, casual, familiar" },
  { name: "Hojoko", socialPressure: 2, comfort: 2, energy: 3, soloFriendly: 1, effort: 2, archetypes: ["Social Momentum"], emotionalNote: "Good when you want the dinner to feel like part of the night out", atmosphere: "energetic, playful, vibrant" },
  { name: "Taqueria Don Roge", socialPressure: -3, comfort: 4, energy: -3, soloFriendly: 5, effort: -4, archetypes: ["Reliable Default"], emotionalNote: "The place for reliable and dependable food", atmosphere: "casual, welcoming, unfussy" },
  { name: "Common Ground Coffee Roasters", socialPressure: -3, comfort: 3, energy: -4, soloFriendly: 5, effort: -5, archetypes: ["Solo Reset"], emotionalNote: "Good when you need a quiet place to think outside of home", atmosphere: "calm, airy, reflective" },
  { name: "Chelsea Station", socialPressure: -1, comfort: 1, energy: 1, soloFriendly: 2, effort: 1, archetypes: ["Comfort Gathering"], emotionalNote: "Good for easy catch ups that don't need a special occasion", atmosphere: "warm, welcoming, neighborhood" },
  { name: "Mike's Roast Beef", socialPressure: -3, comfort: 2, energy: -2, soloFriendly: 4, effort: -3, archetypes: ["Easy Win"], emotionalNote: "The place for when you're hungry and don't want to think too hard", atmosphere: "casual, nostalgic, no frills" },
  { name: "Richie's Slush & Food", socialPressure: -4, comfort: 2, energy: -1, soloFriendly: 4, effort: -4, archetypes: ["Tiny Reward"], emotionalNote: "Good when you want a little treat with some fresh air", atmosphere: "playful, nostalgic, seasonal" },
  { name: "Peruvian Taste", socialPressure: -2, comfort: 1, energy: -4, soloFriendly: -1, effort: -3, archetypes: ["Change of Pace"], emotionalNote: "Good when you want something different without taking a risk", atmosphere: "cozy, inviting, authentic" },
  { name: "State Street Provisions", socialPressure: 3, comfort: 1, energy: -3, soloFriendly: -3, effort: 3, archetypes: ["Intentional Evening"], emotionalNote: "The place for elevated evenings without the formality", atmosphere: "modern, lively, upscale" },
  { name: "Sip Cafe", socialPressure: -4, comfort: 3, energy: -4, soloFriendly: 4, effort: -3, archetypes: ["Solo Reset"], emotionalNote: "Good when you want to sit somewhere with no expectations", atmosphere: "quiet, cozy, grounding" },
  { name: "Somenya", socialPressure: 1, comfort: 4, energy: -3, soloFriendly: 1, effort: 1, archetypes: ["Worth Leaving the House For"], emotionalNote: "Good when the food itself is the reason you're going", atmosphere: "intimate, focused, authentic" },
  { name: "Tora", socialPressure: -2, comfort: 4, energy: -3, soloFriendly: 2, effort: -1, archetypes: ["Worth Leaving the House For"], emotionalNote: "Good when you want a treat without making it a whole event", atmosphere: "modern, refined, intimate" },
  { name: "Alma Gaucha", socialPressure: 3, comfort: 2, energy: -2, soloFriendly: -4, effort: 3, archetypes: ["Intentional Evening"], emotionalNote: "The place when you want the dinner to be the main event", atmosphere: "upscale, warm, celebratory" },
  { name: "Kura Revolving Sushi Bar", socialPressure: -5, comfort: 3, energy: -2, soloFriendly: 2, effort: -3, archetypes: ["Easy Social"], emotionalNote: "Good when you want something interactive and low pressure", atmosphere: "playful, casual, energetic" },
  { name: "Borrachito Taqueria & Spirits", socialPressure: 3, comfort: 3, energy: 2, soloFriendly: 2, effort: 3, archetypes: ["Social Momentum"], emotionalNote: "Good when one drink turns into staying longer than expected", atmosphere: "lively, warm, energetic" },
  { name: "Gigantic Wonton", socialPressure: -4, comfort: 4, energy: -3, soloFriendly: 4, effort: -3, archetypes: ["Comfort Gathering"], emotionalNote: "Good when you're craving something warm, filling and uncomplicated", atmosphere: "cozy, casual, comforting" },
  { name: "Jinjee", socialPressure: 4, comfort: 3, energy: 3, soloFriendly: 1, effort: 4, archetypes: ["Easy Social"], emotionalNote: "Good place for a gathering, catch up with friends and cute date nights", atmosphere: "warm, social, welcoming" },
  { name: "Dynasty", socialPressure: 2, comfort: 4, energy: 3, soloFriendly: 4, effort: 2, archetypes: ["Reliable Default"], emotionalNote: "Grab food or sit down, good energy depending on the day", atmosphere: "bustling, casual, familiar" },
  { name: "Mikiya", socialPressure: 3, comfort: 4, energy: 3, soloFriendly: 1, effort: 4, archetypes: ["Comfort Gathering"], emotionalNote: "Comfort food with friends, easy to talk", atmosphere: "warm, communal, cozy" },
  { name: "Taiwan Cafe", socialPressure: 2, comfort: 5, energy: 2, soloFriendly: 5, effort: 2, archetypes: ["Easy Win"], emotionalNote: "Good when you're hungry and don't want the decision to be the hard part", atmosphere: "bustling, casual, familiar" },
  { name: "Mai Izakaya", socialPressure: 4, comfort: 3, energy: 4, soloFriendly: 3, effort: 4, archetypes: ["Intentional Evening"], emotionalNote: "Good vibes but not too casual, good date night or 1 on 1 spot", atmosphere: "intimate, low-lit, modern" },
  { name: "Mahaniyom", socialPressure: 3, comfort: 4, energy: 3, soloFriendly: 3, effort: 3, archetypes: ["Worth Leaving the House For"], emotionalNote: "Small, vibey restaurant. Good for solo date night", atmosphere: "intimate, energetic, distinctive" },
  { name: "Sanbada", socialPressure: 2, comfort: 4, energy: 2, soloFriendly: 2, effort: 3, archetypes: ["Comfort Gathering"], emotionalNote: "Cute restaurant, casual and simple", atmosphere: "cozy, welcoming, casual" },
  { name: "Merai", socialPressure: 3, comfort: 4, energy: 3, soloFriendly: 3, effort: 3, archetypes: ["Worth Leaving the House For"], emotionalNote: "Small, vibey restaurant. Good for solo date night or small friend gathering", atmosphere: "intimate, modern, vibrant" },
  { name: "Cafe Bonjour", socialPressure: 3, comfort: 3, energy: 2, soloFriendly: 4, effort: 2, archetypes: ["Tiny Reward"], emotionalNote: "Good when you want to slow down and enjoy yourself", atmosphere: "cozy, bright, neighborhood" },
  { name: "Ruka Restobar", socialPressure: 5, comfort: 2, energy: 4, soloFriendly: 3, effort: 5, archetypes: ["Intentional Evening"], emotionalNote: "More upscale, good for groups or celebrations", atmosphere: "upscale, lively, warm" },
  { name: "Bootleg Special", socialPressure: 5, comfort: 2, energy: 4, soloFriendly: 3, effort: 4, archetypes: ["Social Momentum"], emotionalNote: "Good for groups, slightly more casual vibe", atmosphere: "lively, communal, energetic" },
  { name: "Shy Bird", socialPressure: 2, comfort: 4, energy: 2, soloFriendly: 2, effort: 3, archetypes: ["Reliable Default"], emotionalNote: "Good when everyone wants something dependable and easy", atmosphere: "casual, modern, welcoming" },
  { name: "Contessa", socialPressure: 5, comfort: 2, energy: 4, soloFriendly: 2, effort: 4, archetypes: ["Intentional Evening"], emotionalNote: "Good when you want the night to feel a bit special and glamorous", atmosphere: "upscale, airy, romantic" },
  { name: "Futago Udon", socialPressure: 3, comfort: 4, energy: 2, soloFriendly: 2, effort: 3, archetypes: ["Solo Reset"], emotionalNote: "Good when you want something warm and restorative without too much social energy", atmosphere: "cozy, grounding, focused" },
  { name: "KChickin", socialPressure: 2, comfort: 5, energy: 2, soloFriendly: 1, effort: 2, archetypes: ["Easy Win"], emotionalNote: "Good when comfort food is the goal and you're not making a night of it", atmosphere: "casual, comforting, unfussy" },
  { name: "Mountain House", socialPressure: 3, comfort: 2, energy: 3, soloFriendly: 3, effort: 4, archetypes: ["Worth Leaving the House For"], emotionalNote: "Good when you're craving something unique that you can't easily get elsewhere", atmosphere: "vibrant, communal, immersive" },
  { name: "Santouka Back Bay", socialPressure: 2, comfort: 5, energy: 3, soloFriendly: 2, effort: 3, archetypes: ["Solo Reset"], emotionalNote: "Good when you want a quiet comfort meal and don't want to think too much", atmosphere: "warm, focused, comforting" },
  { name: "Shojo Boston", socialPressure: 5, comfort: 3, energy: 5, soloFriendly: 3, effort: 3, archetypes: ["Social Momentum"], emotionalNote: "The place when you want dinner to feel energetic and part of the night's adventure", atmosphere: "lively, bold, playful" },
  { name: "Caffe Vittoria", socialPressure: 2, comfort: 3, energy: 3, soloFriendly: 4, effort: 3, archetypes: ["Tiny Reward"], emotionalNote: "Good when you want to extend the evening a little longer over coffee and dessert", atmosphere: "nostalgic, cozy, romantic" },
  { name: "Maguro", socialPressure: 3, comfort: 3, energy: 3, soloFriendly: 3, effort: 3, archetypes: ["Intentional Evening"], emotionalNote: "Good when you want reliable sushi that still feels special", atmosphere: "intimate, modern, calm" },
  { name: "Tsurutontan", socialPressure: 3, comfort: 2, energy: 2, soloFriendly: 3, effort: 3, archetypes: ["Worth Leaving the House For"], emotionalNote: "Good when the food itself is the reason you're making the trip", atmosphere: "energetic, communal, distinctive" },
  { name: "Nagomi", socialPressure: 4, comfort: 2, energy: 2, soloFriendly: 2, effort: 4, archetypes: ["Solo Reset"], emotionalNote: "Good when you want a reliable sushi night that still feels special", atmosphere: "calm, intimate, welcoming" },
  { name: "Friendship BBQ", socialPressure: 4, comfort: 3, energy: 4, soloFriendly: 3, effort: 3, archetypes: ["Comfort Gathering"], emotionalNote: "Good when dinner is as much about the conversation as the food", atmosphere: "communal, lively, warm" },
  { name: "Bosso Ramen Tavern", socialPressure: 4, comfort: 2, energy: 4, soloFriendly: 3, effort: 2, archetypes: ["Social Momentum"], emotionalNote: "Good when you want a casual night with a little bit of energy", atmosphere: "lively, casual, energetic" },
  { name: "Nan Xiang Express", socialPressure: 1, comfort: 4, energy: 1, soloFriendly: 5, effort: 1, archetypes: ["Solo Reset"], emotionalNote: "Good when you want comfort food and don't want to make a whole outing of it", atmosphere: "comforting, casual, focused" },
  { name: "Josephine's", socialPressure: 3, comfort: 4, energy: 2, soloFriendly: 2, effort: 2, archetypes: ["Intentional Evening"], emotionalNote: "Good when you want the night to feel special without feeling formal", atmosphere: "intimate, warm, romantic" },
];

const moodWeights = {
  "Need Comfort":             { socialPressure: -2, comfort: 3, energy: -1, soloFriendly: 2, effort: -2 },
  "Running Low":              { socialPressure: -3, comfort: 2, energy: -2, soloFriendly: 1, effort: -3 },
  "Want Energy":              { socialPressure: 2, comfort: -1, energy: 4, soloFriendly: -2, effort: 1 },
  "Want Connection":          { socialPressure: 3, comfort: 1, energy: 2, soloFriendly: -1, effort: 2 },
  "Want a Small Win":         { socialPressure: -1, comfort: 2, energy: 2, soloFriendly: 1, effort: 1 },
  "Need a Change of Scenery": { socialPressure: -2, comfort: 2, energy: 2, soloFriendly: 2, effort: 1 },
  "Want the Night to Matter": { socialPressure: 1, comfort: 1, energy: 1, soloFriendly: -1, effort: 4 },
  "Don't Want to Think":      { socialPressure: -2, comfort: 3, energy: 1, soloFriendly: 2, effort: -2 },
};

const groupWeights = {
  "Just Me":               { soloFriendly: 3, socialPressure: -2 },
  "One Other Person":      { soloFriendly: -1, socialPressure: 2 },
  "Close Friends":         { soloFriendly: -1, socialPressure: 1, comfort: 1 },
  "A Group":               { soloFriendly: -2, socialPressure: 2, energy: 1 },
};

const effortWeights = {
  "Staying Nearby":        { effort: -3 },
  "Worth a Short Drive":   { effort: 0 },
  "Worth Making a Night of It": { effort: 3 },
  "Surprise Me":           { effort: 0 },
};

function scoreRestaurant(r, mood, group, effort) {
  const mw = moodWeights[mood] || {};
  const gw = groupWeights[group] || {};
  const ew = effortWeights[effort] || {};

  const combined = {};
  ["comfort", "energy", "soloFriendly", "socialPressure", "effort"].forEach(dim => {
    combined[dim] = (mw[dim] || 0) + (gw[dim] || 0) + (ew[dim] || 0);
  });

  let score = 0;
  score += (r.comfort || 3) * (combined.comfort || 0);
  score += (r.energy || 3) * (combined.energy || 0);
  score += (r.soloFriendly || 3) * (combined.soloFriendly || 0);
  score += (6 - (r.socialPressure || 3)) * Math.abs(combined.socialPressure || 0) * Math.sign(combined.socialPressure || 1) * -1;
  score += (6 - (r.effort || 3)) * Math.abs(combined.effort || 0) * Math.sign(combined.effort || 1) * -1;

  return score;
}

const archetypeColors = {
  "Solo Reset": "#b8a898",
  "Comfort Gathering": "#c4956a",
  "Tiny Reward": "#a8b89c",
  "Easy Win": "#9aab8c",
  "Reliable Default": "#8899aa",
  "Easy Social": "#aa9988",
  "Social Momentum": "#c87878",
  "Intentional Evening": "#8878c8",
  "Worth Leaving the House For": "#7898c8",
  "Change of Pace": "#78c8a8",
  "Light Adventure": "#78b8a8",
  "Date Night": "#c878a8",
  "Easy Date Night": "#c898b8",
};

const steps = [
  { key: "mood", question: "How are you feeling tonight?", options: ["Need Comfort", "Running Low", "Want Energy", "Want Connection", "Want a Small Win", "Need a Change of Scenery", "Want the Night to Matter", "Don't Want to Think"] },
  { key: "group", question: "Who are you with?", options: ["Just Me", "One Other Person", "Close Friends", "A Group"] },
  { key: "effort", question: "What feels manageable?", options: ["Staying Nearby", "Worth a Short Drive", "Worth Making a Night of It", "Surprise Me"] },
];

export default function Dusk() {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState({ mood: null, group: null, effort: null });
  const [results, setResults] = useState(null);
  const [topScore, setTopScore] = useState(null);

  const currentStep = steps[step];

  function select(value) {
    const key = currentStep.key;
    const newSelections = { ...selections, [key]: value };
    setSelections(newSelections);

    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      const scored = restaurants
        .map(r => ({ ...r, score: scoreRestaurant(r, newSelections.mood, newSelections.group, newSelections.effort) }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
      setTopScore(scored[0]?.score || 0);
      setResults(scored);
    }
  }

  function reset() {
    setStep(0);
    setSelections({ mood: null, group: null, effort: null });
    setResults(null);
    setTopScore(null);
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0e0d0c",
      color: "#e8e0d4",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Karla:wght@300;400&display=swap');
        * { box-sizing: border-box; }
        .dusk-btn {
          background: transparent;
          border: 1px solid rgba(232,224,212,0.2);
          color: #e8e0d4;
          padding: 14px 20px;
          border-radius: 4px;
          font-family: 'Karla', sans-serif;
          font-size: 13px;
          font-weight: 300;
          letter-spacing: 0.08em;
          cursor: pointer;
          transition: all 0.25s ease;
          text-align: left;
        }
        .dusk-btn:hover {
          background: rgba(232,224,212,0.07);
          border-color: rgba(232,224,212,0.45);
        }
        .dusk-btn.selected {
          background: rgba(232,224,212,0.1);
          border-color: rgba(232,224,212,0.6);
        }
        .card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(232,224,212,0.1);
          border-radius: 8px;
          padding: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .card:hover {
          background: rgba(255,255,255,0.055);
          border-color: rgba(232,224,212,0.22);
        }
        .card.open {
          background: rgba(255,255,255,0.055);
          border-color: rgba(232,224,212,0.22);
        }
        .fade-in {
          animation: fadeUp 0.5s ease forwards;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .pill {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 20px;
          font-family: 'Karla', sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .progress-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
      `}</style>

      {/* Header */}
      <div style={{ width: "100%", maxWidth: 480, padding: "48px 24px 0" }}>
        <div onClick={reset} style={{ cursor: results || step > 0 ? "pointer" : "default" }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 300, letterSpacing: "0.15em", color: "#e8e0d4" }}>
            dusk
          </div>
          <div style={{ fontFamily: "'Karla', sans-serif", fontSize: 11, fontWeight: 300, letterSpacing: "0.18em", color: "rgba(232,224,212,0.4)", marginTop: 2, textTransform: "uppercase" }}>
            finding what fits tonight
          </div>
        </div>
      </div>

      <div style={{ width: "100%", maxWidth: 480, padding: "40px 24px 60px", flex: 1 }}>

        {/* Questions */}
        {!results && (
          <div className="fade-in" key={step}>
            {/* Progress */}
            <div style={{ display: "flex", gap: 6, marginBottom: 40 }}>
              {steps.map((_, i) => (
                <div key={i} className="progress-dot" style={{
                  background: i <= step ? "rgba(232,224,212,0.7)" : "rgba(232,224,212,0.15)",
                  transform: i === step ? "scale(1.3)" : "scale(1)",
                }} />
              ))}
            </div>

            {/* Context chips */}
            {(selections.mood || selections.group) && (
              <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
                {selections.mood && (
                  <span style={{ fontFamily: "'Karla', sans-serif", fontSize: 11, color: "rgba(232,224,212,0.45)", letterSpacing: "0.05em" }}>
                    {selections.mood}
                  </span>
                )}
                {selections.group && selections.mood && (
                  <span style={{ color: "rgba(232,224,212,0.2)", fontSize: 11 }}>·</span>
                )}
                {selections.group && (
                  <span style={{ fontFamily: "'Karla', sans-serif", fontSize: 11, color: "rgba(232,224,212,0.45)", letterSpacing: "0.05em" }}>
                    {selections.group}
                  </span>
                )}
              </div>
            )}

            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: step === 0 ? 34 : 26,
              fontWeight: 300,
              lineHeight: 1.3,
              marginBottom: step === 0 ? 44 : 32,
              color: "#e8e0d4",
            }}>
              {currentStep.question}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: step === 0 ? 12 : 10 }}>
              {currentStep.options.map(opt => (
                <button key={opt} className="dusk-btn" onClick={() => select(opt)} style={{
                  padding: step === 0 ? "17px 22px" : "14px 20px",
                  fontSize: step === 0 ? "14px" : "13px",
                }}>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {results && (
          <div className="fade-in">
            {/* Summary */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 300, color: "#e8e0d4", marginBottom: 8 }}>
                Tonight looks like this.
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {[selections.mood, selections.group, selections.effort].map((s, i) => s && (
                  <span key={i} style={{ fontFamily: "'Karla', sans-serif", fontSize: 11, color: "rgba(232,224,212,0.45)", letterSpacing: "0.05em" }}>
                    {i > 0 ? "· " : ""}{s}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {results.map((r, i) => {
                const archetype = r.archetypes?.[0] || "—";
                const color = archetypeColors[archetype] || "#888";
                const isWeak = topScore < 10 && i > 0;

                return (
                  <div key={r.name} className="card" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: "#e8e0d4" }}>
                        {r.name}
                      </div>
                      <span className="pill" style={{ background: `${color}22`, color: color, border: `1px solid ${color}44`, marginTop: 4, whiteSpace: "nowrap" }}>
                        {archetype}
                      </span>
                    </div>

                    {r.emotionalNote && (
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontStyle: "italic", color: "rgba(232,224,212,0.65)", marginBottom: 12, lineHeight: 1.7 }}>
                        {r.emotionalNote}
                      </div>
                    )}

                    {r.atmosphere && (
                      <div style={{ fontFamily: "'Karla', sans-serif", fontSize: 10, color: "rgba(232,224,212,0.28)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                        {r.atmosphere}
                      </div>
                    )}

                    {isWeak && (
                      <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(232,224,212,0.06)", fontFamily: "'Karla', sans-serif", fontSize: 10, color: "rgba(232,224,212,0.25)", letterSpacing: "0.1em", fontStyle: "italic" }}>
                        closest we could find tonight
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              onClick={reset}
              style={{ marginTop: 40, background: "transparent", border: "none", color: "rgba(232,224,212,0.35)", fontFamily: "'Karla', sans-serif", fontSize: 12, letterSpacing: "0.12em", cursor: "pointer", padding: 0, textTransform: "uppercase" }}>
              Start over
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

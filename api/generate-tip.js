export default async function handler(req, res) {
  const { subject } = req.query;
  const key = process.env.apiKey; // Make sure this matches Vercel exactly!

  if (!key) {
    return res.status(500).json({ tip: "Missing API Key in Vercel" });
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: export default async function handler(req, res) {
  const { subject } = req.query;
  const key = process.env.apiKey; // Make sure this matches Vercel exactly!

  if (!key) {
    return res.status(500).json({ tip: "Missing API Key in Vercel" });
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Give a 5-word study tip for ${subject}` }] }]
      })
    });

    const data = await response.json();
    const tip = data.candidates[0].content.parts[0].text;
    res.status(200).json({ tip });
  } catch (error) {
    res.status(500).json({ tip: "Keep practicing " + subject });
  }
} }] }]
      })
    });

    const data = await response.json();
    const tip = data.candidates[0].content.parts[0].text;
    res.status(200).json({ tip });
  } catch (error) {
    res.status(500).json({ tip: "Keep practicing " + subject });
  }
}

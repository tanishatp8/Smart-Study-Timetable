export default async function handler(req, res) {
  const { subject } = req.query;
  const apiKey = process.env.apiKey; 

  try {
    const response = await fetch(https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Give a very short, specific study tip for the subject: ${subject}` }] }]
      })
    });

    const data = await response.json();
    const tip = data.candidates[0].content.parts[0].text;
    res.status(200).json({ tip });
  } catch (error) {
    res.status(500).json({ tip: "Focus on active recall and past papers." });
  }
}

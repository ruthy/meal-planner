import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { image } = await request.json();

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey || apiKey === 'your-anthropic-api-key-here') {
    return Response.json({ error: 'API key not configured' }, { status: 500 });
  }

  // Extract the base64 data and media type
  const match = image.match(/^data:(image\/[^;]+);base64,(.+)$/);
  if (!match) {
    return Response.json({ error: 'Invalid image format' }, { status: 400 });
  }
  const mediaType = match[1] as 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp';
  const base64Data = match[2];

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image',
                source: {
                  type: 'base64',
                  media_type: mediaType,
                  data: base64Data,
                },
              },
              {
                type: 'text',
                text: `Analyze this photo of food. For each food item visible:
1. Identify the food
2. Estimate the portion size in grams
3. Calculate estimated calories, protein (g), carbs (g), and fat (g)

Respond ONLY with valid JSON in this exact format, no other text:
{
  "items": [
    { "name": "food name", "grams": 150, "calories": 200, "protein": 25, "carbs": 10, "fat": 8 }
  ],
  "total": { "calories": 500, "protein": 40, "carbs": 30, "fat": 20 }
}

Be realistic with portion estimates based on what you see. If you cannot identify the food clearly, make your best estimate and note it in the name.`,
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      // Anthropic API error logged for debugging
      return Response.json(
        { error: 'AI analysis failed', details: `Status ${response.status}: ${errorText.substring(0, 200)}` },
        { status: 500 },
      );
    }

    const data = await response.json();
    const textContent = data.content?.find((c: { type: string }) => c.type === 'text')?.text;

    if (!textContent) {
      return Response.json({ error: 'No response from AI' }, { status: 500 });
    }

    // Extract JSON from the response (handle markdown code blocks)
    const jsonMatch = textContent.match(/\{[\s\S]*\}/);
    const result = JSON.parse(jsonMatch ? jsonMatch[0] : textContent);
    return Response.json(result);
  } catch (err) {
    // Scan error logged for debugging
    return Response.json({ error: 'Failed to analyze image', details: String(err) }, { status: 500 });
  }
}

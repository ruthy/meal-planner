import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #065F46 0%, #1D9E75 100%)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <div style={{ fontSize: 80, marginBottom: 8 }}>🌿</div>
      <div
        style={{
          fontSize: 64,
          fontWeight: 800,
          color: '#fff',
          marginBottom: 16,
        }}
      >
        DailyBite
      </div>
      <div
        style={{
          fontSize: 28,
          color: 'rgba(255,255,255,0.9)',
          marginBottom: 40,
          textAlign: 'center',
          maxWidth: 700,
        }}
      >
        The plan that transforms how you eat.
      </div>
      <div
        style={{
          display: 'flex',
          gap: 24,
        }}
      >
        {['🍽️ Meal Plans', '📊 Calories', '💧 Water', '🏋️ Exercise', '📈 Progress'].map((item) => (
          <div
            key={item}
            style={{
              background: 'rgba(255,255,255,0.15)',
              borderRadius: 12,
              padding: '12px 20px',
              color: '#fff',
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          fontSize: 18,
          color: 'rgba(255,255,255,0.7)',
        }}
      >
        www.dailybite.fit — Free • Gluten-free • Bilingual EN/HE
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}

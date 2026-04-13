import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Ayush Mandowara — Senior GenAI Consultant & Builder'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
          border: '4px solid #22c55e',
          borderRadius: '24px',
          padding: '48px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#22c55e',
              letterSpacing: '-0.05em',
            }}
          >
            Ayush Mandowara
          </div>
          <div
            style={{
              fontSize: '36px',
              color: '#86efac',
              marginTop: '8px',
            }}
          >
            Senior GenAI Consultant @ Virtusa
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#6b7280',
              marginTop: '24px',
            }}
          >
            LLMs • Agentic AI • RAG • NLP • MLOps
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#4b5563',
              marginTop: '16px',
            }}
          >
            ayush-mandowara.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

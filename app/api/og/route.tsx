import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);

    // Get text from URL, default if missing
    const text = searchParams.get('text') || 'Success is the only option.';
    const author = searchParams.get('author') || 'Daily Motivation';

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // Viral Gradient Background (Instagram Style)
                    backgroundImage: 'linear-gradient(to bottom right, #8A2387, #E94057, #F27121)',
                    padding: '40px',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Glassmorphism Card Effect */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)', // Glass effect
                        borderRadius: '20px',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        padding: '60px',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                        width: '90%',
                        height: '90%',
                    }}
                >
                    {/* Main Quote Text */}
                    <div
                        style={{
                            fontSize: 60,
                            fontStyle: 'normal',
                            color: 'white',
                            textAlign: 'center',
                            fontWeight: 900,
                            lineHeight: 1.2,
                            textShadow: '2px 2px 10px rgba(0,0,0,0.3)',
                            marginBottom: '40px',
                        }}
                    >
                        "{text}"
                    </div>

                    {/* Author Name */}
                    <div
                        style={{
                            fontSize: 30,
                            color: '#FFD700', // Gold
                            fontWeight: 600,
                            marginTop: '10px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                        }}
                    >
                        — {author}
                    </div>

                    {/* Branding at bottom */}
                    <div style={{ position: 'absolute', bottom: 40, fontSize: 18, color: 'rgba(255,255,255,0.6)' }}>
                        @DailyWisdom
                    </div>
                </div>
            </div>
        ),
        {
            width: 1080,
            height: 1080,
        },
    );
}
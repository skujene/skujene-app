import type { NextRequest } from 'next/server'
// import Google Sheets or take req params

export const config = {
  runtime: 'edge',
};

export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

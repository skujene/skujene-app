import type { NextRequest } from 'next/server'

export const runtime = 'edge';

export default async function handler(request: NextRequest) {
  return new Response('Hello, Next.js!')
}

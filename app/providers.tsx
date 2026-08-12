'use client'
 
import {
  initialize,
  RenderBlocksProvider,
} from '@wave-telecom/render-block-sdk'

import { useEffect, useState } from 'react'
 
type Props = {
  children: React.ReactNode
}
 
export function Providers({
  children,
}: Props) {
  const env = process.env.NEXT_PUBLIC_WAVE_ENV as "sandbox" | "production"
  const accessToken = process.env.NEXT_PUBLIC_WAVE_ACCESS_TOKEN as string
  const externalCode = process.env.NEXT_PUBLIC_EXTERNAL_CODE as string

  const [ready, setReady] = useState(false)

  useEffect(() => {
    initialize({ accessToken, externalCode, env })
      .catch((error) => console.warn('SDK bootstrap failed', error))
      .finally(() => setReady(true))
  }, [accessToken, externalCode, env])

  if (!ready) return null

  return (
    <RenderBlocksProvider env={process.env.NEXT_PUBLIC_WAVE_ENV as "sandbox" | "production"}>
      {children}
    </RenderBlocksProvider>
  )
}
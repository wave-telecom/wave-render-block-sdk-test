"use client"

import {
  RenderBlock,
  type RenderBlockError
} from '@wave-telecom/render-block-sdk'

export default function Home() {
  const externalCode = process.env.NEXT_PUBLIC_EXTERNAL_CODE as string
 
  return (
    <RenderBlock
      flowId="home"
      externalCode={externalCode}
      onError={(error: RenderBlockError) => {
        console.error(error)
      }}
      onActionTracked={actionTracked => {
        console.log({ actionTracked })
      }}
      onNavigate={(navigation) => {
        console.log({ navigation })
      }}
    />
  );
}

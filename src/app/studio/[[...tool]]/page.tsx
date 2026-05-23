'use client'

import config from '../../../../sanity.config'
import dynamic from 'next/dynamic'

// This prevents the "window is not defined" error during SSR
const Studio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { 
    ssr: false,
    loading: () => (
      <div className="flex h-screen items-center justify-center bg-gray-50 text-black">
        <div className="text-center">
          <p className="text-xl font-bold animate-pulse">Initializing Sanity Studio...</p>
          <p className="text-sm text-gray-500">Checking configuration and authentication</p>
        </div>
      </div>
    )
  }
)

export default function StudioPage() {
  return <Studio config={config} />
}

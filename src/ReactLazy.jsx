import React, { Suspense } from 'react'
const About=React.lazy(()=>import('./LazyDemo'))

export default function ReactLazy() {

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    <About />
    </Suspense>
    </>
  )
}

import { queryOptions, useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/start'
import { Suspense } from 'react'
import { z } from 'zod'

const delayedThing = createServerFn()
  .validator(z.string())
  .handler(async ({ data }) => {
    return new Promise<string>((res) => setTimeout(() => res(data), 2000))
  })

export const suspenseOptions = queryOptions({
  queryKey: ['suspense'],
  queryFn: () => delayedThing({ data: 'hi from suspense' }),
})

export const normalOptions = queryOptions({
  queryKey: ['normal'],
  queryFn: () => delayedThing({ data: 'hi from normal' }),
})

export function Suspended() {
  return (
    <div className={'w-48 h-16 p-2 bg-cyan-800'}>
      useSuspenseQuery
      <div className="flex items-center justify-center">
        <Suspense fallback={'Loading Suspended...'}>
          <Waited />
        </Suspense>
      </div>
    </div>
  )
}

function Waited() {
  const { data } = useSuspenseQuery(suspenseOptions)

  return <div>{data}</div>
}

export function Normal() {
  const { data } = useQuery(normalOptions)

  return (
    <div className={'w-48 h-16 p-2 bg-green-800'}>
      useQuery
      <div className="flex items-center justify-center">
        <div>{data ? data : 'Loading Normal...'}</div>
      </div>
    </div>
  )
}

import { createFileRoute } from '@tanstack/react-router'
import {
  Normal,
  normalOptions,
  Suspended,
  suspenseOptions,
} from './-components'

export const Route = createFileRoute('/query-and-suspense')({
  loaderDeps: ({ search }) => search,
  loader: ({ deps, context }) => {
    if (deps.prefetch) {
      void context.queryClient.prefetchQuery(suspenseOptions)
      void context.queryClient.prefetchQuery(normalOptions)
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Normal />
      <Suspended />
    </div>
  )
}

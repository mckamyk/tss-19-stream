import { createFileRoute } from '@tanstack/react-router'
import { Suspended, suspenseOptions } from './-components'

export const Route = createFileRoute('/suspense-only')({
  loaderDeps: ({ search }) => search,
  loader: ({ deps, context }) => {
    if (deps.prefetch) void context.queryClient.prefetchQuery(suspenseOptions)
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <Suspended />
}

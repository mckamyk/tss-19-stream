import { createFileRoute } from '@tanstack/react-router'
import { Normal, normalOptions } from './-components'

export const Route = createFileRoute('/query-only')({
  loaderDeps: ({ search }) => search,
  loader: ({ deps, context }) => {
    if (deps.prefetch) void context.queryClient.prefetchQuery(normalOptions)
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <Normal />
}

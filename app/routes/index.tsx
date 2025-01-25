import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2">
      <div className="text-center text-xl">
        This is a testing app for streaming prefetched requests from the server
      </div>
      <div className="text-center text-xl">
        Be sure to reload the page on each route so that the server attempts to
        prefetch + hydrate.
      </div>
    </div>
  )
}

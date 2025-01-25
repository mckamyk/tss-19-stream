import {
  Link,
  Outlet,
  ScrollRestoration,
  createRootRouteWithContext,
  useLocation,
} from '@tanstack/react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Meta, Scripts } from '@tanstack/start'
import * as React from 'react'
import type { QueryClient } from '@tanstack/react-query'
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary'
import { NotFound } from '~/components/NotFound'
import appCss from '~/styles/app.css?url'
import { seo } from '~/utils/seo'
import { z } from 'zod'
import { twMerge } from 'tailwind-merge'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      ...seo({
        title:
          'TanStack Start | Type-Safe, Client-First, Full-Stack React Framework',
        description: `TanStack Start is a type-safe, client-first, full-stack React framework. `,
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    )
  },
  notFoundComponent: () => <NotFound />,
  validateSearch: z.object({
    prefetch: z.boolean().catch(true),
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const { prefetch } = Route.useSearch()
  const { pathname } = useLocation()

  return (
    <html>
      <head>
        <Meta />
      </head>
      <body>
        <div className="flex-col w-screen h-screen flex items-center justify-center">
          {children}

          <div className="h-8" />

          <div className="flex justify-between w-[400px]">
            <Link
              preload={false}
              className="text-blue-500 underline"
              to="/query-only"
              search={{ prefetch }}
            >
              Query Only
            </Link>
            <Link
              preload={false}
              className="text-blue-500 underline"
              to="/suspense-only"
              search={{ prefetch }}
            >
              Suspense Only
            </Link>
            <Link
              preload={false}
              className="text-blue-500 underline"
              to="/query-and-suspense"
              search={{ prefetch }}
            >
              Query and Suspense
            </Link>
          </div>

          <div className="h-4" />
          <Link
            to={pathname}
            search={{ prefetch: !prefetch }}
            className={twMerge(
              'py-1 px-2 bg-gray-800 cursor-pointer rounded',
              prefetch && 'bg-green-800',
            )}
          >
            {prefetch ? 'Prefetch Enabled' : 'Prefetch Disabled'}
          </Link>
        </div>
        <ScrollRestoration />
        <TanStackRouterDevtools position="bottom-right" />
        <ReactQueryDevtools buttonPosition="bottom-left" />
        <Scripts />
      </body>
    </html>
  )
}

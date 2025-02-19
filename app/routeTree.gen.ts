/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SuspenseOnlyImport } from './routes/suspense-only'
import { Route as QueryOnlyImport } from './routes/query-only'
import { Route as QueryAndSuspenseImport } from './routes/query-and-suspense'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const SuspenseOnlyRoute = SuspenseOnlyImport.update({
  id: '/suspense-only',
  path: '/suspense-only',
  getParentRoute: () => rootRoute,
} as any)

const QueryOnlyRoute = QueryOnlyImport.update({
  id: '/query-only',
  path: '/query-only',
  getParentRoute: () => rootRoute,
} as any)

const QueryAndSuspenseRoute = QueryAndSuspenseImport.update({
  id: '/query-and-suspense',
  path: '/query-and-suspense',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/query-and-suspense': {
      id: '/query-and-suspense'
      path: '/query-and-suspense'
      fullPath: '/query-and-suspense'
      preLoaderRoute: typeof QueryAndSuspenseImport
      parentRoute: typeof rootRoute
    }
    '/query-only': {
      id: '/query-only'
      path: '/query-only'
      fullPath: '/query-only'
      preLoaderRoute: typeof QueryOnlyImport
      parentRoute: typeof rootRoute
    }
    '/suspense-only': {
      id: '/suspense-only'
      path: '/suspense-only'
      fullPath: '/suspense-only'
      preLoaderRoute: typeof SuspenseOnlyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/query-and-suspense': typeof QueryAndSuspenseRoute
  '/query-only': typeof QueryOnlyRoute
  '/suspense-only': typeof SuspenseOnlyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/query-and-suspense': typeof QueryAndSuspenseRoute
  '/query-only': typeof QueryOnlyRoute
  '/suspense-only': typeof SuspenseOnlyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/query-and-suspense': typeof QueryAndSuspenseRoute
  '/query-only': typeof QueryOnlyRoute
  '/suspense-only': typeof SuspenseOnlyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/query-and-suspense' | '/query-only' | '/suspense-only'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/query-and-suspense' | '/query-only' | '/suspense-only'
  id:
    | '__root__'
    | '/'
    | '/query-and-suspense'
    | '/query-only'
    | '/suspense-only'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  QueryAndSuspenseRoute: typeof QueryAndSuspenseRoute
  QueryOnlyRoute: typeof QueryOnlyRoute
  SuspenseOnlyRoute: typeof SuspenseOnlyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  QueryAndSuspenseRoute: QueryAndSuspenseRoute,
  QueryOnlyRoute: QueryOnlyRoute,
  SuspenseOnlyRoute: SuspenseOnlyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/query-and-suspense",
        "/query-only",
        "/suspense-only"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/query-and-suspense": {
      "filePath": "query-and-suspense.tsx"
    },
    "/query-only": {
      "filePath": "query-only.tsx"
    },
    "/suspense-only": {
      "filePath": "suspense-only.tsx"
    }
  }
}
ROUTE_MANIFEST_END */

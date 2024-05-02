/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SpeciesIdImport } from './routes/$speciesId'
import { Route as IndexImport } from './routes/index'
import { Route as SpeciesNameGroupsImport } from './routes/$speciesName.groups'
import { Route as SpeciesNameGroupsGroupNameImport } from './routes/$speciesName.groups.$groupName'

// Create/Update Routes

const SpeciesIdRoute = SpeciesIdImport.update({
  path: '/$speciesId',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SpeciesNameGroupsRoute = SpeciesNameGroupsImport.update({
  path: '/$speciesName/groups',
  getParentRoute: () => rootRoute,
} as any)

const SpeciesNameGroupsGroupNameRoute = SpeciesNameGroupsGroupNameImport.update(
  {
    path: '/$groupName',
    getParentRoute: () => SpeciesNameGroupsRoute,
  } as any,
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/$speciesId': {
      preLoaderRoute: typeof SpeciesIdImport
      parentRoute: typeof rootRoute
    }
    '/$speciesName/groups': {
      preLoaderRoute: typeof SpeciesNameGroupsImport
      parentRoute: typeof rootRoute
    }
    '/$speciesName/groups/$groupName': {
      preLoaderRoute: typeof SpeciesNameGroupsGroupNameImport
      parentRoute: typeof SpeciesNameGroupsImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  SpeciesIdRoute,
  SpeciesNameGroupsRoute.addChildren([SpeciesNameGroupsGroupNameRoute]),
])

/* prettier-ignore-end */

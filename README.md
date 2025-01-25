## Prefetching in React-19 TSS

It appears that calling

```ts
context.queryClient.prefetchQuery({...})
```

inside `loader()` or `beforeLoader()` initiates the request but doesn't inform the client of the pending request.

Also it doesn't appear that the initial request that _should_ be streaming the normal prefetched query is living long enough for the `queryFn` to resolve. In Network tab, the initial request to the server completes before the `queryFn` does. Perhaps this is the issue?

Thus, the client initiates its own request and the server-initiated request is still performed, but discarded.

Streaming is working for `useSuspenseQuery({...})` however, regardless of whether or not `prefetchQuery({...})` was issued in a server-side loader. I know that this is intended behavior, and its great! But I'd still like to be able to preload queries and stream responses down.

I'm working on a site that is hosted in Singapore, but many users are still in the West. Being able to seed the query client's cache ~400ms earlier due to latency would be amazing.

import { createApi } from 'unsplash-js';
import * as nodeFetch from 'node-fetch'

const unsplash = createApi({
  accessKey: 'MY_ACCESS_KEY',
  fetch: nodeFetch.default as unknown as typeof fetch,
});
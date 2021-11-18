import { createApi } from 'unsplash-js';
import * as nodeFetch from 'node-fetch'

declare global {
  var fetch: typeof nodeFetch.default;
  type RequestInit = nodeFetch.RequestInit;
  type Response = nodeFetch.Response;
}
global.fetch = nodeFetch.default;

const unsplash = createApi({
  accessKey: 'MY_ACCESS_KEY',
  fetch: nodeFetch.default,
});
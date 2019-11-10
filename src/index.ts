import { handleRequest } from './handler'

interface IEvent extends Event {
  respondWith: (K: Promise<Response>) => Promise<Response>
  request: Request
}

addEventListener('fetch', event => {
  ;(event as IEvent).respondWith(handleRequest((event as IEvent).request))
})

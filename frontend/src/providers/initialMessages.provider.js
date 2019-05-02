import { fetchInitialMessages } from '../api.service'

export let initialMessages = [];

export async function getInitialMessages() {
   initialMessages = await fetchInitialMessages()
}
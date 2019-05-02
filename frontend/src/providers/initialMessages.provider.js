import { fetchInitialMessages } from '../api.service'

export let initialMessages = [];

export async function getInitialMessages(nearestCity) {
   initialMessages = await fetchInitialMessages(nearestCity)
}
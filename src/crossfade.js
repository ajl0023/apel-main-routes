import { writable } from "svelte/store";
import { crossfade } from "svelte/transition";

const [send, receive] = crossfade({});
export const transition = writable({ send, receive });

import { JsonPodcastRepository } from "./json-podcast-repository";
import { PodcastRepository } from "./podcast-repository";

export const podcastRepository: PodcastRepository = new JsonPodcastRepository();
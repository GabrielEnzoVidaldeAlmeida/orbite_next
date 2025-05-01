import { EpisodeRepository } from "./episode-repository";
import { JsonEpisodeRepository } from "./json-episode-repository";

export const episodeRepository: EpisodeRepository = new JsonEpisodeRepository();
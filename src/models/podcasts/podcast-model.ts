import { EpisodeModel } from "./episode";

export type PodcastModel = {
  id: string,
  title: string,
  coverImageUrl: string,
  followers: string,
  description: string,
  episodes: EpisodeModel[];
}
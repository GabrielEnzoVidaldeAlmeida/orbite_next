import { EpisodeModel } from "@/models/podcasts/episode";

export interface EpisodeRepository {
  findAll(): Promise<EpisodeModel[]>;
  findByTitle(title: string): Promise<EpisodeModel>;
}
import { PodcastModel } from "@/models/podcasts/podcast-model";

export interface PodcastRepository {
  findAll(): Promise<PodcastModel[]>;
  findById(id: string): Promise<PodcastModel>;
}
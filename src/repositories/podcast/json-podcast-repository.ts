import { PodcastModel } from "@/models/podcasts/podcast-model";
import { PodcastRepository } from "./podcast-repository";
import { readFile } from "fs/promises";
import { resolve } from "path";

const ROOT_DIR = process.cwd();
const JSON_PODCASTS_FILE_PATH = resolve(ROOT_DIR, 'src', 'db', 'seed', 'podcasts.json');

export class JsonPodcastRepository implements PodcastRepository {
  private async readFromDisk (): Promise<PodcastModel[]> {
    const jsonContent = await readFile(JSON_PODCASTS_FILE_PATH, 'utf-8')
    const parsedJson = JSON.parse(jsonContent);
    const { podcasts } = parsedJson;
    return podcasts;
  }

  async findAll(): Promise<PodcastModel[]> {
    const podcasts = await this.readFromDisk();
    return podcasts;
  }

  async findById(id: string): Promise<PodcastModel> {
    const podcasts = await this.findAll();
    const podcast = podcasts.find(podcast => podcast.id === id)

    if (!podcast) throw new Error('Podcast não encontrado');

    return podcast;
  }
}
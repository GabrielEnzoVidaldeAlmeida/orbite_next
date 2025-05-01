import { readFile } from "fs/promises";
import { resolve } from "path";
import { EpisodeRepository } from "./episode-repository";
import { EpisodeModel } from "@/models/podcasts/episode";

const ROOT_DIR = process.cwd();
const JSON_EPISODES_FILE_PATH = resolve(ROOT_DIR, 'src', 'db', 'seed', 'episode.json');

export class JsonEpisodeRepository implements EpisodeRepository {
  private async readFromDisk (): Promise<EpisodeModel[]> {
    const jsonContent = await readFile(JSON_EPISODES_FILE_PATH, 'utf-8')
    const parsedJson = JSON.parse(jsonContent);
    const { episodes } = parsedJson;
    return episodes;
  }

  async findAll(): Promise<EpisodeModel[]> {
    const episodes = await this.readFromDisk();
    return episodes;
  }

  async findByTitle(title: string): Promise<EpisodeModel> {
    const episodes = await this.findAll();
    const episode = episodes.find(episode => episode.title === title)

    if (!episode) throw new Error('Episódio não encontrado');

    return episode;
  }
}
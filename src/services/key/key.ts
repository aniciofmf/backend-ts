import { Service, Inject } from "typedi";
import ConfigService from "@/services/config";

@Service()
class KeyService {
  constructor(@Inject("ConfigService") private configService: ConfigService) {
    this.configService = new ConfigService();
    this.configService.load();
  }

  setAlgorihtm(keyAlgo: string): void {}

  getKey(): string {
    return "";
  }
}

export default KeyService;

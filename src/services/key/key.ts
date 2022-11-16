import { Service, Inject } from "typedi";
import ConfigService from "@/services/config";

@Service()
class KeyService {
  constructor(private configService: ConfigService) {
    this.configService.load();
  }

  setAlgorihtm(keyAlgo: string): void {}

  getKey(): string {
    return "";
  }
}

export default KeyService;

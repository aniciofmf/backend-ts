import { Service, Inject } from "typedi";
import ConfigService from "@/services/config";
import { IKey } from "../../interfaces/IKey";

@Service()
class KeyService {
  constructor(@Inject("ConfigService") private configService: ConfigService) {
    this.configService = new ConfigService();
    this.configService.load();
  }

  setKeyType(KeyType: IKey) {}
}

export default KeyService;

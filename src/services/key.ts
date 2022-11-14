import { Service, Inject } from "typedi";
import ConfigService from "@/services/config";

@Service()
class KeyService {
  constructor(@Inject("ConfigService") private configService: ConfigService) {}

  public generateToken() {}

  public signToken() {}

  public validateToken() {}
}

export default KeyService;

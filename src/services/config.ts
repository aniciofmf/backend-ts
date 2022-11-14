import path from "node:path";
import { Service } from "typedi";

@Service("ConfigService")
class ConfigService {
  configPath: { default: string };

  load(): void {
    this.configPath = require(path.join("..", "config", "index.ts")) || {};
  }

  get(key: string): string {
    return this.configPath.default[key];
  }
}

export default ConfigService;

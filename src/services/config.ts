import path from "node:path";
import { Service } from "typedi";

@Service("ConfigService")
class ConfigService {
  constructor(private configPath: string = "") {
    this.configPath = require(path.join("..", "config", "index.ts")) || {};
  }

  get(key: string): string {
    return this.configPath[key];
  }
}

export default ConfigService;

import { IKey } from "@/interfaces/IKey";

class HSKey implements IKey {
  constructor(private keyAlgo: string) {}

  generateToken(): string {
    return "";
  }
}

export default HSKey;

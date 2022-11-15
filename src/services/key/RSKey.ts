import { IKey } from "@/interfaces/IKey";

class RSKey implements IKey {
  constructor(private keyAlgo: string) {}

  generateToken(): string {
    return "";
  }
}

export default RSKey;

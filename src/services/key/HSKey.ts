import { IKey } from "@/interfaces/IKey";

class HSKey implements IKey {
  generateToken: () => void;
  signToken: () => void;
  validateToken: () => void;
}

export default HSKey;

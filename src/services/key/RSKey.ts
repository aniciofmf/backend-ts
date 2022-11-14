import { IKey } from "@/interfaces/IKey";

class RSKey implements IKey {
  generateToken: () => void;
  signToken: () => void;
  validateToken: () => void;
}

export default RSKey;

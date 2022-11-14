export interface IKey {
  generateToken: () => void;
  signToken: () => void;
  validateToken: () => void;
}

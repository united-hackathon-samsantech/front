export interface FunnelStep {
  nextStep?: () => void;
  prevStep?: () => void;
}

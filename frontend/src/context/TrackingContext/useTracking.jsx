// useTracking.js
import { useContext } from "react";
import { TrackingContext } from "./TrackingProvider";

export function useTracking() {
  return useContext(TrackingContext);
}

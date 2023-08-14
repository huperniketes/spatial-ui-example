import { Layout } from "@/features/layout";
import { NonImmersiveCamera } from "@coconut-xr/natuerlich/react";

export function NonImmersiveSession() {
  return (
    <NonImmersiveCamera>
      <Layout />
    </NonImmersiveCamera>
  );
}

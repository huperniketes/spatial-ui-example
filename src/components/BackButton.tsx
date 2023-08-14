import { IconButton } from "@coconut-xr/apfel-kruemel";
import { ArrowLeft } from "@coconut-xr/lucide-koestlich";
import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();
  return (
    <IconButton onClick={() => navigate(-1)} size="sm" marginBottom={16}>
      <ArrowLeft width={16} height={16} />
    </IconButton>
  );
}

import { Container, Text } from "@coconut-xr/koestlich";

type HeaderProps = {
  title: string;
  subtitle: string;
};

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <Container marginBottom={24}>
      <Text fontSize={28} fontFamily="bold" id={`header-title-${title}`}>
        {title}
      </Text>
      <Text opacity={0.6}>{subtitle}</Text>
    </Container>
  );
}

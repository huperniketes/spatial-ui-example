import {
  DefaultStyleProvider,
  FontFamilyProvider,
} from "@coconut-xr/koestlich";
import { PropsWithChildren } from "react";
import { HashRouter } from "react-router-dom";

type AppProvidersProps = PropsWithChildren;

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <HashRouter>
      <DefaultStyleProvider color="white">
        <FontFamilyProvider
          fontFamilies={{
            medium: ["https://coconut-xr.github.io/msdf-fonts/", "inter.json"],
            bold: [
              "https://coconut-xr.github.io/msdf-fonts/",
              "inter-bold.json",
            ],
          }}
          defaultFontFamily="medium"
        >
          {children}
        </FontFamilyProvider>
      </DefaultStyleProvider>
    </HashRouter>
  );
}

import "styled-components/native";
import Colors from "./constants/Colors";

declare module "styled-components/native" {
  type C = typeof Colors;

  type R = C["dark"] & C["light"];
  export interface DefaultTheme extends R {}
}

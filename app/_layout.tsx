import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Suspense, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DevSettings, ScrollView, View } from "react-native";
import CalcScreen from "./calc/_layout";
import { ThemeProvider } from "styled-components/native";
import Colors from "@/constants/Colors";
import { Platform, NativeModules } from "react-native";
const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 60 : StatusBarManager.HEIGHT;
const queryClient = new QueryClient({
  defaultOptions: { queries: { gcTime: 60_000, staleTime: 60_000 } },
});
export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/Inter-Regular.otf"),
    // ...FontAwesome.font,
  });

  if (error) throw error;

  if (!loaded) {
    return null;
  }
  const theme = Colors["light"];
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <RootLayoutNav />
        </Suspense>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

function RootLayoutNav() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <ScrollView style={{ paddingTop: STATUSBAR_HEIGHT }}>
      <CalcScreen />
    </ScrollView>
  );
}
//@ts-ignore
globalThis.dev = DevSettings;

// app/(screens)/_layout.tsx
import { Stack } from "expo-router";

export default function ScreensLayout() {

  return (
    <Stack>
      <Stack.Screen name="users" options={{ headerShown: false }} />
      <Stack.Screen name="chat" options={{ headerShown: false }} />
      <Stack.Screen name="add" options={{ headerShown: false }} />
      <Stack.Screen name="edit" options={{ headerShown: true }} />
    </Stack>
  );
}

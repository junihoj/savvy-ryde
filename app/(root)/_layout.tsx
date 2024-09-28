import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
      <Stack.Screen name="find-ride" options={{ headerShown: true }} />
      <Stack.Screen
        name="confirm-ride"
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="book-ride"
        options={{
          headerShown: true,
        }}
      />
    </Stack>
  );
};

export default Layout;

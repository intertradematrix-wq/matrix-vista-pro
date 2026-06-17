import { createServerFn } from "@tanstack/react-start";

export const getGoogleTagManagerSettings = createServerFn({ method: "GET" }).handler(async () => {
  const { isValidGoogleTagManagerId, loadGoogleTagManagerSettings } =
    await import("@/lib/admin-runtime-settings.server");
  const settings = await loadGoogleTagManagerSettings();

  return {
    googleTagManagerId: isValidGoogleTagManagerId(settings.googleTagManagerId)
      ? settings.googleTagManagerId
      : "",
    source: settings.source,
  };
});

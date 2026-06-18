import { createServerFn } from "@tanstack/react-start";

export const getGoogleAnalyticsSettings = createServerFn({ method: "GET" }).handler(async () => {
  const { isValidGoogleAnalyticsId, loadGoogleAnalyticsSettings } =
    await import("@/lib/admin-runtime-settings.server");
  const settings = await loadGoogleAnalyticsSettings();

  return {
    googleAnalyticsId: isValidGoogleAnalyticsId(settings.googleAnalyticsId)
      ? settings.googleAnalyticsId
      : "",
    source: settings.source,
  };
});

// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://e9e4e2c8a82ad465f6e872b7b9be8bec@o4508569442123776.ingest.de.sentry.io/4508569663504464",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});

import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.ineednumbers.app",
  appName: "INeedNumbers",
  webDir: "dist",
  bundledWebRuntime: false,
  server: {
    url: "https://ineednumbers.com/auth/login",
    cleartext: false,
    allowNavigation: ["ineednumbers.com", "www.ineednumbers.com"]
  }
};

export default config;

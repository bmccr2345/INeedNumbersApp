// nano.app.tsx
// This file runs before the router and forces the correct startup behavior on iOS.

// Detect Capacitor native environment
const isCapacitor =
  typeof window !== "undefined" &&
  !!(window as any).Capacitor?.isNativePlatform?.();

// Force redirect to the login page ONCE per app launch
if (isCapacitor) {
  const alreadyRedirected = sessionStorage.getItem("mobile_redirect_once");

  if (!alreadyRedirected) {
    sessionStorage.setItem("mobile_redirect_once", "yes");
    window.location.href = "/auth/login";
  }
}

// This component renders nothing.
// It only exists so the redirect logic runs before the main app mounts.
export default function NanoApp() {
  return null;
}

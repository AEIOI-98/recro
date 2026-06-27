// Base path the app is served under (e.g. "/recro" on GitHub Pages, "" locally
// without it). Use this to prefix asset URLs referenced in inline styles, which
// Next does NOT rewrite the way it does for <Image>/<Link> src/href.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a root-relative asset path (e.g. "/images/x.jpg") with the base path. */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}

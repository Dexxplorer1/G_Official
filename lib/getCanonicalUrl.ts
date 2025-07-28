export function getCanonicalUrl(pathname: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.garbaggioservices.com';
  return `${baseUrl}${pathname === '/' ? '' : pathname}`;
}

/**
 * Single source of truth for Kingpin Engineering's contact details.
 * Update here and every page/section picks the change up.
 */

export const PHONE_DISPLAY = "(08) 7081 3155";
/** Digits only - used for `tel:` links. */
export const PHONE_TEL = "0870813155";

export const EMAIL = "contact@kingpinengineering.com.au";

export const ADDRESS = "438-440 Hanson Rd, Wingfield SA 5013";
/** Google Maps query for the workshop itself. */
export const ADDRESS_QUERY = "438-440+Hanson+Rd+Wingfield+SA+5013";
export const MAP_LINK = `https://www.google.com/maps?q=${ADDRESS_QUERY}`;

export const OPENING_HOURS = [
  { days: "Mon - Fri", time: "8:00am - 5:00pm" },
  { days: "Saturday", time: "8:00am - 12:30pm" },
  { days: "Sunday", time: "Closed" },
] as const;

export const EMERGENCY_NOTE = "24/7 Emergency Callout";

/** One-line summary used in copy and metadata. */
export const HOURS_SUMMARY =
  "Mon-Fri 8am-5pm, Sat 8am-12:30pm, plus 24/7 emergency callout";

/**
 * Builds an embeddable Google Maps iframe URL for any query string.
 * `query` should already be URL-safe (spaces as `+`).
 */
export function mapEmbedUrl(query: string, zoom = 14) {
  return `https://www.google.com/maps?q=${query}&z=${zoom}&output=embed`;
}

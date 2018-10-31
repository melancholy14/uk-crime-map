export const outcomes = [
  { code: "awaiting-court-result", name: "Awaiting court outcome" },
  { code: "court-result-unavailable", name: "Court result unavailable" },
  { code: "unable-to-proceed", name: "Court case unable to proceed" },
  { code: "local-resolution", name: "Local resolution" },
  { code: "no-further-action", name: "Investigation complete; no suspect identified" },
  { code: "deprived-of-property", name: "Offender deprived of property" },
  { code: "fined", name: "Offender fined" },
  { code: "absolute-discharge", name: "Offender given absolute discharge" },
  { code: "cautioned", name: "Offender given a caution" },
  { code: "drugs-possession-warning", name: "Offender given a drugs possession warning" },
  { code: "penalty-notice-issued", name: "Offender given a penalty notice" },
  { code: "community-penalty", name: "Offender given community sentence" },
  { code: "conditional-discharge", name: "Offender given conditional discharge" },
  { code: "suspended-sentence", name: "Offender given suspended prison sentence" },
  { code: "imprisoned", name: "Offender sent to prison" },
  { code: "other-court-disposal", name: "Offender otherwise dealt with" },
  { code: "compensation", name: "Offender ordered to pay compensation" },
  { code: "sentenced-in-another-case", name: "Suspect charged as part of another case" },
  { code: "charged", name: "Suspect charged" },
  { code: "not-guilty", name: "Defendant found not guilty" },
  { code: "sent-to-crown-court", name: "Defendant sent to Crown Court" },
  { code: "unable-to-prosecute", name: "Unable to prosecute suspect" },
  { code: "formal-action-not-in-public-interest", name: "Formal action is not in the public interest" },
  { code: "action-taken-by-another-organisation", name: "Action to be taken by another organisation" },
  { code: "further-investigation-not-in-public-interest", name: "Further investigation is not in the public interest" },
  { code: "under-investigation", name: "Under investigation" },
  { code: "status-update-unavailable", name: "Status update unavailable" },
];

export const allCrime = {
  url: 'all-crime',
  name: 'All crime'
};

export const categoryColors = {
  "all-crime": "#d17f68",
  "anti-social-behaviour": "#73b638",
  "bicycle-theft": "#a45dcf",
  "burglary": "#5fbc6e",
  "criminal-damage-arson": "#c0489a",
  "drugs": "#4b7d3c",
  "other-theft": "#666dc6",
  "possession-of-weapons": "#d99938",
  "public-order": "#5e99d2",
  "robbery": "#cc4f32",
  "shoplifting": "#49b9a9",
  "theft-from-the-person": "#c7496a",
  "vehicle-crime": "#adac4d",
  "violent-crime": "#c581bb",
  "other-crime": "#8b6c2f",
};
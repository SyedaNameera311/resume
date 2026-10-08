export type Design = { id: string; name: string; layout: string; note: string };
export type DesignLevel = {
  id: string;
  name: string;
  subtitle: string;
  designs: Design[];
};

const layouts = [
  "classic",
  "centered",
  "rail",
  "banner",
  "timeline",
  "frame",
  "split",
  "underline",
  "corner",
  "compact",
  "double-rule",
  "spotlight",
];
const makeDesigns = (prefix: string, names: string[], notes: string[]) =>
  names.map((name, index) => ({
    id: `${prefix}-${String(index + 1).padStart(2, "0")}`,
    name,
    layout: layouts[index],
    note: notes[index],
  }));

export const designLevels: DesignLevel[] = [
  {
    id: "classic",
    name: "01 · CLASSIC",
    subtitle: "Refined, timeless layouts for a confident first impression.",
    designs: makeDesigns(
      "classic",
      [
        "The Executive",
        "The Scholar",
        "The Heritage",
        "The Diplomat",
        "The Traditionalist",
        "The Columnist",
        "The Boardroom",
        "The Consultant",
        "The Archivist",
        "The Principal",
        "The Standard",
        "The Monogram",
      ],
      [
        "A balanced, formal first impression.",
        "Centered details and academic polish.",
        "A clear rail for dates and credentials.",
        "A confident, color-banded header.",
        "Experience arranged as a timeline.",
        "A fine frame with generous margins.",
        "Two-column rhythm for key details.",
        "Crisp section rules and strong order.",
        "A distinctive corner accent.",
        "A compact, highly scannable page.",
        "Double-rule headings for structure.",
        "A prominent, memorable nameplate.",
      ],
    ),
  },
  {
    id: "signature",
    name: "02 · SIGNATURE",
    subtitle: "Contemporary, versatile designs with a little extra character.",
    designs: makeDesigns(
      "signature",
      [
        "Editorial",
        "Modernist",
        "The Atelier",
        "Northstar",
        "Studio One",
        "New Chapter",
        "The Portfolio",
        "Field Notes",
        "The Architect",
        "Daylight",
        "The Curator",
        "Afterglow",
      ],
      [
        "Expressive type with an editorial finish.",
        "Clean lines and modern spacing.",
        "A maker-friendly creative profile.",
        "A clear, directional header.",
        "Structured like a design studio folio.",
        "An optimistic, open composition.",
        "A strong visual portfolio rhythm.",
        "Human, approachable details.",
        "A precise, grid-inspired layout.",
        "Airy spacing and bright accents.",
        "Thoughtfully grouped expertise.",
        "A warm, distinctive closing note.",
      ],
    ),
  },
  {
    id: "creative",
    name: "03 · CREATIVE",
    subtitle: "Expressive layouts for creative, product, and independent work.",
    designs: makeDesigns(
      "creative",
      [
        "Canvas",
        "Color Story",
        "The Maker",
        "Bold Type",
        "Gallery",
        "Studio Cut",
        "Shape & Form",
        "The Storyteller",
        "Playbook",
        "Open Canvas",
        "The Creator",
        "Bright Idea",
      ],
      [
        "A calm canvas for a strong story.",
        "Color-forward without losing clarity.",
        "A warm, hands-on maker profile.",
        "Big personality and confident hierarchy.",
        "Designed to showcase visual thinking.",
        "A crisp, independent studio feel.",
        "Sculpted sections with a lively pace.",
        "A narrative-first presentation.",
        "An energetic, practical composition.",
        "Open space for a personal voice.",
        "A polished home for creative work.",
        "A bright finish with a bold nameplate.",
      ],
    ),
  },
];

export const allDesigns = designLevels.flatMap((level) =>
  level.designs.map((design) => ({ ...design, level: level.id })),
);

export const colorPalette = [
  { name: "Iris", value: "#6044c8" },
  { name: "Ocean", value: "#245b92" },
  { name: "Forest", value: "#1d684b" },
  { name: "Terracotta", value: "#a74331" },
  { name: "Berry", value: "#8e3c63" },
  { name: "Cobalt", value: "#3b4da8" },
  { name: "Teal", value: "#147070" },
  { name: "Saffron", value: "#8d5b13" },
  { name: "Plum", value: "#623576" },
  { name: "Slate", value: "#465568" },
  { name: "Rose", value: "#a34261" },
  { name: "Midnight", value: "#273159" },
];

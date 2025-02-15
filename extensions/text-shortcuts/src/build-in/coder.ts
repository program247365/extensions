const coders = [
  {
    info: {
      name: "Encode Base64",
      id: "build_in_1647439541774",
      icon: "terminal-16",
      source: "Build-in",
      visibility: true,
      tag: ["Coder"],
    },
    tactions: [{ type: "Encode & Decode", content: ["Encoder Base64"] }],
  },
  {
    info: {
      name: "Decode Base64",
      id: "build_in_1647439470039",
      icon: "terminal-16",
      source: "Build-in",
      visibility: true,
      tag: ["Coder"],
    },
    tactions: [{ type: "Encode & Decode", content: ["Decoder Base64"] }],
  },
  {
    info: {
      name: "Encode URL",
      id: "build_in_1647439572311",
      icon: "link-16",
      source: "Build-in",
      visibility: true,
      tag: ["Coder"],
    },
    tactions: [{ type: "Encode & Decode", content: ["Encoder URL"] }],
  },
  {
    info: {
      name: "Decode URL",
      id: "build_in_1647439593389",
      icon: "link-16",
      source: "Build-in",
      visibility: true,
      tag: ["Coder"],
    },
    tactions: [{ type: "Encode & Decode", content: ["Decoder URL"] }],
  },
];
export const CODERS_SHORTCUTS = JSON.stringify(coders);

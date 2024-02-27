export default {
  configVersion: 1,
  id: "worker-turso-rs",
  displayName: '"Rust" Worker',
  platform: "workers",
  copyFiles: {
    variants: {
      src: {
        path: "./src",
      },
    },
  },
};

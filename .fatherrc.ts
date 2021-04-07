export default {
  target: "node",
  cjs: { type: "babel", lazy: true },
  disableTypeCheck: true,
  pkgs: ["po-utils", "po-config"],
};

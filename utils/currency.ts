export const formatNumber = new Intl.NumberFormat("vi", {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0,
}).format;

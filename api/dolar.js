export default function handler(req, res) {
  res.status(200).json({
    venta: 1435,
    fuente: "vercel-test",
    updated: new Date().toISOString()
  });
}

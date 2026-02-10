export default async function handler(req, res) {
  res.status(200).json({
    venta: 1435,
    fuente: "test",
    updated: new Date().toISOString()
  });
}

export default async function handler(req, res) {
  try {
    const response = await fetch("https://www.bna.com.ar/Personas");
    const html = await response.text();

    const fila = html.match(/Dolar U\.S\.A[\s\S]*?<\/tr>/i)?.[0];
    const valores = fila?.match(/\d+,\d+/g);

    res.status(200).json({
      compra: valores?.[0] || null,
      venta: valores?.[1] || null,
      fuente: "BNA"
    });

  } catch (error) {
    res.status(500).json({
      error: "No se pudo obtener la cotización BNA"
    });
  }
}

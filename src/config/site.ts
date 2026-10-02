export const site = {
  name: 'Pan de Barrio Entregas',
  tagline:
    'Pan artesanal horneado cada mañana en Lima. Pedidos por WhatsApp con entrega el mismo día.',
  location: 'Lima · Entrega el mismo día',
  whatsappNumber: '51999999999',
}

export function whatsappHref(text = 'Hola, quiero armar un pedido de pan artesanal.') {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`
}

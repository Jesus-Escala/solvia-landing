import { uiEs } from '@/ui';

/**
 * Spanish (default) landing strings. This file is the source of truth: `en.ts` must have exactly
 * the same shape (enforced by the `Messages` type). Use `{name}` placeholders for interpolation.
 */
export const es = {
  ...uiEs,
  errors: {
    ...uiEs.errors,
    codes: {
      ...uiEs.errors.codes,
      // Non-JSON failures (e.g. a proxy or gateway error page) get the generic text.
      HTTP_ERROR: uiEs.errors.generic,
      TOO_MANY_REQUESTS:
        'Recibimos varias solicitudes desde tu conexión. Espera unos minutos e inténtalo de nuevo.',
    },
    fields: {
      ...uiEs.errors.fields,
      contactName: 'Mínimo 2 caracteres',
      phone: 'Número no válido para el país elegido',
      industry: 'Máximo 80 caracteres',
      message: 'Máximo 1000 caracteres',
    },
  },
  meta: {
    title: 'Solvia — Tu negocio en orden: vende, cobra y controla tu stock',
  },
  nav: {
    label: 'Principal',
    skip: 'Saltar al contenido',
    home: 'Solvia, ir al inicio',
    features: 'Qué incluye',
    howItWorks: 'Cómo empezar',
    pricing: 'Precios',
    faq: 'Preguntas',
    login: 'Iniciar sesión',
    requestAccess: 'Probar gratis',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  hero: {
    eyebrow: 'Para cualquier negocio que vende, cobra o maneja stock',
    titleStart: 'Tu negocio en orden,',
    titleHighlight: 'desde tu celular.',
    subtitle:
      'Registra tus ventas, cobra lo que fías con recordatorios por WhatsApp y sabe cuánto stock te queda. Todo en un solo lugar y sin cuadernos.',
    primaryCta: 'Quiero probarlo gratis',
    secondaryCta: 'Ver qué incluye',
    areas: 'Ventas · Inventario · Compras · Cobranza · Reportes',
    trustLabel: 'Ventajas',
    trust: {
      activation: 'Gratis para empezar',
      noCard: 'No instalas nada: funciona en tu celular',
      currency: 'Te activamos en menos de 24 h',
    },
  },
  mock: {
    label: 'Vista previa ilustrativa del panel de Solvia',
    title: 'Tu negocio hoy',
    period: 'Este mes',
    sold: 'Vendido',
    receivable: 'Te deben',
    lowStock: 'Por acabarse',
    lowStockValue: '3 productos',
    chartTitle: 'Lo que vendes cada semana',
    chartLabel: 'Gráfico ilustrativo de ventas por semana con línea de tendencia',
    weeks: 'Sem 1,Sem 2,Sem 3,Sem 4,Sem 5,Sem 6',
    product: 'Aceite Primor 1 L',
    productLeft: 'Quedan 3 unidades',
    runningLow: 'Por acabarse',
    reminderApp: 'WhatsApp · recordatorio',
    reminderText: 'Hola Rosa, tu cuota de {amount} vence mañana. Puedes pagar aquí:',
    reminderLink: 'Pagar con Yape',
    toastTitle: 'Venta registrada',
    toastBody: 'Venta #{number} · {amount} con Yape',
  },
  problem: {
    title: 'Del cuaderno a tener todo tu negocio en orden',
    subtitle: 'Lo que hoy te quita horas, Solvia lo hace por ti.',
    before: 'Antes',
    after: 'Con Solvia',
    items: {
      sales: {
        before: 'Ventas anotadas a la rápida y al final del día no sabes cuánto vendiste.',
        after:
          'Cada venta registrada en segundos, escaneando el producto, y el total del día a la vista.',
      },
      credit: {
        before: 'Escribir a cada cliente, uno por uno, para recordarle que te debe.',
        after: 'Solvia le recuerda por WhatsApp y tú solo marcas cuando te paga.',
      },
      stock: {
        before: 'Darte cuenta de que se acabó un producto cuando el cliente ya lo pidió.',
        after: 'El stock baja solo con cada venta y te avisa lo que se está acabando.',
      },
      numbers: {
        before: 'No saber cuánto ganas, quién te debe más ni qué es lo que más vendes.',
        after: 'Reportes claros en PDF o Excel: ventas, cobros, stock y ganancias.',
      },
    },
  },
  trust: {
    payLabel: 'Registra pagos por',
    worksWith: 'Funciona con',
    cash: 'Efectivo',
    transfer: 'Transferencia',
    barcode: 'Código de barras',
    reports: 'PDF y Excel',
    madeFor: 'Hecho para negocios del Perú',
  },
  features: {
    demo: {
      reminderSent: 'Recordatorio enviado',
      reminderText: 'Hola Rosa, tu cuota de S/ 350.00 vence mañana. Paga aquí:',
      payLink: 'Pagar ahora',
      cashIn: 'Entrará esta semana',
      week: 'Sem {number}',
      statusPending: 'Pendiente',
      statusPartial: 'Parcial',
      statusPaid: 'Pagada',
      statusOverdue: 'Vencida',
    },
  },
  product: {
    eyebrow: 'Todo en una sola app',
    title: 'Todo tu negocio, en un solo lugar',
    subtitle:
      'Vende, controla tu stock, cobra y mira tus números. Cada parte trabaja con las demás, sin pasar datos de un lado a otro.',
    navLabel: 'Partes de Solvia',
    availability: {
      included: 'Viene con cualquier módulo',
      salesModule: 'Módulo Ventas',
      inventoryModule: 'Módulo Inventario',
      collectionsModule: 'Módulo Cobranza',
    },
    areas: {
      sales: {
        name: 'Ventas',
        title: 'Vende en segundos, desde el celular o la caja',
        body: 'Busca o escanea el producto, elige si es al contado o fiado y listo. Solvia calcula el total y deja todo anotado.',
        points: {
          p1: 'Escanea el código de barras o busca por nombre',
          p2: 'Al contado con Yape, Plin, efectivo o transferencia',
          p3: 'Si es fiado, la deuda pasa sola a «Cobranza»',
          p4: 'Te avisa si vendes algo sin stock y queda anotado',
        },
      },
      stock: {
        name: 'Inventario',
        title: 'Tu stock siempre al día, sin contar a mano',
        body: 'Cada venta descuenta y cada compra suma. Ves cuánto te queda de cada producto y qué se está acabando.',
        points: {
          p1: 'Alertas de lo que se está acabando',
          p2: 'Historial de movimientos de cada producto',
          p3: 'Ajustes por conteo, pérdida o daño',
          p4: 'Cuánto vale tu stock a costo y a precio de venta',
        },
      },
      purchases: {
        name: 'Compras',
        title: 'Registra lo que te llega de tus proveedores',
        body: 'Anota cada compra con su costo: tu stock sube solo y tus ganancias se calculan con lo que pagaste.',
        points: {
          p1: 'Proveedores con su RUC y WhatsApp',
          p2: 'Actualiza el costo de tus productos al comprar',
          p3: 'Guarda el número de factura o boleta',
        },
      },
      collections: {
        name: 'Cobranza',
        title: 'Cobra lo que fías, sin perseguir a nadie',
        body: 'Anota quién te debe y para cuándo. Solvia le recuerda por WhatsApp y tú solo marcas cuando te paga.',
        points: {
          p1: 'Recordatorios automáticos por WhatsApp',
          p2: 'Pagos parciales con foto del comprobante',
          p3: 'Quién paga puntual y quién se atrasa',
          p4: 'Estado de cuenta en PDF para tu cliente',
        },
      },
      dashboard: {
        name: 'Dashboard',
        title: 'Entiende tu negocio de un vistazo',
        body: 'Cuánto cobraste frente al mes pasado, a quién cobrarle primero y cuánta plata debería entrar esta semana.',
        points: {
          p1: 'Comparación con el periodo anterior',
          p2: 'A quién cobrarle primero',
          p3: 'Lo que vas a cobrar cada semana',
        },
      },
      reports: {
        name: 'Reportes',
        title: 'Reportes en PDF y Excel, sin salir de Solvia',
        body: 'Elige el reporte y las fechas, míralo en la misma pantalla y descárgalo con un toque para tu contador.',
        points: {
          p1: 'Ventas por cliente y por producto',
          p2: 'Cobros por cliente y medio de pago',
          p3: 'Stock valorizado y productos por acabarse',
          p4: 'Cuándo se vendió algo sin stock',
        },
      },
    },
    mocks: {
      sales: {
        title: 'Nueva venta',
        search: 'Escanea o escribe el producto…',
        cash: 'Al contado',
        credit: 'Fiado',
        charge: 'Cobrar {amount}',
      },
      stock: {
        title: 'Productos',
        ok: 'Bien',
        low: 'Por acabarse',
        out: 'Sin stock',
        movement: 'Venta #128 · Aceite Primor 1 L · quedan 3',
      },
      purchases: {
        title: 'Nueva compra',
        invoice: 'Factura F001-2231',
        total: 'Total de la compra',
        costs: 'Stock y costos actualizados',
      },
      collections: {
        title: 'Cobranza',
      },
      dashboard: {
        title: 'Dashboard',
        collected: 'Cobrado este mes',
        vsLast: '+18% que el mes pasado',
        first: 'Cobrar primero a',
        owes: 'Debe S/ 1,547.70',
        cash: 'Efectivo',
        transfer: 'Transferencia',
      },
      reports: {
        title: 'Reportes · Cobros por cliente',
        pdf: 'Ver PDF',
        excel: 'Ver Excel',
        download: 'Descargar',
        customer: 'Cliente',
        paid: 'Te pagó',
        payments: 'Pagos',
      },
    },
  },
  how: {
    eyebrow: 'Cómo empezar',
    title: 'Empieza hoy en tres pasos',
    subtitle: 'No tienes que instalar nada ni saber de computadoras.',
    step: 'Paso {number}',
    steps: {
      start: {
        title: 'Te activamos tu cuenta',
        body: 'Déjanos tus datos y en menos de 24 horas entras desde tu celular, con tus clientes y productos.',
      },
      sell: {
        title: 'Vende y anota lo que fías',
        body: 'Registra cada venta en segundos. Si es fiado, se anota sola y Solvia le recuerda a tu cliente por WhatsApp.',
      },
      grow: {
        title: 'Mira cómo va tu negocio',
        body: 'Cuánto vendiste, cuánto te deben, qué se está acabando y tus reportes listos en PDF o Excel.',
      },
    },
  },
  pricing: {
    eyebrow: 'Precios',
    title: 'Arma tu plan y paga solo lo que usas',
    subtitle:
      'Elige tus módulos. Mientras más sumes, más barato te sale cada uno y más usuarios, clientes y mensajes automáticos de WhatsApp incluye.',
    perMonth: '/mes',
    pick: 'Elige tus módulos',
    unlimited: 'Ilimitado',
    unlimitedMany: 'Ilimitados',
    note: 'Precios referenciales mensuales en soles. Cambias tus módulos cuando quieras.',
    billing: {
      label: 'Forma de pago',
      monthly: 'Mensual',
      annual: 'Anual',
      annualBadge: '2 meses gratis',
    },
    modules: {
      collections: {
        name: 'Cobranza',
        short: 'Fiados y recordatorios por WhatsApp.',
        description: 'Anota lo que fías y cobra sin perseguir a nadie.',
        points: {
          reminders: 'Recordatorios automáticos por WhatsApp',
          payments: 'Pagos con foto del comprobante',
          risk: 'Quién paga puntual y quién se atrasa',
          statements: 'Estado de cuenta en PDF para tu cliente',
          dashboard: 'Dashboard con lo que vas a cobrar',
          reports: 'Reportes de cobros en PDF y Excel',
        },
      },
      sales: {
        name: 'Ventas',
        short: 'Registra lo que vendes, al contado o fiado.',
        description: 'Vende rápido desde el celular o la caja y deja todo anotado.',
        points: {
          quick: 'Ventas en segundos, al contado o fiadas',
          scanner: 'Escanea el código de barras o busca',
          credit: 'Con Cobranza, lo fiado pasa solo a cobrar',
          receipts: 'Número de boleta, factura o nota de venta',
          shortage: 'Aviso cuando vendes sin stock',
          reports: 'Reportes de ventas por cliente y producto',
        },
      },
      inventory: {
        name: 'Inventario',
        short: 'Compras, proveedores y stock al día.',
        description: 'Sabe cuánto te queda de cada producto sin contar a mano.',
        points: {
          stock: 'Stock que baja y sube solo',
          alerts: 'Alertas de lo que se está acabando',
          purchases: 'Compras con costo actualizado',
          suppliers: 'Proveedores a un toque de WhatsApp',
          adjustments: 'Ajustes por conteo, pérdida o daño',
          reports: 'Reporte de stock valorizado',
        },
      },
    },
    ladder: {
      title: 'Mientras más módulos, mejor',
      count: '{count|# módulo|# módulos}',
      yours: 'Tu plan',
      off: '{percent} menos',
      noDiscount: 'Precio normal',
      whatsapp: 'mensajes automáticos al mes',
      manualValue: 'Envíos desde tu celular: gratis',
      usersValue: '{count|# usuario|# usuarios}',
      customersValue: 'Hasta {count} clientes',
      customersUnlimited: 'Clientes ilimitados',
      packs:
        'Los mensajes automáticos (los que Solvia envía sola) tienen costo, por eso crecen con tus módulos y puedes sumar paquetes de {messages} por {price}. Los que envías tú desde tu celular, con un toque, no tienen costo: son gratis en todos los planes.',
    },
    bowl: {
      one: 'Buen comienzo: empieza por lo que más necesitas.',
      two: '¡Vas muy bien! 10% menos y más mensajes.',
      three: '¡Todo tu negocio en orden! 15% menos.',
    },
    summary: {
      manual: '+ los que envías desde tu celular, gratis',
      title: 'Tu plan',
      saving: 'Descuento por módulos ({percent})',
      savingAnnual: 'Descuento por módulos y pago anual',
      yearly: 'Pagas {amount} al año',
      whatsapp: 'mensajes automáticos al mes',
      users: 'usuarios',
      customers: 'clientes',
      nudge:
        'Suma un módulo más y tendrás {percent} de descuento y {whatsapp} mensajes automáticos al mes.',
      cta: 'Quiero este plan',
      noCard: 'Sin tarjeta: te escribimos para activarlo.',
      noCollections: 'Sin Cobranza no hay mensajes automáticos: son sus recordatorios.',
      nudgeNoMessages:
        'Suma un módulo más y tendrás {percent} de descuento, más usuarios y más clientes.',
    },
    free: {
      title: '¿Recién empiezas? Prueba el plan Gratis',
      body: 'Para empezar: el módulo que elijas, hasta {customers} clientes y 1 usuario, con recordatorios desde tu WhatsApp sin costo. Cuando quieras que Solvia los envíe sola, pasas a un plan de pago con Cobranza.',
      cta: 'Empezar gratis',
    },
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: '¿Tienes dudas?',
    subtitle: 'Estas son las preguntas que más nos hacen.',
    items: {
      sales: {
        question: '¿Solvia sirve para registrar mis ventas y mi stock?',
        answer:
          'Sí. Con el módulo Ventas registras cada venta, al contado o fiada, buscando o escaneando el producto. Con el módulo Inventario tu stock baja solo con cada venta, sube con cada compra y te avisa lo que se está acabando.',
      },
      modulesPrice: {
        question: '¿Cuánto cuestan los módulos y puedo quitarlos?',
        answer:
          'Cada módulo tiene su precio y se suman: con 2 módulos tienes 10% de descuento y con los 3, 15%, además de más usuarios, clientes y mensajes automáticos. Pagando el año tienes 2 meses gratis. Puedes quitar un módulo cuando quieras, sin perder lo que ya registraste.',
      },
      reports: {
        question: '¿Puedo sacar reportes en Excel o PDF?',
        answer:
          'Sí. Ves tus reportes en PDF o Excel dentro de Solvia, sin descargar nada, y si quieres los bajas con un toque: cobros por cliente, ventas por cliente o producto, stock y lo vendido sin stock.',
      },
      whatsapp: {
        question: '¿Cómo se envían los recordatorios por WhatsApp?',
        answer:
          'De dos formas. Desde tu propio WhatsApp: Solvia te deja el mensaje listo y tú lo envías con un toque; es ilimitado en todos los planes. O automáticos: Solvia le escribe solo a tu cliente antes y después de la fecha de pago. Cada plan trae mensajes automáticos al mes y puedes sumar paquetes si necesitas más.',
      },
      security: {
        question: '¿Mis datos están seguros?',
        answer:
          'Sí. Nadie más ve tus clientes ni tus cuentas. Y si tienes trabajadores, puedes dejar que cobren sin que vean todo.',
      },
      plans: {
        question: '¿Qué plan me conviene?',
        answer:
          'Elige solo lo que usas: Cobranza, Ventas o Inventario, uno solo o juntos (o el plan Gratis si recién empiezas). Mientras más módulos, más descuento, más usuarios y más clientes; con Cobranza, además, mensajes automáticos de WhatsApp.',
      },
      google: {
        question: '¿Puedo entrar con mi cuenta de Google?',
        answer:
          'Sí. Una vez activada tu cuenta, puedes iniciar sesión con tu correo y contraseña o con la cuenta de Google de ese mismo correo.',
      },
      signup: {
        question: '¿Cómo empiezo a usar Solvia?',
        answer:
          'Déjanos tus datos con el botón «Quiero probarlo gratis». Te escribimos por WhatsApp en menos de 24 horas con tu usuario y una clave para entrar. La primera vez que entres, eliges tu propia clave.',
      },
      install: {
        question: '¿Necesito instalar algo?',
        answer:
          'No. Solvia se abre en el navegador de tu celular o computadora, como una página web. Si quieres, puedes agregarlo a la pantalla de tu celular como una app.',
      },
      cancel: {
        question: '¿Puedo cancelar cuando quiera?',
        answer:
          'Sí. No hay contratos: escríbenos cuando quieras cambiar de plan o dejar de usar Solvia.',
      },
      customers: {
        question: '¿Mis clientes tienen que descargar algo?',
        answer:
          'No. A tus clientes les llega un mensaje normal de WhatsApp. Si quieren, pagan con Yape o Plin desde el enlace del mensaje.',
      },
    },
  },
  finalCta: {
    title: 'Pon tu negocio en orden desde hoy',
    body: 'Pruébalo gratis: vende, cobra y controla tu stock. Te activamos tu cuenta en menos de 24 horas.',
    primary: 'Quiero probarlo gratis',
    secondary: 'Ya tengo cuenta',
  },
  access: {
    title: 'Prueba Solvia gratis',
    description:
      'Déjanos tus datos y te escribimos por WhatsApp en menos de 24 horas para activar tu cuenta.',
    close: 'Cerrar',
    optional: 'opcional',
    submit: 'Enviar mis datos',
    privacy: 'Usaremos tus datos solo para contactarte sobre Solvia.',
    fields: {
      businessName: 'Nombre del negocio',
      contactName: 'Tu nombre',
      email: 'Correo (lo usarás para entrar)',
      phone: 'Teléfono / WhatsApp',
      phoneHint: 'Elige el país; te escribiremos por WhatsApp a este número.',
      industry: '¿Qué tipo de negocio tienes?',
      plan: '¿Cómo quieres empezar?',
      modules: '¿Quieres sumar algún módulo?',
      planPlaceholder: 'Aún no sé (lo decido después)',
      message: '¿Algo que quieras contarnos?',
      messagePlaceholder: 'Cuéntanos cuántos clientes tienes o qué te gustaría resolver.',
      messageCount: '{count}/{max} caracteres',
    },
    starts: {
      free: 'Con el plan Gratis',
      monthly: 'Pagando mes a mes',
      annual: 'Pagando el año (2 meses gratis)',
    },
    industries: {
      placeholder: 'Elige uno',
      grocery: 'Bodega o minimarket',
      hardware: 'Ferretería',
      wholesale: 'Distribuidora o mayorista',
      restaurant: 'Restaurante o cafetería',
      pharmacy: 'Farmacia o botica',
      clothing: 'Ropa y calzado',
      technology: 'Tecnología y electrónica',
      professional: 'Servicios profesionales',
      health: 'Salud y consultorios',
      education: 'Educación',
      construction: 'Construcción',
      transport: 'Transporte y logística',
      other: 'Otro',
      otherPlaceholder: 'Escribe tu tipo de negocio',
    },
    errors: {
      length: 'Escribe entre 2 y 120 caracteres',
      email: 'Ingresa un correo válido',
      phone: 'Número no válido para el país elegido',
      message: 'Máximo {max} caracteres',
    },
    success: {
      title: '¡Listo! Recibimos tu solicitud',
      body: 'Te contactaremos por WhatsApp o correo en menos de 24 horas para activar tu cuenta.',
      close: 'Cerrar',
    },
  },
  footer: {
    description:
      'Vende, cobra lo que fías y controla tu stock desde el celular. Para negocios de todo tipo y tamaño.',
    product: 'Producto',
    account: 'Cuenta',
    rights: '© {year} Solvia. Todos los derechos reservados.',
    preferences: 'Preferencias',
  },
};

/** Recursively widens string literals so other locales can provide different text with the same shape. */
type DeepStrings<T> = { [K in keyof T]: T[K] extends string ? string : DeepStrings<T[K]> };
export type Messages = DeepStrings<typeof es>;

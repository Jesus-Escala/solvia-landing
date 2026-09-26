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
    areas: 'Comercial · Cuentas por cobrar · Logística · Reportes',
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
          'Cada venta en segundos, escaneando con la cámara, con su ticket y el total del día a la vista.',
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
      'Elige tus módulos: Comercial, Cuentas por cobrar y Logística. Tus clientes, productos y proveedores, las ubicaciones y tus números vienen con ellos, y cada parte trabaja con las demás.',
    navLabel: 'Partes de Solvia',
    groups: {
      commercial: 'Comercial',
      receivables: 'Cuentas por cobrar',
      logistics: 'Logística',
      masters: 'Mantenimientos',
      tools: 'Herramientas',
      results: 'Resultados',
    },
    availability: {
      salesModule: 'Módulo Comercial',
      collectionsModule: 'Módulo Cuentas por cobrar',
      inventoryModule: 'Módulo Logística',
      withModules: 'Viene con tus módulos',
      allPlans: 'En todos los planes',
      byModules: 'Según tus módulos',
    },
    areas: {
      sales: {
        name: 'Ventas',
        title: 'Vende en segundos, con tu propia pantalla de caja',
        body: 'Busca por código o descripción, o escanea con la cámara del celular varios productos seguidos. Cobra al contado o fiado y entrega su ticket.',
        points: {
          p1: 'Atajos de teclado: Alt+S cobra, Alt+B busca, Alt+A crea',
          p2: 'Escanea el QR o el código de barras con la cámara, uno tras otro',
          p3: 'Cobra con varios métodos a la vez: efectivo, Yape, Plin o transferencia',
          p4: 'Fiado con cuota inicial; con Cuentas por cobrar pasa solo a Cobranza',
          p5: 'Ticket de 80 mm: míralo, imprímelo, descárgalo o envíalo por WhatsApp',
          p6: 'Anula una venta si te equivocaste; lo vendido sin stock queda anotado',
        },
      },
      collections: {
        name: 'Cobranza',
        title: 'Cobra lo que fías, sin perseguir a nadie',
        body: 'Anota quién te debe y para cuándo. Solvia le recuerda por WhatsApp y tú solo marcas cuando te paga.',
        points: {
          p1: 'Recordatorios automáticos por WhatsApp',
          p2: 'Pagos parciales y con varios métodos, con foto del comprobante',
          p3: 'Quién paga puntual y quién se atrasa',
          p4: 'Estado de cuenta en PDF para tu cliente',
        },
      },
      purchases: {
        name: 'Compras',
        title: 'Registra lo que te llega, en su propia pantalla',
        body: 'Busca o escanea lo que compraste, en unidades o por sacos. Tu stock sube solo y el costo de cada producto se actualiza.',
        points: {
          p1: 'Los mismos atajos y el mismo escáner que al vender',
          p2: 'Compra por sacos o cajas y vende por unidad o por kilo',
          p3: 'Paga con uno o varios métodos y guarda su comprobante en PDF',
        },
      },
      stock: {
        name: 'Stock',
        title: 'Tu stock siempre al día, sin contar a mano',
        body: 'Cada venta descuenta y cada compra suma. Ves cuánto te queda de cada producto y qué se está acabando.',
        points: {
          p1: 'Alertas de lo que se está acabando',
          p2: 'Kardex: cada entrada y salida de cada producto',
          p3: 'Ajustes por conteo, pérdida o daño',
          p4: 'Cuánto vale tu stock a costo y a precio de venta',
        },
      },
      masters: {
        name: 'Clientes, productos y proveedores',
        title: 'Tus datos de siempre, ordenados en un solo lugar',
        body: 'Vienen con tus módulos: los clientes con Comercial o Cuentas por cobrar, los productos con Comercial o Logística y los proveedores con Logística.',
        points: {
          p1: 'Cada producto con su propio código y su QR',
          p2: 'Etiquetas para imprimir: de estante con el precio grande o pequeñas para el producto',
          p3: 'Categorías y fotos para encontrarlos rápido al vender',
          p4: 'Clientes y proveedores con su WhatsApp, a un toque',
        },
      },
      locations: {
        name: 'Ubicaciones',
        title: 'Encuentra cualquier producto en tu tienda o almacén',
        body: 'Sube el plano de tu local o dibújalo en Solvia, marca tus estantes y di qué hay en cada uno.',
        points: {
          p1: 'Plano en 2D para dibujar y mover tus zonas',
          p2: 'Vista en 3D con los estantes levantados y las fotos de sus productos',
          p3: '«¿Dónde está?»: buscas un producto y se marca su estante',
          p4: 'Al vender, el detalle del producto te dice dónde está',
        },
      },
      dashboard: {
        name: 'Dashboard',
        title: 'Entiende tu negocio de un vistazo',
        body: 'Ves solo lo de tus módulos: lo que vendes, compras y cobras, comparado con el periodo anterior.',
        points: {
          p1: 'Lo más vendido y tus mejores clientes',
          p2: 'Ventas por día, hora, método de pago, categoría y vendedor',
          p3: 'Compras por proveedor y por producto',
          p4: 'A quién cobrarle primero y lo que vas a cobrar cada semana',
        },
      },
      reports: {
        name: 'Reportes',
        title: 'Más de 10 reportes en PDF y Excel',
        body: 'Elige el reporte y las fechas, míralo en la misma pantalla y descárgalo con un toque para tu contador.',
        points: {
          p1: 'Ventas por día, producto, cliente, método y categoría',
          p2: 'Compras por proveedor y por producto',
          p3: 'Cobros por cliente y medio de pago',
          p4: 'Stock valorizado y lo vendido sin stock',
        },
      },
    },
    extras: {
      title: 'Y además, en todos los planes',
      items: {
        tour: {
          title: 'Te enseña a usarlo',
          body: 'Cada pantalla tiene su recorrido guiado y hay un centro de ayuda con guías cortas.',
        },
        language: {
          title: 'En tu idioma',
          body: 'Español o inglés, elegido una vez para todo tu equipo.',
        },
        phone: {
          title: 'En tu celular, como una app',
          body: 'Se agrega a la pantalla de tu celular sin descargar nada de una tienda.',
        },
        team: {
          title: 'Tu equipo, con permisos',
          body: 'Suma a quienes te ayudan sin que vean lo que no les toca.',
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
      masters: {
        title: 'Productos',
        customers: 'Clientes',
        products: 'Productos',
        suppliers: 'Proveedores',
        product: 'Aceite Primor 1 L',
        category: 'Abarrotes',
        code: 'Código',
        print: 'Imprimir etiquetas',
        shelf: 'Estante',
        small: 'Producto',
      },
      locations: {
        title: 'Ubicaciones · Tienda',
        search: '¿Dónde está? aceite',
        found: 'Está en el Estante B',
        shelfA: 'Estante A',
        shelfB: 'Estante B',
        fridge: 'Refrigeradora',
        till: 'Caja',
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
        name: 'Cuentas por cobrar',
        short: 'Fiados, pagos y recordatorios por WhatsApp.',
        description: 'Anota lo que fías y cobra sin perseguir a nadie.',
        points: {
          reminders: 'Recordatorios automáticos por WhatsApp',
          payments: 'Pagos con varios métodos y foto del comprobante',
          risk: 'Quién paga puntual y quién se atrasa',
          statements: 'Estado de cuenta en PDF para tu cliente',
          dashboard: 'Dashboard con lo que vas a cobrar',
          reports: 'Reportes de cobros en PDF y Excel',
        },
      },
      sales: {
        name: 'Comercial',
        short: 'Tu caja: vende al contado o fiado, con ticket.',
        description: 'Vende rápido desde el celular o la caja y deja todo anotado.',
        points: {
          quick: 'Pantalla de venta con atajos de teclado',
          scanner: 'Escanea el QR o el código de barras con la cámara',
          credit: 'Varios métodos a la vez y fiado con cuota inicial',
          receipts: 'Ticket de 80 mm por WhatsApp, impreso o en PDF',
          shortage: 'Aviso cuando vendes sin stock',
          reports: 'Dashboard y reportes de ventas',
        },
      },
      inventory: {
        name: 'Logística',
        short: 'Compras, proveedores y stock al día.',
        description: 'Sabe cuánto te queda de cada producto sin contar a mano.',
        points: {
          stock: 'Stock que baja y sube solo',
          alerts: 'Alertas de lo que se está acabando',
          purchases: 'Compras por unidad o por sacos, con costo actualizado',
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
      noCollections: 'Sin Cuentas por cobrar no hay mensajes automáticos: son sus recordatorios.',
      nudgeNoMessages:
        'Suma un módulo más y tendrás {percent} de descuento, más usuarios y más clientes.',
    },
    free: {
      title: '¿Recién empiezas? Prueba el plan Gratis',
      body: 'Para empezar: el módulo que elijas, hasta {customers} clientes y 1 usuario, con recordatorios desde tu WhatsApp sin costo. Cuando quieras que Solvia los envíe sola, pasas a un plan de pago con Cuentas por cobrar.',
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
          'Sí. Con el módulo Comercial registras cada venta, al contado o fiada, buscando o escaneando el producto con la cámara. Con el módulo Logística tu stock baja solo con cada venta, sube con cada compra y te avisa lo que se está acabando.',
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
          'Elige solo lo que usas: Comercial, Cuentas por cobrar o Logística, uno solo o juntos (o el plan Gratis si recién empiezas). Mientras más módulos, más descuento, más usuarios y más clientes; con Cuentas por cobrar, además, mensajes automáticos de WhatsApp.',
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

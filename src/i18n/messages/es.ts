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
    features: 'Funciones',
    howItWorks: 'Cómo funciona',
    pricing: 'Precios',
    modules: 'Módulos',
    faq: 'Preguntas',
    login: 'Iniciar sesión',
    requestAccess: 'Probar gratis',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  hero: {
    eyebrow: 'Para bodegas, ferreterías, minimarkets y distribuidoras',
    titleStart: 'Tu negocio en orden,',
    titleHighlight: 'desde tu celular.',
    subtitle:
      'Registra tus ventas, cobra lo que fías con recordatorios por WhatsApp y sabe cuánto stock te queda. Todo en un solo lugar y sin cuadernos.',
    primaryCta: 'Quiero probarlo gratis',
    secondaryCta: 'Ver cómo funciona',
    newBadge: 'Nuevo',
    newText: 'Ventas e Inventario ya disponibles',
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
    eyebrow: 'Cobranza',
    title: 'Cobra lo que fías, sin perseguir a nadie',
    subtitle: 'El corazón de Solvia, incluido en todos los planes.',
    demo: {
      chatName: 'Bodega San Martín',
      chatOnline: 'en línea',
      paymentLogged: 'Pago registrado · S/ 350.00',
      reminderSent: 'Recordatorio enviado',
      reminderText: 'Hola Rosa, tu cuota de S/ 350.00 vence mañana. Paga aquí:',
      payLink: 'Pagar ahora',
      replyText: '¡Listo! Ya pagué por Yape 🙌',
      paymentIn: 'Pago recibido',
      paymentBy: 'Rosa Q. · por Yape',
      balance: 'Saldo',
      paidOff: 'Deuda saldada',
      riskLow: 'Riesgo bajo',
      riskHint: 'Paga a tiempo el 94% de las veces',
      cashIn: 'Entrará esta semana',
      week: 'Sem {number}',
      statement: 'Estado de cuenta',
      sent: 'Enviado',
      statusPending: 'Pendiente',
      statusPartial: 'Parcial',
      statusPaid: 'Pagada',
      statusOverdue: 'Vencida',
    },
    items: {
      receivables: {
        title: 'Quién te debe y cuánto',
        body: 'Anota cada fiado con la fecha en que te deben pagar. Ves al momento quién te pagó, quién te pagó una parte y quién está atrasado.',
      },
      reminders: {
        title: 'Recordatorios por WhatsApp',
        body: 'Solvia le escribe a tu cliente antes y después de la fecha de pago, con un mensaje que puedes escribir a tu manera y un enlace para pagar.',
      },
      payments: {
        title: 'Pagos con comprobante',
        body: 'Anota si te pagó todo o una parte, en efectivo, Yape, Plin o transferencia, y guarda la foto de la captura.',
      },
      risk: {
        title: '¿A quién le fío?',
        body: 'Solvia te dice quién paga puntual y quién suele atrasarse, para que sepas a quién darle más fiado.',
      },
      dashboard: {
        title: 'Resumen de tu negocio',
        body: 'Cuánto cobraste, cuánto te falta cobrar, quién te debe más y cuánta plata debería entrar esta semana.',
      },
      statements: {
        title: 'Resumen de deuda para tu cliente',
        body: 'Mándale a tu cliente, en un toque, un PDF con todo lo que te debe y lo que ya te pagó.',
      },
    },
  },
  how: {
    eyebrow: 'Cómo funciona',
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
    title: 'Un plan para cada etapa de tu negocio',
    subtitle:
      'Empieza gratis con la cobranza y suma Ventas e Inventario cuando tu negocio lo pida.',
    perMonth: '/mes',
    recommended: 'Recomendado',
    note: 'Precios mensuales en soles.',
    modulesLink: '¿Vendes o manejas stock? Suma Ventas e Inventario.',
    listLabel: 'Incluye en el plan {plan}',
    plans: {
      free: {
        name: 'Gratis',
        description: 'Para dejar el cuaderno y anotar quién te debe.',
        cta: 'Empezar gratis',
      },
      starter: {
        name: 'Básico',
        description: 'Para negocios que cobran cada semana.',
        cta: 'Elegir este plan',
      },
      pro: {
        name: 'Negocio',
        description: 'Para negocios con varios vendedores o cobradores.',
        cta: 'Elegir este plan',
      },
    },
    limits: {
      customers: 'Hasta {count|# cliente|# clientes}',
      users: 'Hasta {count|# usuario|# usuarios}',
      singleUser: '1 usuario',
      reminders: '{count|# recordatorio|# recordatorios} por WhatsApp al mes',
    },
    perks: {
      payments: 'Guarda la foto de cada pago',
      dashboard: 'Resumen de lo que te van a pagar',
      templates: 'Escribe tus propios mensajes',
      risk: 'Quién paga puntual y quién se atrasa',
      statements: 'Resumen de deuda en PDF para tu cliente',
      roles: 'Tus trabajadores cobran sin ver todo',
      reports: 'Reportes en PDF y Excel, sin salir de Solvia',
      monthlyReport: 'Resumen de cada mes',
    },
  },
  modules: {
    eyebrow: 'Ventas e Inventario',
    title: 'Vende más rápido y nunca te quedes sin stock',
    subtitle:
      'Súmalos a cualquier plan por un pago extra al mes y te los activamos en el día. Funcionan con tu cobranza: lo que vendes fiado se anota solo en «Me deben».',
    sales: {
      name: 'Ventas',
      short: 'Registra lo que vendes, al contado o fiado.',
      description: 'Vende rápido desde el celular o la caja y deja todo anotado sin esfuerzo.',
      points: {
        quick: 'Registra una venta en segundos, al contado o fiada',
        scanner: 'Busca o escanea el código de barras del producto',
        credit: 'Si es fiado, la deuda se anota sola en «Me deben»',
        receipts: 'Guarda el número de boleta, factura o nota de venta',
        reports: 'Reportes de ventas por cliente y por producto',
      },
      cta: 'Quiero sumar Ventas',
    },
    inventory: {
      name: 'Inventario',
      short: 'Compras, proveedores y stock al día.',
      description: 'Sabe cuánto te queda de cada producto sin contar a mano todos los días.',
      points: {
        stock: 'El stock baja solo con cada venta y sube con cada compra',
        purchases: 'Registra lo que te llega y actualiza tus costos',
        suppliers: 'Tus proveedores a un toque de WhatsApp',
        alerts: 'Te avisa qué productos se están acabando',
        traceability: 'Sabes cuándo se vendió algo sin stock, para cuadrar tus cuentas',
      },
      cta: 'Quiero sumar Inventario',
    },
    bundle: {
      title: 'Los dos juntos por {price} al mes',
      body: 'Ventas e Inventario trabajan juntos: cada venta descuenta tu stock. Ahorras {saving} al mes.',
      cta: 'Quiero los dos',
    },
    note: 'Todos los reportes se ven en PDF o Excel sin salir de Solvia, y se descargan con un toque. Puedes quitar un módulo cuando quieras.',
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
          'Cada módulo cuesta un pago extra al mes sobre tu plan, y los dos juntos salen más baratos. Los activamos en el día y puedes quitarlos cuando quieras, sin perder lo que ya registraste.',
      },
      reports: {
        question: '¿Puedo sacar reportes en Excel o PDF?',
        answer:
          'Sí. Ves tus reportes en PDF o Excel dentro de Solvia, sin descargar nada, y si quieres los bajas con un toque: cobros por cliente, ventas por cliente o producto, stock y lo vendido sin stock.',
      },
      whatsapp: {
        question: '¿Cómo se envían los recordatorios por WhatsApp?',
        answer:
          'Solvia le avisa solo a tu cliente por WhatsApp unos días antes y después de la fecha de pago. Tú eliges cuántos días y qué dice el mensaje. Cada mensaje trae un enlace para pagar.',
      },
      security: {
        question: '¿Mis datos están seguros?',
        answer:
          'Sí. Nadie más ve tus clientes ni tus cuentas. Y si tienes trabajadores, puedes dejar que cobren sin que vean todo.',
      },
      plans: {
        question: '¿Qué plan me conviene?',
        answer:
          'Empieza con el plan Gratis. Si tienes muchos clientes o varios trabajadores, el Básico o el Negocio te dan más mensajes y usuarios. Puedes cambiar cuando quieras.',
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
      plan: '¿Qué plan te interesa?',
      modules: '¿Quieres sumar algún módulo?',
      planPlaceholder: 'Aún no sé (lo decido después)',
      message: '¿Algo que quieras contarnos?',
      messagePlaceholder: 'Cuéntanos cuántos clientes tienes o qué te gustaría resolver.',
      messageCount: '{count}/{max} caracteres',
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
      'Vende, cobra lo que fías y controla tu stock desde el celular. Para bodegas, ferreterías y negocios del Perú.',
    product: 'Producto',
    account: 'Cuenta',
    rights: '© {year} Solvia. Todos los derechos reservados.',
    preferences: 'Preferencias',
  },
};

/** Recursively widens string literals so other locales can provide different text with the same shape. */
type DeepStrings<T> = { [K in keyof T]: T[K] extends string ? string : DeepStrings<T[K]> };
export type Messages = DeepStrings<typeof es>;

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
    title: 'Solvia — Cobra a tiempo, sin perseguir a nadie',
  },
  nav: {
    label: 'Principal',
    skip: 'Saltar al contenido',
    home: 'Solvia, ir al inicio',
    features: 'Funciones',
    howItWorks: 'Cómo funciona',
    pricing: 'Precios',
    faq: 'Preguntas',
    login: 'Iniciar sesión',
    requestAccess: 'Solicitar acceso',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  hero: {
    eyebrow: 'Créditos y cobranzas para pequeñas empresas',
    titleStart: 'Cobra a tiempo,',
    titleHighlight: 'sin perseguir a tus clientes.',
    subtitle:
      'Solvia envía recordatorios por WhatsApp con link de pago, registra cada abono con su comprobante y te muestra cuánto dinero entrará esta semana.',
    primaryCta: 'Solicitar acceso',
    secondaryCta: 'Ver cómo funciona',
    trustLabel: 'Ventajas',
    trust: {
      activation: 'Te activamos en menos de 24 h',
      noCard: 'Sin tarjeta',
      currency: 'En soles (PEN)',
    },
  },
  mock: {
    label: 'Vista previa ilustrativa del panel de Solvia',
    title: 'Resumen de cobranzas',
    period: 'Este mes',
    collected: 'Cobrado',
    receivable: 'Por cobrar',
    overdue: 'Vencido',
    chartTitle: 'Proyección de flujo de caja',
    chartLabel: 'Gráfico ilustrativo de cobros por semana con línea de proyección',
    weeks: 'Sem 1,Sem 2,Sem 3,Sem 4,Sem 5,Sem 6',
    riskLow: 'Riesgo bajo',
    reminderApp: 'WhatsApp · recordatorio',
    reminderText: 'Hola Rosa, tu cuota de {amount} vence mañana. Puedes pagar aquí:',
    reminderLink: 'Link de pago',
    toastTitle: 'Pago recibido',
    toastBody: '{name} pagó {amount} con Yape',
  },
  problem: {
    title: 'De perseguir pagos a verlos llegar',
    subtitle: 'Lo que hoy te quita horas, Solvia lo resuelve por ti.',
    before: 'Antes',
    after: 'Con Solvia',
    items: {
      reminders: {
        before: 'Escribir a cada cliente, uno por uno, para recordarle que te debe.',
        after: 'Recordatorios automáticos por WhatsApp antes y después del vencimiento.',
      },
      payments: {
        before: 'Pagos anotados en un cuaderno y capturas de Yape perdidas en el chat.',
        after: 'Cada abono registrado con su comprobante y el saldo actualizado al instante.',
      },
      cash: {
        before: 'No saber cuánto dinero entrará este mes ni quién se está atrasando.',
        after: 'Proyección de flujo de caja por semana o mes y riesgo por cliente.',
      },
    },
  },
  features: {
    eyebrow: 'Funciones',
    title: 'Todo lo que necesitas para cobrar mejor',
    subtitle: 'Herramientas simples, pensadas para negocios que venden al crédito.',
    items: {
      receivables: {
        title: 'Clientes y cuentas por cobrar',
        body: 'Registra clientes y deudas con fecha de vencimiento. Mira al instante qué está pendiente, parcial, pagado o vencido.',
      },
      reminders: {
        title: 'Recordatorios por WhatsApp',
        body: 'Mensajes automáticos antes y después del vencimiento, con plantillas y variables a tu medida y un link de pago en cada uno.',
      },
      payments: {
        title: 'Pagos con comprobante',
        body: 'Registra pagos parciales o totales en efectivo, transferencia, Yape/Plin o tarjeta, y adjunta el voucher en imagen o PDF.',
      },
      risk: {
        title: 'Riesgo por cliente',
        body: 'Solvia califica a cada cliente con riesgo bajo, medio o alto según cómo paga, para que decidas a quién dar más crédito.',
      },
      dashboard: {
        title: 'Panel y flujo de caja',
        body: 'Proyección por semana o mes, tendencia de cobranza, antigüedad de deudas, principales deudores y distribución de riesgo.',
      },
      statements: {
        title: 'Estados de cuenta en PDF',
        body: 'Genera el estado de cuenta de cualquier cliente en un clic y recibe un reporte mensual de tu cobranza.',
      },
    },
  },
  how: {
    eyebrow: 'Cómo funciona',
    title: 'Empieza a cobrar en tres pasos',
    subtitle: 'Sin instalaciones ni capacitaciones largas.',
    step: 'Paso {number}',
    steps: {
      register: {
        title: 'Registra clientes y deudas',
        body: 'Agrega a tus clientes y lo que te deben, con montos y fechas de vencimiento.',
      },
      remind: {
        title: 'Solvia recuerda por WhatsApp',
        body: 'Cada hora revisa los vencimientos y envía el recordatorio con el link de pago, en los días que tú elijas.',
      },
      collect: {
        title: 'Registra pagos y mira tu caja',
        body: 'Anota cada abono con su comprobante; los saldos se actualizan solos y ves tu flujo de caja proyectado.',
      },
    },
  },
  soli: {
    eyebrow: 'Conoce a Soli',
    title: 'Tu asistente de cobranzas',
    body: 'Soli es la lechuza de Solvia. Te acompaña desde el primer día para que aproveches cada función sin perderte.',
    greeting: '¡Hola! Te muestro cómo funciona todo.',
    points: {
      tour: {
        title: 'Tour guiado',
        body: 'Un recorrido paso a paso por el panel, clientes, deudas y configuración.',
      },
      help: {
        title: 'Centro de ayuda',
        body: 'Respuestas claras a las dudas más comunes, siempre a la mano.',
      },
      chat: {
        title: 'Asistente por chat',
        body: 'Pronto podrás preguntarle a Soli sobre tu cobranza.',
        badge: 'Próximamente',
      },
    },
  },
  pricing: {
    eyebrow: 'Precios',
    title: 'Un plan para cada etapa de tu negocio',
    subtitle:
      'Empieza gratis y cambia de plan cuando lo necesites. Nuestro equipo activa tu cuenta.',
    perMonth: '/mes',
    recommended: 'Recomendado',
    note: 'Precios referenciales en soles (PEN), sujetos a cambios.',
    listLabel: 'Incluye en el plan {plan}',
    plans: {
      free: {
        name: 'Free',
        description: 'Para ordenar tus primeras cuentas por cobrar.',
        cta: 'Solicitar Free',
      },
      starter: {
        name: 'Starter',
        description: 'Para negocios que cobran cada semana.',
        cta: 'Solicitar Starter',
      },
      pro: {
        name: 'Pro',
        description: 'Para equipos de cobranza con más clientes.',
        cta: 'Solicitar Pro',
      },
    },
    limits: {
      customers: 'Hasta {count} clientes',
      users: 'Hasta {count} usuarios',
      singleUser: '1 usuario',
      reminders: '{count} recordatorios por WhatsApp al mes',
    },
    perks: {
      payments: 'Pagos con comprobante',
      dashboard: 'Panel con flujo de caja',
      templates: 'Plantillas de mensajes personalizadas',
      risk: 'Riesgo por cliente',
      statements: 'Estados de cuenta en PDF',
      roles: 'Roles de administrador y cobrador',
      monthlyReport: 'Reporte mensual de cobranza',
    },
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: '¿Tienes dudas?',
    subtitle: 'Estas son las preguntas que más nos hacen.',
    items: {
      whatsapp: {
        question: '¿Cómo se envían los recordatorios por WhatsApp?',
        answer:
          'Solvia revisa cada hora las deudas por vencer y vencidas, y envía el mensaje según los días que configures antes y después del vencimiento. Tú eliges las plantillas y cada mensaje incluye un link de pago.',
      },
      security: {
        question: '¿Mis datos están seguros?',
        answer:
          'Cada negocio tiene su información aislada: nadie de otra empresa puede ver tus clientes, deudas ni pagos. Además, dentro de tu equipo puedes asignar roles de administrador o cobrador.',
      },
      plans: {
        question: '¿Qué plan me conviene?',
        answer:
          'Free es ideal para empezar a ordenar tus cuentas. Si cobras cada semana o trabajas con más clientes, Starter o Pro te dan más recordatorios, usuarios y funciones. Indica el plan que te interesa al solicitar acceso y el equipo de Solvia activará tu cuenta con ese plan. Los precios mostrados son referenciales.',
      },
      google: {
        question: '¿Puedo entrar con mi cuenta de Google?',
        answer:
          'Sí. Una vez activada tu cuenta, puedes iniciar sesión con tu correo y contraseña o con la cuenta de Google de ese mismo correo.',
      },
      signup: {
        question: '¿Cómo empiezo a usar Solvia?',
        answer:
          'Solicita acceso con los datos de tu negocio. El equipo de Solvia crea tu cuenta, te contacta por WhatsApp o correo en menos de 24 horas y te entrega una contraseña temporal, que cambiarás al iniciar sesión por primera vez.',
      },
      currency: {
        question: '¿En qué moneda trabaja Solvia?',
        answer:
          'Solvia está pensado para negocios en Perú: los montos se manejan en soles (PEN). La interfaz está disponible en español e inglés.',
      },
      cancel: {
        question: '¿Puedo cancelar cuando quiera?',
        answer:
          'Sí. No hay contratos de permanencia: escríbenos para cambiar de plan o dejar de usar Solvia cuando quieras y el equipo de Solvia lo gestiona por ti.',
      },
    },
  },
  finalCta: {
    title: 'Deja que Solvia se encargue de recordar',
    body: 'Solicita acceso y te activamos tu cuenta en menos de 24 horas.',
    primary: 'Solicitar acceso',
    secondary: 'Ya tengo cuenta',
  },
  access: {
    title: 'Solicitar acceso',
    description: 'Cuéntanos de tu negocio y te activamos la cuenta en menos de 24 horas.',
    close: 'Cerrar',
    optional: 'opcional',
    submit: 'Enviar solicitud',
    privacy: 'Usaremos tus datos solo para contactarte sobre Solvia.',
    fields: {
      businessName: 'Nombre del negocio',
      contactName: 'Tu nombre',
      email: 'Correo',
      phone: 'Teléfono / WhatsApp',
      phoneHint: 'Elige el país; te escribiremos por WhatsApp a este número.',
      industry: 'Rubro',
      plan: 'Plan de interés',
      planPlaceholder: 'Aún no lo sé',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntanos cuántos clientes tienes o qué te gustaría resolver.',
      messageCount: '{count}/{max} caracteres',
    },
    industries: {
      placeholder: 'Selecciona tu rubro',
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
      otherPlaceholder: 'Escribe tu rubro',
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
      'Créditos y cobranzas para pequeñas empresas en Perú: recordatorios por WhatsApp, pagos con comprobante y flujo de caja.',
    product: 'Producto',
    account: 'Cuenta',
    rights: '© {year} Solvia. Todos los derechos reservados.',
    preferences: 'Preferencias',
  },
};

/** Recursively widens string literals so other locales can provide different text with the same shape. */
type DeepStrings<T> = { [K in keyof T]: T[K] extends string ? string : DeepStrings<T[K]> };
export type Messages = DeepStrings<typeof es>;

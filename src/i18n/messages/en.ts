import { uiEn } from '@/ui';
import type { Messages } from './es';

/** English landing strings. Must mirror the shape of `es.ts` (checked by the `Messages` type). */
export const en: Messages = {
  ...uiEn,
  errors: {
    ...uiEn.errors,
    codes: {
      ...uiEn.errors.codes,
      // Non-JSON failures (e.g. a proxy or gateway error page) get the generic text.
      HTTP_ERROR: uiEn.errors.generic,
      TOO_MANY_REQUESTS:
        'We received several requests from your connection. Please wait a few minutes and try again.',
    },
    fields: {
      ...uiEn.errors.fields,
      contactName: 'At least 2 characters',
      phone: 'Not a valid number for the selected country',
      industry: 'At most 80 characters',
      message: 'At most 1000 characters',
    },
  },
  meta: {
    title: 'Solvia — Your business in order: sell, collect and track your stock',
  },
  nav: {
    label: 'Main',
    skip: 'Skip to content',
    home: 'Solvia, go to top',
    features: 'Features',
    howItWorks: 'How it works',
    pricing: 'Pricing',
    modules: 'Modules',
    faq: 'FAQ',
    login: 'Sign in',
    requestAccess: 'Try it free',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    eyebrow: 'For corner shops, hardware stores, minimarkets and distributors',
    titleStart: 'Your business in order,',
    titleHighlight: 'from your phone.',
    subtitle:
      'Record your sales, collect what you give on credit with WhatsApp reminders and know how much stock you have left. All in one place, no notebooks.',
    primaryCta: 'I want to try it free',
    secondaryCta: 'See how it works',
    newBadge: 'New',
    newText: 'Sales and Inventory now available',
    trustLabel: 'Benefits',
    trust: {
      activation: 'Free to start',
      noCard: 'Nothing to install: it works on your phone',
      currency: 'Activated in under 24 h',
    },
  },
  mock: {
    label: 'Illustrative preview of the Solvia dashboard',
    title: 'Your business today',
    period: 'This month',
    sold: 'Sold',
    receivable: 'Owed to you',
    lowStock: 'Running low',
    lowStockValue: '3 products',
    chartTitle: 'What you sell each week',
    chartLabel: 'Illustrative chart of weekly sales with a trend line',
    weeks: 'Wk 1,Wk 2,Wk 3,Wk 4,Wk 5,Wk 6',
    product: 'Primor oil 1 L',
    productLeft: '3 units left',
    runningLow: 'Running low',
    reminderApp: 'WhatsApp · reminder',
    reminderText: 'Hi Rosa, your {amount} installment is due tomorrow. You can pay here:',
    reminderLink: 'Pay with Yape',
    toastTitle: 'Sale recorded',
    toastBody: 'Sale #{number} · {amount} with Yape',
  },
  problem: {
    title: 'From the notebook to a business in order',
    subtitle: 'What takes you hours today, Solvia does for you.',
    before: 'Before',
    after: 'With Solvia',
    items: {
      sales: {
        before:
          'Sales jotted down in a hurry, and at the end of the day you do not know how much you sold.',
        after:
          'Every sale recorded in seconds by scanning the product, with the day total in sight.',
      },
      credit: {
        before: 'Messaging each customer, one by one, to remind them what they owe.',
        after: 'Solvia reminds them on WhatsApp and you just mark when they pay.',
      },
      stock: {
        before: 'Finding out a product ran out when the customer already asked for it.',
        after: 'Stock goes down with each sale and it tells you what is running low.',
      },
      numbers: {
        before: 'Not knowing how much you make, who owes you most or what sells best.',
        after: 'Clear PDF or Excel reports: sales, payments, stock and profit.',
      },
    },
  },
  trust: {
    payLabel: 'Records payments by',
    worksWith: 'Works with',
    cash: 'Cash',
    transfer: 'Bank transfer',
    barcode: 'Barcodes',
    reports: 'PDF and Excel',
    madeFor: 'Made for businesses in Peru',
  },
  features: {
    demo: {
      reminderSent: 'Reminder sent',
      reminderText: 'Hi Rosa, your S/ 350.00 instalment is due tomorrow. Pay here:',
      payLink: 'Pay now',
      cashIn: 'Coming in this week',
      week: 'Wk {number}',
      statusPending: 'Pending',
      statusPartial: 'Partial',
      statusPaid: 'Paid',
      statusOverdue: 'Overdue',
    },
  },
  product: {
    eyebrow: 'All in one app',
    title: 'Your whole business, in one place',
    subtitle:
      'Sell, track your stock, collect and see your numbers. Every part works with the others, with no copying data around.',
    navLabel: 'Parts of Solvia',
    availability: {
      included: 'Included in every plan',
      salesModule: 'Sales module',
      inventoryModule: 'Inventory module',
    },
    areas: {
      sales: {
        name: 'Sales',
        title: 'Sell in seconds, from your phone or the counter',
        body: 'Search or scan the product, choose cash or credit and you are done. Solvia works out the total and keeps it all recorded.',
        points: {
          p1: 'Scan the barcode or search by name',
          p2: 'Cash with Yape, Plin, cash or bank transfer',
          p3: 'On credit, the debt goes into what you are owed',
          p4: 'It warns you when you sell without stock and records it',
        },
      },
      stock: {
        name: 'Inventory',
        title: 'Your stock always up to date, no counting by hand',
        body: 'Every sale takes out and every purchase adds. See how much of each product is left and what is running low.',
        points: {
          p1: 'Alerts for what is running low',
          p2: 'Movement history of every product',
          p3: 'Adjustments for counts, losses or damage',
          p4: 'What your stock is worth at cost and at sale price',
        },
      },
      purchases: {
        name: 'Purchases',
        title: 'Record what arrives from your suppliers',
        body: 'Record each purchase with its cost: your stock goes up by itself and your profit uses what you paid.',
        points: {
          p1: 'Suppliers with their tax ID and WhatsApp',
          p2: 'Update your product costs when you buy',
          p3: 'Keep the invoice or receipt number',
        },
      },
      collections: {
        name: 'Collections',
        title: 'Collect what you are owed without chasing anyone',
        body: 'Record who owes you and by when. Solvia reminds them on WhatsApp and you just mark when they pay.',
        points: {
          p1: 'Automatic WhatsApp reminders',
          p2: 'Partial payments with a photo of the receipt',
          p3: 'Who pays on time and who is late',
          p4: 'PDF account statement for your customer',
        },
      },
      dashboard: {
        name: 'Dashboard',
        title: 'Understand your business at a glance',
        body: 'How much you collected against last month, who to collect from first and how much money should come in this week.',
        points: {
          p1: 'Comparison with the previous period',
          p2: 'Who to collect from first',
          p3: 'What you will collect each week',
        },
      },
      reports: {
        name: 'Reports',
        title: 'PDF and Excel reports, right inside Solvia',
        body: 'Pick the report and the dates, see it on the same screen and download it in one tap for your accountant.',
        points: {
          p1: 'Sales by customer and by product',
          p2: 'Payments by customer and method',
          p3: 'Stock value and products running low',
          p4: 'When something was sold without stock',
        },
      },
    },
    mocks: {
      sales: {
        title: 'New sale',
        search: 'Scan or type the product…',
        cash: 'Cash',
        credit: 'On credit',
        charge: 'Charge {amount}',
      },
      stock: {
        title: 'Products',
        ok: 'Fine',
        low: 'Running low',
        out: 'Out of stock',
        movement: 'Sale #128 · Primor oil 1 L · 3 left',
      },
      purchases: {
        title: 'New purchase',
        invoice: 'Invoice F001-2231',
        total: 'Purchase total',
        costs: 'Stock and costs updated',
      },
      collections: {
        title: 'Collections',
      },
      dashboard: {
        title: 'Dashboard',
        collected: 'Collected this month',
        vsLast: '+18% vs last month',
        first: 'Collect first from',
        owes: 'Owes S/ 1,547.70',
        cash: 'Cash',
        transfer: 'Transfer',
      },
      reports: {
        title: 'Reports · Payments by customer',
        pdf: 'View PDF',
        excel: 'View Excel',
        download: 'Download',
        customer: 'Customer',
        paid: 'Paid you',
        payments: 'Payments',
      },
    },
  },
  how: {
    eyebrow: 'How it works',
    title: 'Start today in three steps',
    subtitle: 'Nothing to install and no computer skills needed.',
    step: 'Step {number}',
    steps: {
      start: {
        title: 'We activate your account',
        body: 'Leave your details and in under 24 hours you are in from your phone, with your customers and products.',
      },
      sell: {
        title: 'Sell and record what you give on credit',
        body: 'Record every sale in seconds. On credit, it goes into what you are owed and Solvia reminds your customer on WhatsApp.',
      },
      grow: {
        title: 'See how your business is doing',
        body: 'How much you sold, what you are owed, what is running low and your reports ready as PDF or Excel.',
      },
    },
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'A plan for every stage of your business',
    subtitle:
      'Start free with collections and add Sales and Inventory when your business needs them.',
    perMonth: '/mo',
    recommended: 'Recommended',
    note: 'Monthly prices in Peruvian soles.',
    modulesLink: 'Do you sell or keep stock? Add Sales and Inventory.',
    listLabel: 'Included in the {plan} plan',
    plans: {
      free: {
        name: 'Free',
        description: 'To ditch the notebook and track who owes you.',
        cta: 'Start free',
      },
      starter: {
        name: 'Basic',
        description: 'For businesses that collect every week.',
        cta: 'Choose this plan',
      },
      pro: {
        name: 'Business',
        description: 'For businesses with several sellers or collectors.',
        cta: 'Choose this plan',
      },
    },
    limits: {
      customers: 'Up to {count|# customer|# customers}',
      users: 'Up to {count|# user|# users}',
      singleUser: '1 user',
      reminders: '{count} WhatsApp reminders per month',
    },
    perks: {
      payments: 'Keep a photo of each payment',
      dashboard: 'Summary of what you will be paid',
      templates: 'Write your own messages',
      risk: 'Who pays on time and who is late',
      statements: 'PDF debt summary for your customer',
      roles: 'Your staff collect without seeing everything',
      reports: 'PDF and Excel reports, right inside Solvia',
      monthlyReport: 'Summary of each month',
    },
  },
  modules: {
    eyebrow: 'Sales and Inventory',
    title: 'Sell faster and never run out of stock',
    subtitle:
      'Add them to any plan for an extra monthly fee and we turn them on the same day. They work with your collections: what you sell on credit goes into what you are owed.',
    sales: {
      name: 'Sales',
      short: 'Record what you sell, cash or on credit.',
      description:
        'Sell fast from your phone or the counter and keep everything recorded with no effort.',
      points: {
        quick: 'Record a sale in seconds, cash or on credit',
        scanner: 'Search or scan the product barcode',
        credit: 'On credit, the debt goes into “Collections” on its own',
        receipts: 'Keep the receipt or invoice number',
        reports: 'Sales reports by customer and by product',
      },
      cta: 'I want Sales',
    },
    inventory: {
      name: 'Inventory',
      short: 'Purchases, suppliers and stock up to date.',
      description:
        'Know how much of each product you have left without counting by hand every day.',
      points: {
        stock: 'Stock goes down with each sale and up with each purchase',
        purchases: 'Record what arrives and update your costs',
        suppliers: 'Your suppliers one WhatsApp tap away',
        alerts: 'It tells you which products are running low',
        traceability: 'You know when something was sold without stock, to balance your books',
      },
      cta: 'I want Inventory',
    },
    bundle: {
      title: 'Both for {price} a month',
      body: 'Sales and Inventory work together: every sale takes stock out. You save {saving} a month.',
      cta: 'I want both',
    },
    note: 'Every report opens as PDF or Excel inside Solvia and downloads in one tap. You can remove a module whenever you want.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions?',
    subtitle: 'These are the ones we hear most often.',
    items: {
      sales: {
        question: 'Can Solvia record my sales and my stock?',
        answer:
          'Yes. With the Sales module you record every sale, cash or on credit, searching or scanning the product. With the Inventory module your stock goes down with each sale, up with each purchase, and it tells you what is running low.',
      },
      modulesPrice: {
        question: 'How much do the modules cost, and can I remove them?',
        answer:
          'Each module is an extra monthly fee on top of your plan, and both together cost less. We turn them on the same day and you can remove them whenever you want without losing what you recorded.',
      },
      reports: {
        question: 'Can I get reports in Excel or PDF?',
        answer:
          'Yes. You see your reports as PDF or Excel inside Solvia without downloading anything, and download them in one tap if you want: payments by customer, sales by customer or product, stock and what was sold without stock.',
      },
      whatsapp: {
        question: 'How are the WhatsApp reminders sent?',
        answer:
          'Solvia messages your customer on WhatsApp a few days before and after the payment date. You choose how many days and what the message says. Each message has a link to pay.',
      },
      security: {
        question: 'Is my data safe?',
        answer:
          'Yes. Nobody else sees your customers or your accounts. And if you have staff, they can collect without seeing everything.',
      },
      plans: {
        question: 'Which plan is right for me?',
        answer:
          'Start with the Free plan. If you have many customers or several staff, Basic or Business give you more messages and users. You can switch whenever you want.',
      },
      google: {
        question: 'Can I sign in with my Google account?',
        answer:
          'Yes. Once your account is active, you can sign in with your email and password or with the Google account of that same email.',
      },
      signup: {
        question: 'How do I start using Solvia?',
        answer:
          'Leave us your details with the “I want to try it free” button. We message you on WhatsApp within 24 hours with your user and a password. The first time you sign in, you choose your own password.',
      },
      install: {
        question: 'Do I need to install anything?',
        answer:
          'No. Solvia opens in the browser of your phone or computer, like a website. If you like, you can add it to your phone’s home screen like an app.',
      },
      cancel: {
        question: 'Can I cancel anytime?',
        answer:
          'Yes. There are no contracts: write to us whenever you want to switch plans or stop using Solvia.',
      },
      customers: {
        question: 'Do my customers have to download anything?',
        answer:
          'No. Your customers get a normal WhatsApp message. If they want, they pay with Yape or Plin from the link in the message.',
      },
    },
  },
  finalCta: {
    title: 'Put your business in order today',
    body: 'Try it free: sell, collect and track your stock. We activate your account in under 24 hours.',
    primary: 'I want to try it free',
    secondary: 'I already have an account',
  },
  access: {
    title: 'Try Solvia free',
    description:
      'Leave us your details and we will message you on WhatsApp within 24 hours to activate your account.',
    close: 'Close',
    optional: 'optional',
    submit: 'Send my details',
    privacy: 'We will only use your details to contact you about Solvia.',
    fields: {
      businessName: 'Business name',
      contactName: 'Your name',
      email: 'Email (you will use it to sign in)',
      phone: 'Phone / WhatsApp',
      phoneHint: "Pick the country; we'll message you on WhatsApp at this number.",
      industry: 'What kind of business do you have?',
      plan: 'Which plan interests you?',
      modules: 'Would you like to add a module?',
      planPlaceholder: 'Not sure yet (decide later)',
      message: 'Anything you want to tell us?',
      messagePlaceholder: 'Tell us how many customers you have or what you would like to solve.',
      messageCount: '{count}/{max} characters',
    },
    industries: {
      placeholder: 'Select your industry',
      grocery: 'Grocery or convenience store',
      hardware: 'Hardware store',
      wholesale: 'Distributor or wholesaler',
      restaurant: 'Restaurant or café',
      pharmacy: 'Pharmacy',
      clothing: 'Clothing and footwear',
      technology: 'Technology and electronics',
      professional: 'Professional services',
      health: 'Health and clinics',
      education: 'Education',
      construction: 'Construction',
      transport: 'Transport and logistics',
      other: 'Other',
      otherPlaceholder: 'Type your industry',
    },
    errors: {
      length: 'Use between 2 and 120 characters',
      email: 'Enter a valid email address',
      phone: 'Not a valid number for the selected country',
      message: 'At most {max} characters',
    },
    success: {
      title: 'Done! We received your request',
      body: 'We will contact you by WhatsApp or email within 24 hours to activate your account.',
      close: 'Close',
    },
  },
  footer: {
    description:
      'Sell, collect what you are owed and track your stock from your phone. For corner shops, hardware stores and businesses in Peru.',
    product: 'Product',
    account: 'Account',
    rights: '© {year} Solvia. All rights reserved.',
    preferences: 'Preferences',
  },
};

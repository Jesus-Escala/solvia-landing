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
    features: 'What is included',
    howItWorks: 'How to start',
    pricing: 'Pricing',
    faq: 'FAQ',
    login: 'Sign in',
    requestAccess: 'Try it free',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    eyebrow: 'For any business that sells, collects or keeps stock',
    titleStart: 'Your business in order,',
    titleHighlight: 'from your phone.',
    subtitle:
      'Record your sales, collect what you give on credit with WhatsApp reminders and know how much stock you have left. All in one place, no notebooks.',
    primaryCta: 'I want to try it free',
    secondaryCta: 'See what is included',
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
      included: 'Comes with any module',
      salesModule: 'Sales module',
      inventoryModule: 'Inventory module',
      collectionsModule: 'Collections module',
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
    eyebrow: 'How to start',
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
    title: 'Build your plan and pay only for what you use',
    subtitle:
      'Pick your modules. The more you add, the cheaper each one gets and the more users, customers and automatic WhatsApp messages it includes.',
    perMonth: '/mo',
    pick: 'Pick your modules',
    unlimited: 'Unlimited',
    unlimitedMany: 'Unlimited',
    note: 'Reference monthly prices in Peruvian soles. Change your modules whenever you want.',
    billing: {
      label: 'Billing',
      monthly: 'Monthly',
      annual: 'Yearly',
      annualBadge: '2 months free',
    },
    modules: {
      collections: {
        name: 'Collections',
        short: 'Credit and WhatsApp reminders.',
        description: 'Record what you give on credit and collect without chasing anyone.',
        points: {
          reminders: 'Automatic WhatsApp reminders',
          payments: 'Payments with a photo of the receipt',
          risk: 'Who pays on time and who is late',
          statements: 'PDF account statement for your customer',
          dashboard: 'Dashboard with what you will collect',
          reports: 'Payment reports as PDF and Excel',
        },
      },
      sales: {
        name: 'Sales',
        short: 'Record what you sell, cash or on credit.',
        description: 'Sell fast from your phone or the counter and keep it all recorded.',
        points: {
          quick: 'Sales in seconds, cash or on credit',
          scanner: 'Scan the barcode or search',
          credit: 'With Collections, credit sales are collected by themselves',
          receipts: 'Receipt or invoice number',
          shortage: 'A warning when you sell without stock',
          reports: 'Sales reports by customer and product',
        },
      },
      inventory: {
        name: 'Inventory',
        short: 'Purchases, suppliers and stock up to date.',
        description: 'Know how much of each product is left without counting by hand.',
        points: {
          stock: 'Stock that goes down and up by itself',
          alerts: 'Alerts for what is running low',
          purchases: 'Purchases that update your costs',
          suppliers: 'Suppliers one WhatsApp tap away',
          adjustments: 'Adjustments for counts, losses or damage',
          reports: 'Stock value report',
        },
      },
    },
    ladder: {
      title: 'The more modules, the better',
      count: '{count|# module|# modules}',
      yours: 'Your plan',
      off: '{percent} off',
      noDiscount: 'Regular price',
      whatsapp: 'automatic messages a month',
      manualValue: 'Sent from your phone: free',
      usersValue: '{count|# user|# users}',
      customersValue: 'Up to {count} customers',
      customersUnlimited: 'Unlimited customers',
      packs:
        'Automatic messages (the ones Solvia sends by itself) have a cost, so they grow with your modules and you can add packs of {messages} for {price}. The ones you send from your phone, in one tap, cost nothing: free in every plan.',
    },
    bowl: {
      one: 'Good start: begin with what you need most.',
      two: 'Looking good! 10% off and more messages.',
      three: 'Your whole business in order! 15% off.',
    },
    summary: {
      manual: '+ the ones you send from your phone, free',
      title: 'Your plan',
      saving: 'Module discount ({percent})',
      savingAnnual: 'Module and yearly discount',
      yearly: 'You pay {amount} a year',
      whatsapp: 'automatic messages a month',
      users: 'users',
      customers: 'customers',
      nudge: 'Add one more module to get {percent} off and {whatsapp} automatic messages a month.',
      cta: 'I want this plan',
      noCard: 'No card needed: we message you to activate it.',
      noCollections: 'Without Collections there are no automatic messages: they are its reminders.',
      nudgeNoMessages: 'Add one more module and get {percent} off, more users and more customers.',
    },
    free: {
      title: 'Just starting? Try the Free plan',
      body: 'To start: the module you choose, up to {customers} customers and 1 user, with reminders from your own WhatsApp at no cost. When you want Solvia to send them for you, move to a paid plan with Collections.',
      cta: 'Start free',
    },
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
          'Each module has its price and they add up: with 2 modules you get 10% off and with all 3, 15%, plus more users, customers and automatic messages. Paying yearly gives you 2 months free. You can remove a module whenever you want without losing what you recorded.',
      },
      reports: {
        question: 'Can I get reports in Excel or PDF?',
        answer:
          'Yes. You see your reports as PDF or Excel inside Solvia without downloading anything, and download them in one tap if you want: payments by customer, sales by customer or product, stock and what was sold without stock.',
      },
      whatsapp: {
        question: 'How are the WhatsApp reminders sent?',
        answer:
          'In two ways. From your own WhatsApp: Solvia prepares the message and you send it in one tap; unlimited in every plan. Or automatically: Solvia messages your customer before and after the due date. Each plan includes automatic messages a month and you can add packs if you need more.',
      },
      security: {
        question: 'Is my data safe?',
        answer:
          'Yes. Nobody else sees your customers or your accounts. And if you have staff, they can collect without seeing everything.',
      },
      plans: {
        question: 'Which plan suits me?',
        answer:
          'Choose only what you use: Collections, Sales or Inventory, alone or together (or the Free plan if you are just starting). The more modules, the bigger the discount and the more users and customers; with Collections, automatic WhatsApp messages too.',
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
      plan: 'How do you want to start?',
      modules: 'Would you like to add a module?',
      planPlaceholder: 'Not sure yet (decide later)',
      message: 'Anything you want to tell us?',
      messagePlaceholder: 'Tell us how many customers you have or what you would like to solve.',
      messageCount: '{count}/{max} characters',
    },
    starts: {
      free: 'With the Free plan',
      monthly: 'Paying monthly',
      annual: 'Paying yearly (2 months free)',
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
      'Sell, collect what you are owed and track your stock from your phone. For businesses of every kind and size.',
    product: 'Product',
    account: 'Account',
    rights: '© {year} Solvia. All rights reserved.',
    preferences: 'Preferences',
  },
};

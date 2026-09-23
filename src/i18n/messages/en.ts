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
    title: 'Solvia — Get paid on time, without chasing anyone',
  },
  nav: {
    label: 'Main',
    skip: 'Skip to content',
    home: 'Solvia, go to top',
    features: 'Features',
    howItWorks: 'How it works',
    pricing: 'Pricing',
    faq: 'FAQ',
    login: 'Sign in',
    requestAccess: 'Request access',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    eyebrow: 'Credit & collections for small businesses',
    titleStart: 'Get paid on time,',
    titleHighlight: 'without chasing your customers.',
    subtitle:
      'Solvia sends WhatsApp reminders with a payment link, records every payment with its proof and shows you how much cash is coming in this week.',
    primaryCta: 'Request access',
    secondaryCta: 'See how it works',
    trustLabel: 'Highlights',
    trust: {
      activation: 'Activated in under 24 h',
      noCard: 'No card required',
      currency: 'In soles (PEN)',
    },
  },
  mock: {
    label: 'Illustrative preview of the Solvia dashboard',
    title: 'Collections overview',
    period: 'This month',
    collected: 'Collected',
    receivable: 'Receivable',
    overdue: 'Overdue',
    chartTitle: 'Cash-flow projection',
    chartLabel: 'Illustrative chart of weekly collections with a projection line',
    weeks: 'Wk 1,Wk 2,Wk 3,Wk 4,Wk 5,Wk 6',
    riskLow: 'Low risk',
    reminderApp: 'WhatsApp · reminder',
    reminderText: 'Hi Rosa, your {amount} installment is due tomorrow. You can pay here:',
    reminderLink: 'Payment link',
    toastTitle: 'Payment received',
    toastBody: '{name} paid {amount} via Yape',
  },
  problem: {
    title: 'From chasing payments to watching them arrive',
    subtitle: 'What takes you hours today, Solvia handles for you.',
    before: 'Before',
    after: 'With Solvia',
    items: {
      reminders: {
        before: 'Messaging every customer, one by one, to remind them what they owe.',
        after: 'Automatic WhatsApp reminders before and after the due date.',
      },
      payments: {
        before: 'Payments written in a notebook and Yape screenshots lost in the chat.',
        after: 'Every payment recorded with its proof and the balance updated instantly.',
      },
      cash: {
        before: 'Not knowing how much cash is coming this month or who is falling behind.',
        after: 'Weekly or monthly cash-flow projection and a risk score per customer.',
      },
    },
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need to collect better',
    subtitle: 'Simple tools built for businesses that sell on credit.',
    items: {
      receivables: {
        title: 'Customers & receivables',
        body: 'Track customers and debts with due dates. See at a glance what is pending, partial, paid or overdue.',
      },
      reminders: {
        title: 'WhatsApp reminders',
        body: 'Automatic messages before and after the due date, with your own templates and variables and a payment link in each one.',
      },
      payments: {
        title: 'Payments with proof',
        body: 'Record partial or full payments by cash, transfer, Yape/Plin or card, and attach the voucher as an image or PDF.',
      },
      risk: {
        title: 'Customer risk score',
        body: 'Solvia rates each customer as low, medium or high risk based on how they pay, so you can decide who gets more credit.',
      },
      dashboard: {
        title: 'Dashboard & cash flow',
        body: 'Weekly or monthly projection, collection trend, receivables aging, top debtors and risk distribution.',
      },
      statements: {
        title: 'PDF account statements',
        body: 'Generate any customer’s account statement in one click and get a monthly collections report.',
      },
    },
  },
  how: {
    eyebrow: 'How it works',
    title: 'Start collecting in three steps',
    subtitle: 'No installs, no lengthy training.',
    step: 'Step {number}',
    steps: {
      register: {
        title: 'Add customers and debts',
        body: 'Add your customers and what they owe you, with amounts and due dates.',
      },
      remind: {
        title: 'Solvia reminds them on WhatsApp',
        body: 'Every hour it checks due dates and sends the reminder with a payment link, on the days you choose.',
      },
      collect: {
        title: 'Record payments, watch your cash',
        body: 'Log each payment with its proof; balances update on their own and you see your projected cash flow.',
      },
    },
  },
  soli: {
    eyebrow: 'Meet Soli',
    title: 'Your collections assistant',
    body: 'Soli is Solvia’s owl. It is with you from day one so you can make the most of every feature without getting lost.',
    greeting: 'Hi! Let me show you around.',
    points: {
      tour: {
        title: 'Guided tour',
        body: 'A step-by-step walkthrough of the dashboard, customers, debts and settings.',
      },
      help: {
        title: 'Help center',
        body: 'Clear answers to the most common questions, always at hand.',
      },
      chat: {
        title: 'Chat assistant',
        body: 'Soon you will be able to ask Soli about your collections.',
        badge: 'Coming soon',
      },
    },
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'A plan for every stage of your business',
    subtitle: 'Start free and switch plans whenever you need. Our team activates your account.',
    perMonth: '/mo',
    recommended: 'Recommended',
    note: 'Reference prices in Peruvian soles (PEN), subject to change.',
    listLabel: 'Included in the {plan} plan',
    plans: {
      free: {
        name: 'Free',
        description: 'To organize your first receivables.',
        cta: 'Request Free',
      },
      starter: {
        name: 'Starter',
        description: 'For businesses that collect every week.',
        cta: 'Request Starter',
      },
      pro: {
        name: 'Pro',
        description: 'For collection teams with more customers.',
        cta: 'Request Pro',
      },
    },
    limits: {
      customers: 'Up to {count} customers',
      users: 'Up to {count} users',
      singleUser: '1 user',
      reminders: '{count} WhatsApp reminders per month',
    },
    perks: {
      payments: 'Payments with proof',
      dashboard: 'Cash-flow dashboard',
      templates: 'Custom message templates',
      risk: 'Customer risk score',
      statements: 'PDF account statements',
      roles: 'Admin and collector roles',
      monthlyReport: 'Monthly collections report',
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions?',
    subtitle: 'These are the ones we hear most often.',
    items: {
      whatsapp: {
        question: 'How are WhatsApp reminders sent?',
        answer:
          'Every hour Solvia checks upcoming and overdue debts and sends the message on the days you set before and after the due date. You choose the templates, and every message includes a payment link.',
      },
      security: {
        question: 'Is my data safe?',
        answer:
          'Each business has its own isolated data: no one from another company can see your customers, debts or payments. Within your team you can also assign admin or collector roles.',
      },
      plans: {
        question: 'Which plan is right for me?',
        answer:
          'Free is great to get your receivables in order. If you collect every week or work with more customers, Starter or Pro give you more reminders, users and features. Tell us the plan you want when you request access and the Solvia team will activate your account on it. Prices shown are for reference.',
      },
      google: {
        question: 'Can I sign in with my Google account?',
        answer:
          'Yes. Once your account is active, you can sign in with your email and password or with the Google account of that same email.',
      },
      signup: {
        question: 'How do I get started with Solvia?',
        answer:
          'Request access with your business details. The Solvia team creates your account, contacts you by WhatsApp or email within 24 hours and gives you a temporary password, which you will change the first time you sign in.',
      },
      currency: {
        question: 'Which currency does Solvia use?',
        answer:
          'Solvia is built for businesses in Peru: amounts are handled in soles (PEN). The interface is available in Spanish and English.',
      },
      cancel: {
        question: 'Can I cancel anytime?',
        answer:
          'Yes. There are no lock-in contracts: write to us to switch plans or stop using Solvia whenever you want and the Solvia team takes care of it.',
      },
    },
  },
  finalCta: {
    title: 'Let Solvia do the reminding',
    body: 'Request access and we will activate your account within 24 hours.',
    primary: 'Request access',
    secondary: 'I already have an account',
  },
  access: {
    title: 'Request access',
    description: 'Tell us about your business and we will activate your account within 24 hours.',
    close: 'Close',
    optional: 'optional',
    submit: 'Send request',
    privacy: 'We will only use your details to contact you about Solvia.',
    fields: {
      businessName: 'Business name',
      contactName: 'Your name',
      email: 'Email',
      phone: 'Phone / WhatsApp',
      phoneHint: "Pick the country; we'll message you on WhatsApp at this number.",
      industry: 'Industry',
      plan: 'Plan of interest',
      planPlaceholder: 'Not sure yet',
      message: 'Message',
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
      'Credit & collections for small businesses in Peru: WhatsApp reminders, payments with proof and cash flow.',
    product: 'Product',
    account: 'Account',
    rights: '© {year} Solvia. All rights reserved.',
    preferences: 'Preferences',
  },
};

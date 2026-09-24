import { FeedbackProvider, ThemeProvider } from '@/ui';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { AccessRequestProvider } from './access/AccessRequestProvider';
import { App } from './App';
import { I18nProvider } from './i18n/I18nProvider';
import './index.css';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

createRoot(root).render(
  <StrictMode>
    <ThemeProvider>
      <I18nProvider>
        <FeedbackProvider>
          <AccessRequestProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AccessRequestProvider>
        </FeedbackProvider>
      </I18nProvider>
    </ThemeProvider>
  </StrictMode>,
);

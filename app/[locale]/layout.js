import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from '../../i18n/request';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata = {
  title: "Inzeedo ERP | All-in-One Business Management & Retail Software",
  description: "A complete, easy-to-use software that combines your Point of Sale, Inventory, Customer Relationships, and Accounting. Stop juggling multiple apps and start scaling.",
};

export default async function RootLayout({ children, params }) {
  const {locale} = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={`${plusJakartaSans.variable} antialiased`}>
      <body className="min-h-screen overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

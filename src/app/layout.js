import Head from 'next/head';
import "./globals.css";

export const metadata = {
  title: "Terciopelo Beauty Studio",
  description: "Tu experiencia de belleza personalizada. Corte de cabello, tintes, tratamientos, maquillaje y peinado profesional que se adaptan a tu estilo único.",
  icons: {
    icon: "/Images/favicon.ico", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
  
      <Head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="canonical" href="https://terciopelo.calendarhit.com/" />
        <meta name="author" content="Nicolle Pitty" />
        <meta property="og:title" content="Terciopelo Beauty Studio" />
        <meta
          property="og:description"
          content="Tu experiencia de belleza personalizada. Corte de cabello, tintes, tratamientos, maquillaje y peinado profesional que se adaptan a tu estilo único."
        />
        <meta
          name="keywords"
          content="Servicios de belleza, Cuidado personal, Estética profesional, Tratamientos de belleza, Terciopelo Beauty Studio, Maquillaje profesional, Corte de cabello, Estudio de belleza, Experiencia de belleza personalizada, Reserva de citas, Servicios de calidad"
        />
        <meta property="og:image" content="/Images/logo.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://terciopelo.calendarhit.com/"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nicolle Pitty",
              url: "https://terciopelo.calendarhit.com/",
              logo: "https://terciopelo.calendarhit.com/Images/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+506-89632882",
                contactType: "Customer Service",
                areaServed: "CR",
                availableLanguage: "es",
              },
              sameAs: [
                "https://www.instagram.com/terciopelobeauty/",
                "https://www.tiktok.com/@nicollepitty",
              ],
            }),
          }}
        />
     </Head>

      <body className="antialiased">{children}</body>
    </html>
  );
}

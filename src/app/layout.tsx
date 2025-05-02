import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
    children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <head>
                <title>Green Reverse Logistics</title>
                <meta
                    name="description"
                    content="Soluções sustentáveis para logística reversa de resíduos eletrônicos no estado do Rio de Janeiro."
                />      
                <meta name="google-site-verification" content="google4e03a647cb969f99.html" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Green Reverse Logistics",
                        "url": "https://www.greenreverselogistics.com.br",
                        "logo": "https://www.greenreverselogistics.com.br/symbol.png",
                        "description": "Soluções sustentáveis para logística reversa de resíduos eletrônicos no estado do Rio de Janeiro.",
                    })
                }} />
                <link rel="icon" href="/symbol.png" />
            </head>
            <body>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
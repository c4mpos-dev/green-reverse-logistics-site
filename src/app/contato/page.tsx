"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { ParticleBackground } from "@/components/particle-background";
import { ModeToggle } from "@/components/mode-toggle"
import { SiteFooter } from "@/components/site-footer"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const scrollToSection = (id: string) => {
        // Esta função é um placeholder para manter a compatibilidade com o SiteFooter
        // Na página de contato, vamos redirecionar para a página inicial com o hash
        window.location.href = `/#${id}`
    }

    const sections = [
        { href: "/#como-funciona", label: "Como funciona" },
        { href: "/#sobre-nos", label: "Sobre nós" },
        { href: "/#impacto-ambiental", label: "Impacto Ambiental" },
        { href: "/#parceiros", label: "Parceiros" },
        { href: "/#faq", label: "FAQ" },
    ]

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
				<div className="container flex items-center justify-between h-16 px-4 md:px-6">
					<a
						className="flex items-center gap-3 text-xl font-bold text-green-600 hover:cursor-pointer dark:text-white" 
						onClick={(e) => {
							e.preventDefault()
							scrollToSection("inicio")
						}}
					>	
						<Image src="/symbol.png" alt="Symbol GRL" className="object-cover dark:hidden" width={40} height={40}/>
						<Image src="/symbol-white.png" alt="Symbol GRL" className="hidden object-cover dark:block" width={40} height={40}/>
						<p className="mt-1">GRL</p>
					</a>
					<div className="flex items-center gap-6">
						<nav className="hidden md:flex items-center gap-6">
							{sections.map(({ href, label }) => (
								<Link
									key={href}
									className="text-sm font-medium hover:text-green-600 hover:cursor-pointer dark:hover:text-green-400 transition-colors"
									href={href}
								>
									{label}
								</Link>
							))}
							<Link
								href="/contato"
								className="inline-flex h-9 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 dark:bg-green-700 dark:hover:bg-green-600 dark:focus:ring-green-500"
							>
								Contato
							</Link>
						</nav>
						<div className="flex items-center gap-2">
							<ModeToggle />

							{/* Mobile Menu */}
							<Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
								<SheetTrigger asChild>
									<button className="inline-flex items-center justify-center md:hidden rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground">
										<FontAwesomeIcon icon={faBars} className="h-6 w-6" />
									</button>
								</SheetTrigger>

								<SheetContent side="right" className="w-[80%] sm:w-[350px] [&>button]:hidden">
									<div className="flex flex-col h-full">
										<div className="flex items-center justify-between mt-[-10px] mb-6">
											<SheetTitle  className="text-xl font-bold text-green-600 dark:text-green-400">Navegação</SheetTitle>
											<button onClick={() => setIsMenuOpen(false)} className="">
												<FontAwesomeIcon icon={faXmark} className="h-6 w-6 mt-2" />
											</button>
										</div>
										<nav className="flex flex-col gap-4">
											{sections.map(({ href, label }) => (
												<Link
													key={href}
													className="text-base font-medium py-2 rounded-t-lg border-b border-gray-200 dark:border-gray-900 hover:text-green-600 hover:bg-gray-100 dark:hover:bg-gray-800/30 hover:cursor-pointer dark:hover:text-green-400 transition-colors"
													href={href}
												>
													<p className="ml-3">{label}</p>
												</Link>
											))}
											<Link
												href="/contato"
												className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 dark:bg-green-700 dark:hover:bg-green-600 dark:focus:ring-green-500"
												onClick={() => setIsMenuOpen(false)}
											>
												Contato
											</Link>
										</nav>
									</div>
								</SheetContent>
							</Sheet>
						</div>
					</div>
				</div>
			</header>

            {/* Contact Section */}
            <div className="relative min-h-screen pt-12 sm:pt-[64px] flex flex-col items-center justify-center sm:px-6">
                <ParticleBackground />
                <div className="max-w-3xl w-full px-6 py-6 relative z-10 backdrop-blur-lg rounded-lg sm:shadow-lg sm:shadow-black/20">
                    <h1 className="text-[2rem] text-center sm:text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-6">Entre em contato conosco!</h1>
                    <p className="text-lg text-muted-foreground mb-10">
                        Tem alguma dúvida, sugestão ou quer saber como podemos ajudar com a logística reversa dos seus eletrônicos?
                        Entre em contato com a gente agora mesmo!
                    </p>

                    <div className="flex flex-col justify-center items-center p-8 rounded-2xl shadow-md shadow-black/20 ">
                        <h2 className="text-2xl font-semibold mb-4">Nosso atendimento é rápido e direto!</h2>
                        <p className="text-muted-foreground mb-6">Clique no botão abaixo para iniciar uma conversa via WhatsApp. Será um prazer te atender!</p>
                        <a
                            href="https://wa.me/5524999227558"
                            target="_blank"
                            className="inline-flex items-center px-6 py-3 gap-3 bg-green-600 text-sm sm:text-lg text-white font-semibold rounded-full transition-all shadow-lg shadow-black/20 hover:bg-green-700 hover:scale-105"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
                            Falar no WhatsApp
                        </a>
                    </div>

                    <div className="mt-12 text-center text-sm text-gray-500">
                        Ou, se preferir, envie um e-mail para <span className="font-medium text-green-600 dark:text-green-400">wagner.sds@gmail.com</span>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <SiteFooter />
        </div>
    )
}

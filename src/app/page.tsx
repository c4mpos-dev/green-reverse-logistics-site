"use client"

import { useState } from "react";
import Link from "next/link";

import { Typewriter } from "react-simple-typewriter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { ParticleBackground } from "@/components/particle-background";
import { HowItWorks } from "@/components/how-it-works";
import { AboutUs } from "@/components/about-us";
import { Partners } from "@/components/partners";
import { FaqSection } from "@/components/faq-section";
import { WasteGraph } from "@/components/waste-graph";
import { SiteFooter } from "@/components/site-footer";
import { ModeToggle } from "@/components/mode-toggle";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

import Image from "next/image";

import logoGRL from "@/assets/logo.png";
import logoGRLDark from "@/assets/logo-dark.png";

const sections = [
	{ id: "como-funciona", label: "Como funciona" },
	{ id: "sobre-nos", label: "Sobre nós" },
	{ id: "impacto-ambiental", label: "Impacto Ambiental" },
	{ id: "parceiros", label: "Parceiros" },
	{ id: "faq", label: "FAQ" },
]

export default function Home() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const scrollToSection = (id: string) => {
		const section = document.getElementById(id)
		if (section) {
			const yOffset = -64 // ajuste para compensar a altura da navbar
			const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
			window.scrollTo({ top: y, behavior: "smooth" })
		}
		setIsMenuOpen(false)
	}

	return (
		<div className="relative">
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
							{sections.map(({ id, label }) => (
								<a
									key={id}
									className="text-sm font-medium hover:text-green-600 hover:cursor-pointer dark:hover:text-green-400 transition-colors"
									onClick={(e) => {
										e.preventDefault()
										scrollToSection(id)
									}}
								>
									{label}
								</a>
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
											{sections.map(({ id, label }) => (
												<a
													key={id}
													className="text-base font-medium py-2 rounded-t-lg border-b border-gray-200 dark:border-gray-900 hover:text-green-600 hover:bg-gray-100 dark:hover:bg-gray-800/30 hover:cursor-pointer dark:hover:text-green-400 transition-colors"
													onClick={(e) => {
														e.preventDefault()
														scrollToSection(id)
													}}
												>
													<p className="ml-3">{label}</p>
												</a>
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

			{/* Hero Section */}
			<section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
				<ParticleBackground />
				<div className="container relative z-10 px-6 flex flex-col items-center text-center">
					<Image src={logoGRL} alt="Logo Green Reverse Logistics" className="h-full mb-8 dark:hidden"/>
					<Image src={logoGRLDark} alt="Logo Green Reverse Logistics" className="hidden h-full mb-8 dark:block"/>
					<h2 className="text-[21px] md:text-3xl lg:text-[33px] 2xl:text-4xl mb-6">
						Salvando{" "}
						<span className="text-green-600 font-bold dark:text-green-400">
							<Typewriter
								words={[
									"vidas",
									"o planeta",
									"o meio ambiente",
									"o futuro",
									"a natureza",
									"nossos oceanos",
									"nossas florestas",
									"o amanhã",
									"a biodiversidade",
									"a esperança",
								]}
								loop={0}
								cursor
								cursorStyle="|"
								typeSpeed={80}
								deleteSpeed={50}
								delaySpeed={1000}
							/>
						</span>
					</h2>
					<p className="max-w-[700px] text-lg md:text-xl text-muted-foreground mb-6">
						Retornando valor ao meio ambiente.
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<a
							href="#como-funciona"
							className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-500 dark:bg-green-700 dark:hover:bg-green-600"
							onClick={(e) => {
								e.preventDefault()
								scrollToSection("como-funciona")
							}}
						>
							Saiba mais
						</a>
						<Link
							href="/contato"
							className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
						>
							Entre em contato
						</Link>
					</div>
				</div>
			</section>

			{/* How it Works Section */}
			<section id="como-funciona" className="py-20 bg-muted dark:bg-muted/40">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-green-600 dark:text-green-400 mb-4">
							Como Funciona
						</h2>
						<p className="max-w-[700px] text-muted-foreground">
							Conheça o processo de logística reversa para resíduos eletrônicos
						</p>
					</div>
					<HowItWorks />
				</div>
			</section>

			{/* About Us Section */}
			<section id="sobre-nos" className="py-20">
				<div className="container px-6">
					<div className="flex flex-col items-center text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-green-600 dark:text-green-400 mb-4">
							Sobre Nós
						</h2>
						<p className="max-w-[700px] text-muted-foreground">
							Atuamos em todo o estado do Rio de Janeiro com soluções sustentáveis
						</p>
					</div>
					<AboutUs />
				</div>
			</section>

			{/* Waste Graph Section */}
			<section id="impacto-ambiental" className="py-20 bg-muted dark:bg-muted/40">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-green-600 dark:text-green-400 mb-4">
							Impacto Ambiental
						</h2>
						<p className="max-w-[700px] text-muted-foreground">
							Toneladas de lixo eletrônico acumulado no Brasil por ano (Em milhões)
						</p>
					</div>
					<WasteGraph />
				</div>
			</section>

			{/* Partners Section */}
			<section id="parceiros" className="py-20">
				<div className="container px-6 md:px-8">
					<div className="flex flex-col items-center text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-[#d6ff01] to-[#8fc74a] to-50% bg-clip-text text-transparent">
							Nossos Parceiros
						</h2>
						<p className="max-w-[700px] text-muted-foreground">
							Unimos forças com gigantes da sustentabilidade para transformar o futuro
						</p>
					</div>
					<Partners />
				</div>
			</section>

			{/* FAQ Section */}
			<section id="faq" className="py-20 bg-muted dark:bg-muted/40">
				<div className="container px-5 md:px-6">
					<div className="flex flex-col items-center text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-green-600 dark:text-green-400 mb-4">
							Perguntas Frequentes
						</h2>
						<p className="max-w-[700px] text-muted-foreground">
							Tire suas dúvidas sobre nossos serviços de logística reversa
						</p>
					</div>
					<FaqSection />
				</div>
			</section>

			{/* Footer */}
			<SiteFooter />
		</div>
	)
}

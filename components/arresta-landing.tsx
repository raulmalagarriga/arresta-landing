"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ShieldCheck, Ruler, Cog, Mail } from "lucide-react"

const variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" } }),
}

const glow =
  "before:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_60%)] before:blur-2xl before:content-['']"

const I18N = {
  es: {
    language: "Idioma",
    brand_tag: "LLAVES DE ALTA CALIDAD",
    hero_badge: "Calidad que protege tus instalaciones",
    hero_sub: "llaves de arresto en acero inoxidable",
    hero_p:
      "Fabricadas en acero inoxidable de grado 304, con cartucho de cerámica y procesos de manufactura de alta precisión. Durables, confiables y listas para instalaciones profesionales.",
    cta_view_product: "Ver producto",
    cta_quote: "Cotiza ahora →",
    nav_contact: "Contacto",
    hero_chip_steel: "Acero 304",
    hero_chip_cart: "Cartucho cerámica",
    hero_chip_size: '1/2" x 1/2"',
    section_product: "El producto",
    f_steel_title: "Acero inoxidable 304",
    f_steel_desc:
      "Resistencia superior a la corrosión y larga vida útil, incluso en ambientes húmedos. Acabado cepillado sobrio y elegante.",
    f_size_title: 'Medidas 1/2" x 1/2"',
    f_size_desc: "Compatible con conexiones estándar para instalaciones residenciales y comerciales.",
    f_cart_title: "Cartucho de cerámica",
    f_cart_desc: "Giro suave y sellado preciso. Operación de 1/4 de vuelta para apertura/cierre rápido.",
    qa_title: "Alta tecnología de fabricación",
    qa_desc:
      "Proceso de torneado y pulido CNC, tolerancias de precisión y control de calidad pieza por pieza. Cada unidad es probada para asegurar un flujo estable y cero fugas.",
    badge_pressure: "Presión probada",
    badge_seal: "Sellado 100%",
    badge_flow: "Flujo estable",
    trust_title: "Acero inoxidable que inspira confianza",
    trust_desc:
      "Con Arresta, tus instalaciones quedan protegidas por materiales premium y un diseño pensado para durar. Ideal para baños y cocinas.",
    trust_btn_sales: "Habla con ventas",
    trust_btn_specs: "Ver especificaciones →",
    contact_title: "Contacto de ventas",
    contact_body: "¿Quieres precios por volumen o una cotización rápida? Escríbenos y te respondemos a la brevedad.",
    contact_hint: "También podemos integrar WhatsApp o un formulario si lo prefieres.",
    mailto_subject: "Consulta de llaves Arresta",
    specs_title: "Ficha técnica",
    specs_size: "Medidas:",
    specs_material: "Material:",
    specs_cart: "Cartucho:",
    specs_manu: "Fabricación:",
    manu_value: "Alta tecnología, control de calidad",
    footer_back: "Volver arriba",
    alt_logo: "Logo de Arresta",
    alt_product: "Llave de arresto Arresta en acero inoxidable",
    image_hint: "Sube {src} a la carpeta /public",
  },
  en: {
    language: "Language",
    brand_tag: "HIGH-QUALITY STOP VALVES",
    hero_badge: "Quality that protects your installations",
    hero_sub: "stainless-steel stop valves",
    hero_p:
      "Made from 304 stainless steel, with ceramic cartridge and high-precision manufacturing. Durable, reliable, and ready for professional installations.",
    cta_view_product: "View product",
    cta_quote: "Get a quote →",
    nav_contact: "Contact",
    hero_chip_steel: "304 steel",
    hero_chip_cart: "Ceramic cartridge",
    hero_chip_size: '1/2" x 1/2"',
    section_product: "The product",
    f_steel_title: "304 stainless steel",
    f_steel_desc:
      "Superior corrosion resistance and long service life, even in humid environments. A sober, elegant brushed finish.",
    f_size_title: 'Size 1/2" x 1/2"',
    f_size_desc: "Compatible with standard connections for residential and commercial installs.",
    f_cart_title: "Ceramic cartridge",
    f_cart_desc: "Smooth turn and precise seal. Quarter-turn operation for quick open/close.",
    qa_title: "High‑technology manufacturing",
    qa_desc:
      "CNC turning and polishing, tight tolerances, and piece-by-piece quality control. Each unit is pressure-tested for stable flow and zero leaks.",
    badge_pressure: "Pressure tested",
    badge_seal: "100% sealing",
    badge_flow: "Stable flow",
    trust_title: "Stainless steel you can trust",
    trust_desc:
      "With Arresta, your installations are protected by premium materials and a design built to last. Perfect for kitchens and bathrooms.",
    trust_btn_sales: "Talk to sales",
    trust_btn_specs: "See specifications →",
    contact_title: "Sales contact",
    contact_body: "Want volume pricing or a quick quote? Write to us and we'll reply shortly.",
    contact_hint: "We can also integrate WhatsApp or a contact form if you prefer.",
    mailto_subject: "Arresta stop‑valves inquiry",
    specs_title: "Specs",
    specs_size: "Size:",
    specs_material: "Material:",
    specs_cart: "Cartridge:",
    specs_manu: "Manufacturing:",
    manu_value: "High‑tech, quality control",
    footer_back: "Back to top",
    alt_logo: "Arresta logo",
    alt_product: "Arresta stainless‑steel stop valve",
    image_hint: "Place {src} into the /public folder",
  },
}

const Feature = ({
  icon: Icon,
  title,
  children,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  children: React.ReactNode
  index: number
}) => (
  <motion.div
    className={`relative ${glow} overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm`}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.4 }}
    custom={index}
    variants={variants}
  >
    <div className="flex items-center gap-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 shadow">
        <Icon className="h-5 w-5 text-slate-700" />
      </span>
      <h3 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h3>
    </div>
    <p className="mt-3 text-sm leading-6 text-slate-600">{children}</p>
  </motion.div>
)

const SmartImage = ({
  src,
  alt,
  className,
  note,
}: {
  src: string
  alt: string
  className?: string
  note: string
}) => {
  const [ok, setOk] = useState(true)
  return ok ? (
    <img src={src || "/placeholder.svg"} alt={alt} className={className} onError={() => setOk(false)} />
  ) : (
    <div
      className={`flex items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 text-center text-xs text-slate-400 ${className?.replace("w-auto", "w-full")}`}
    >
      {note.replace("{src}", src)}
    </div>
  )
}

export default function ArrestaLandingLight() {
  const [lang, setLang] = useState<"es" | "en">("es")

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("arresta_lang") : null
    if (saved === "es" || saved === "en") setLang(saved)
    else if (typeof navigator !== "undefined" && navigator.language?.startsWith("en")) setLang("en")
  }, [])

  const t = (k: keyof typeof I18N["en"]) => I18N[lang][k]

  const handleSmooth = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | null,
    id: string,
  ) => {
    if (e) e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const header = document.querySelector("header")
    const offset = (header?.offsetHeight || 64) + 16
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top: y, behavior: "smooth" })
    try {
      history.replaceState(null, "", `#${id}`)
    } catch {}
  }

  const onLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value as "es" | "en"
    setLang(v)
    try {
      localStorage.setItem("arresta_lang", v)
    } catch {}
  }

  return (
    <main className="min-h-screen scroll-smooth bg-[radial-gradient(1200px_600px_at_0%_0%,rgba(59,130,246,0.10),transparent_60%),radial-gradient(1200px_600px_at_100%_20%,rgba(59,130,246,0.06),transparent_60%),linear-gradient(to_bottom,#ffffff,#f8fafc)] text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-3">
          <a href="#inicio" onClick={(e) => handleSmooth(e, "inicio")} className="group flex items-center gap-3 h-14">
            <SmartImage src="/ArrestaLogo1.png" alt={t("alt_logo")} note={t("image_hint")} className="h-auto w-32" />
            <span className="text-sm tracking-wider text-slate-500">{t("brand_tag")}</span>
          </a>
          <div className="flex items-center gap-3">
            <label className="sr-only" htmlFor="langSelect">
              {t("language")}
            </label>
            <select
              id="langSelect"
              value={lang}
              onChange={onLangChange}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none"
              aria-label={t("language")}
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
            <a
              href="#contacto"
              onClick={(e) => handleSmooth(e, "contacto")}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-50"
            >
              {t("nav_contact")}
            </a>
          </div>
        </div>
      </header>

      <section id="inicio" className="relative scroll-mt-24 md:scroll-mt-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={variants}>
            <div className="relative mb-6 inline-flex rounded-2xl border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600 shadow">
              {t("hero_badge")}
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              <span className="relative inline-block">
                <span className="relative z-[1]">Arresta</span>
                <span className="absolute -inset-1 -z-10 rounded-3xl bg-[radial-gradient(120px_120px_at_10%_50%,rgba(59,130,246,0.35),transparent_60%)] blur-xl" />
              </span>
              <span className="block text-slate-600">{t("hero_sub")}</span>
            </h1>
            <p className="mt-5 max-w-xl text-slate-600">{t("hero_p")}</p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#producto"
                onClick={(e) => handleSmooth(e, "producto")}
                className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                {t("cta_view_product")}
              </a>
              <a
                href="#contacto"
                onClick={(e) => handleSmooth(e, "contacto")}
                className="text-sm font-medium text-blue-700 hover:text-blue-800"
              >
                {t("cta_quote")}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-slate-700" /> {t("hero_chip_steel")}
              </div>
              <div className="flex items-center gap-2">
                <Cog className="h-4 w-4 text-slate-700" /> {t("hero_chip_cart")}
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="h-4 w-4 text-slate-700" /> {t("hero_chip_size")}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className={`relative ${glow} rounded-3xl border border-slate-200 bg-white p-4 shadow-sm`}>
              <SmartImage
                src="/llave.jpeg"
                alt={t("alt_product")}
                note={t("image_hint")}
                className="mx-auto h-[420px] w-auto select-none object-contain"
              />
            </div>
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[36px] bg-[radial-gradient(240px_120px_at_50%_20%,rgba(59,130,246,0.22),transparent_70%)] blur-3xl" />
          </motion.div>
        </div>
      </section>

      <section id="producto" className="border-y border-slate-200 bg-white scroll-mt-24 md:scroll-mt-28">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <motion.h2
            className="text-2xl font-semibold tracking-tight md:text-3xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={variants}
          >
            {t("section_product")}
          </motion.h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Feature index={0} icon={ShieldCheck} title={t("f_steel_title")}>
              {t("f_steel_desc")}
            </Feature>
            <Feature index={1} icon={Ruler} title={t("f_size_title")}>
              {t("f_size_desc")}
            </Feature>
            <Feature index={2} icon={Cog} title={t("f_cart_title")}>
              {t("f_cart_desc")}
            </Feature>
          </div>

          <motion.div
            className={`mt-6 ${glow} rounded-2xl border border-slate-200 bg-white p-6 shadow-sm`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={3}
            variants={variants}
          >
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{t("qa_title")}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{t("qa_desc")}</p>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-600">
                <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">{t("badge_pressure")}</div>
                <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">{t("badge_seal")}</div>
                <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">{t("badge_flow")}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <motion.div
            className={`relative ${glow} overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold tracking-tight">{t("trust_title")}</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">{t("trust_desc")}</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href="#contacto"
                onClick={(e) => handleSmooth(e, "contacto")}
                className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                {t("trust_btn_sales")}
              </a>
              <a
                href="#producto"
                onClick={(e) => handleSmooth(e, "producto")}
                className="text-sm font-medium text-blue-700 hover:text-blue-800"
              >
                {t("trust_btn_specs")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contacto" className="border-t border-slate-200 bg-white scroll-mt-24 md:scroll-mt-28">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <motion.h2
            className="text-2xl font-semibold tracking-tight md:text-3xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={variants}
          >
            {t("contact_title")}
          </motion.h2>

          <motion.div
            className="mt-8 grid grid-cols-1 items-start gap-8 md:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={variants}
          >
            <div className={`col-span-2 ${glow} rounded-2xl border border-slate-200 bg-white p-6 shadow-sm`}>
              <p className="text-sm text-slate-600">{t("contact_body")}</p>
              <a
                href={`mailto:ventas@arrestainc.com?subject=${encodeURIComponent(t("mailto_subject"))}`}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                <Mail className="h-4 w-4" /> ventas@arrestainc.com
              </a>
              <p className="mt-3 text-xs text-slate-500">{t("contact_hint")}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold">{t("specs_title")}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <span className="text-slate-500">{t("specs_size")}</span> 1/2" x 1/2"
                </li>
                <li>
                  <span className="text-slate-500">{t("specs_material")}</span> Acero inoxidable 304
                </li>
                <li>
                  <span className="text-slate-500">{t("specs_cart")}</span> Cerámica (1/4 de vuelta)
                </li>
                <li>
                  <span className="text-slate-500">{t("specs_manu")}</span> {t("manu_value")}
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <SmartImage src="/ArrestaLogo1.png" alt={t("alt_logo")} note={t("image_hint")} className="h-24 w-auto" />
            <span>© {new Date().getFullYear()} Arresta Inc.</span>
          </div>
          <a href="#inicio" onClick={(e) => handleSmooth(e, "inicio")} className="hover:text-slate-700">
            {t("footer_back")}
          </a>
        </div>
      </footer>
    </main>
  )
}

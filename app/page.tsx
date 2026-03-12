import Link from "next/link";
import { 
  TextCursorInput, 
  Navigation, 
  Accessibility, 
  Smartphone, 
  AlertCircle, 
  LayoutGrid, 
  Type, 
  Ghost,
  ArrowRight,
  Moon
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const CATEGORIES = [
  {
    title: "Formularios",
    description: "Errores en validación, etiquetas, prevención de errores y carga cognitiva.",
    icon: TextCursorInput,
    slug: "formularios",
  },
  {
    title: "Navegación",
    description: "Estructuras confusas, migas de pan rotas y jerarquías incomprensibles.",
    icon: Navigation,
    slug: "navegacion",
  },
  {
    title: "Accesibilidad",
    description: "Contrastes pobres, falta de ARIA y navegación por teclado inaccesible.",
    icon: Accessibility,
    slug: "accesibilidad",
  },
  {
    title: "Responsive y Mobile",
    description: "Áreas de toque deficientes, desbordamiento y componentes no adaptables.",
    icon: Smartphone,
    slug: "responsive-mobile",
  },
  {
    title: "Feedback y Estados",
    description: "Asincronía sin indicadores, éxito silencioso y mensajes de error vagos.",
    icon: AlertCircle,
    slug: "feedback-estados",
  },
  {
    title: "Layout y Espaciado",
    description: "Jerarquía visual ausente, alineaciones caóticas y densidades asfixiantes.",
    icon: LayoutGrid,
    slug: "layout-espaciado",
  },
  {
    title: "Tipografía",
    description: "Fuentes ilegibles, alturas de línea incorrectas y contraste deficiente.",
    icon: Type,
    slug: "tipografia",
  },
  {
    title: "Dark Patterns",
    description: "Prácticas de diseño engañosas para manipular el comportamiento del usuario.",
    icon: Ghost,
    slug: "dark-patterns",
  },
];

const RECENT_ANTIPATTERNS = [
  {
    title: "Cancelación de Suscripción Laberíntica",
    category: "Dark Patterns",
    impact: "Alto",
    excerpt: "Forzar al usuario a navegar por múltiples pantallas y confirmaciones con lenguaje ambiguo para cancelar un servicio activo.",
    slug: "cancelacion-laberintica"
  },
  {
    title: "Contraste Insuficiente en Textos Secundarios",
    category: "Accesibilidad",
    impact: "Alto",
    excerpt: "Utilizar gris claro sobre fondo gris sutil (#9CA3AF sobre #F3F4F6) haciendo el bloque de texto vital completamente ilegible.",
    slug: "contraste-insuficiente"
  },
  {
    title: "Scroll Infinito Trampa",
    category: "Navegación",
    impact: "Medio",
    excerpt: "Implementar scroll infinito automático que empuja el footer original inalcanzable, bloqueando el acceso a enlaces legales.",
    slug: "scroll-infinito-trampa"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary/20">
      {/* Botón sutil de tema (Mock) */}
      <div className="absolute top-6 right-6">
        <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
          <Moon className="size-5" />
          <span className="sr-only">Cambiar tema</span>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center max-w-5xl mx-auto pt-16">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
          Bad UI
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mt-6">
          Biblioteca profesional de antipatrones de interfaz. Consulta malas prácticas para evitar errores en usabilidad, accesibilidad y rendimiento.
        </p>
        <p className="text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
          Ejemplos reales · Impacto técnico cuantificado · Fixes con código listo para usar
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto">
          <Button asChild size="lg" className="h-12 px-8 text-base shadow-sm">
            <Link href="/categories">Explorar antipatrones</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base shadow-sm transition-colors hover:bg-muted/50">
            <Link href="/submit">Contribuir un ejemplo</Link>
          </Button>
        </div>
      </section>

      {/* Categorías Section */}
      <section className="px-6 py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center tracking-tight text-foreground">Categorías</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`} className="group outline-none block h-full">
                <Card className="h-full transition-all duration-200 border-border bg-card shadow-sm hover:border-primary/50 hover:shadow-md hover:scale-[1.01] group-focus-visible:ring-2 group-focus-visible:ring-primary">
                  <CardHeader>
                    <category.icon 
                      className="size-10 text-primary/80 mb-4 transition-transform duration-300 group-hover:-translate-y-1" 
                      strokeWidth={1.5} 
                    />
                    <CardTitle className="text-xl font-medium tracking-tight">{category.title}</CardTitle>
                    <CardDescription className="text-sm mt-2 leading-relaxed text-muted-foreground group-hover:text-muted-foreground/90 transition-colors">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recientes Section */}
      <section className="px-6 py-24 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-semibold mb-12 tracking-tight text-foreground">Últimos antipatrones añadidos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RECENT_ANTIPATTERNS.map((item) => (
            <Link key={item.slug} href={`/antipatterns/${item.slug}`} className="group outline-none block h-full">
              <Card className="h-full transition-all duration-200 border-border bg-card shadow-sm hover:border-primary/50 flex flex-col group-focus-visible:ring-2 group-focus-visible:ring-primary">
                <CardHeader className="flex-grow">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <Badge variant="secondary" className="font-medium bg-secondary/60 hover:bg-secondary/80 transition-colors pointer-events-none">
                      {item.category}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className="font-medium text-destructive border-destructive/30 bg-destructive/10 pointer-events-none"
                    >
                      Impacto: {item.impact}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm mt-3 line-clamp-3 leading-relaxed text-muted-foreground">
                    {item.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 relative mt-auto pb-6">
                  <div className="text-sm text-foreground/80 flex items-center font-medium group-hover:text-primary transition-colors">
                    Ver detalle
                    <ArrowRight className="ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Button asChild variant="ghost" className="transition-colors hover:bg-muted/50 group">
            <Link href="/antipatterns" className="flex items-center">
              Ver todos los antipatrones
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer minimalista */}
      <footer className="mt-auto px-6 pb-8 pt-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p className="font-medium text-balance text-center md:text-left">
              © 2026 badui.dev · Referencia profesional de antipatrones UI
            </p>
            <div className="flex items-center gap-6">
              <Link href="https://github.com" className="hover:text-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm">
                GitHub
              </Link>
              <Link href="/submit" className="hover:text-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm">
                Contribuir
              </Link>
              <Link href="/about" className="hover:text-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm">
                Política y Acuerdos
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

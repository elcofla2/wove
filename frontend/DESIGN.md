# Wovio.io - System & Design Rules (AI Context)

## 1. Visión del Producto
Wovio es un SaaS B2B "AI Content Autopilot" para el mercado anglosajón. Su promesa es extrema facilidad de uso (Regla de los "3 clics") para generar contenido optimizado para SEO, GEO y AEO. 

## 2. Stack Tecnológico Estricto
- **Frontend:** Next.js 14+ (App Router), React, TypeScript.
- **Estilos:** Tailwind CSS.
- **Componentes:** Shadcn/UI.
- **Iconos:** Lucide React.
- **Backend/Auth:** Supabase (PostgreSQL).
- **Gestión de Estado:** React Query & Zustand.

## 3. Reglas de UI/UX ("Solar Tech / Luminous B2B")
La interfaz debe transmitir "Silicon Valley", innovación fresca y accesibilidad. El software utilizará una estética luminosa ("Light Mode" optimizado) que evite la fatiga visual, rompiendo con el clásico "Dark Mode" de las herramientas de IA.

### 3.1. Tipografía (Typography)
- **Títulos y Encabezados (Display):** `Plus Jakarta Sans` o `Satoshi`. Debe usarse para transmitir estatus y precisión geométrica en la Landing Page y títulos del Dashboard.
- **Cuerpo de Texto y UI:** `Inter`. Uso estricto para máxima legibilidad en párrafos, lectura de artículos generados y menús de navegación.

### 3.2. Design Tokens (Paleta Hexadecimal Estricta)
La IA debe mapear estos colores directamente en la configuración de Tailwind (`tailwind.config.ts`).

- **Backgrounds (Lienzo Solar):**
  - Base/Fondo Principal: `#FAFAFA` (Blanco Nieve - Espacioso y limpio).
  - Superficies/Tarjetas: `#FFFFFF` (Blanco Puro - Para elevar los bloques de contenido con sombras muy sutiles).
- **Text (Legibilidad Premium):**
  - Texto Principal: `#18181B` (Carbón Profundo - Nunca usar negro puro #000000).
  - Texto Secundario/Subtítulos: `#71717A` (Gris Pizarra).
- **Brand Accents (Pasteles Vibrantes - Innovación):**
  - AI Magic (Magia de IA / AEO): `#B28DFF` (Lavanda Cibernética - Para denotar cuando la IA está trabajando o destacando insights).
  - Call To Action (Botones Principales): `#FF8FA3` (Coral Atardecer - Altísima conversión para el botón "Deploy" o "Upgrade").
  - Success (Confirmaciones / SEO Score Alto): `#80ED99` (Menta Pistacho).
- **Estructura visual:**
  - Bordes de tarjetas: `#E4E4E7` (Zinc 200 - Líneas extremadamente finas).
  - Sombras (Elevación): Usar sombras grandes pero súper difuminadas y translúcidas (`shadow-lg shadow-zinc-200/50`).

## 4. Reglas de Código para la IA
- **Modularidad:** Mantén los componentes de servidor (Server Components) y de cliente (Client Components - `"use client"`) estrictamente separados. Prioriza Server Components siempre que sea posible.
- **Clean Code:** Escribe código DRY (Don't Repeat Yourself). Las funciones deben tener una sola responsabilidad.
- **Fricción Cero:** Diseña cada formulario y flujo pensando en que el usuario B2B debe hacer la menor cantidad de clics posibles.
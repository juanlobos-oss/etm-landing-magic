

## Plan de cambios

### 1. Eliminar grayscale de las fotos de categorías
En `CategoriesSection.tsx`, quitar `grayscale group-hover:grayscale-0` de las imágenes para que se muestren siempre a color.

### 2. Reemplazar fotos en ExperienceSection
Copiar las 4 fotos subidas por el usuario al proyecto y usarlas en `ExperienceSection.tsx` reemplazando las URLs externas actuales. Reorganizar el grid para mostrar las 4 fotos.

### 3. Hero: usar una de las fotos como fondo
Reemplazar la imagen de fondo del hero (`etmday-hero.jpg`) con una de las fotos subidas (la panorámica de stands `ETM_Dia2_MM_MG_5356_1.jpg` es la más adecuada como fondo).

### 4. Botón "Postular" apunta a sección proceso
Cambiar todos los `href="#postular"` de los botones "Postular" / "Postular ahora" para que apunten a `#proceso`. Agregar `id="proceso"` a la sección `ProcessSection`. Mantener el `id="postular"` en CTASection para otros usos.

### 5. ProcessSection: agregar botones y punto adicional
- Cambiar el header de la sección para incluir a la derecha dos botones: "Revisar las bases" y "Rellenar formulario" (con layout flex entre título y botones).
- En la sección "Muy importante", agregar un tercer punto: "La garantía ($200.000) será devuelta dentro de 10 días hábiles después del evento."

### Archivos a modificar
- `src/components/CategoriesSection.tsx` -- quitar grayscale
- `src/components/ExperienceSection.tsx` -- reemplazar fotos con las subidas
- `src/components/HeroSection.tsx` -- cambiar href de postular a `#proceso`, usar nueva foto de fondo
- `src/components/ProcessSection.tsx` -- agregar `id="proceso"`, botones arriba a la derecha, nuevo punto en "Muy importante"
- `src/components/CTASection.tsx` -- mantener `id="postular"`
- `src/components/Navbar.tsx` -- cambiar href de postular a `#proceso`
- `src/components/EnergySection.tsx` -- si tiene botón postular, cambiar href
- Copiar 4 imágenes al proyecto (`src/assets/`)


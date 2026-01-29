# Wiki de RabaWeb

Web oficial de documentación para **RabaCore** y **RabaPVP**.
Diseñada con un estilo "Premium" inspirado en servidores de Minecraft, utilizando **Next.js**.

🔗 **Sitio Web:** [wiki.rabanitos.com](https://wiki.rabanitos.com)

## Tecnologías

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** CSS Modules + Variables CSS (Tema Oscuro Personalizado)
- **Hosting:** GitHub Pages (Despliegue Automático)

## Instalación y Uso Local

1.  **Instalar dependencias:**

    ```bash
    npm install
    ```

2.  **Iniciar servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

3.  **Construir para producción (Prueba local):**
    ```bash
    npm run build
    ```
    Esto generará una carpeta `out/` con el sitio estático.

## Despliegue Automático

Este proyecto usa **GitHub Actions** para publicar automáticamente en GitHub Pages.

1.  Hacer cambios en el código.
2.  Subir cambios a la rama `master` (o `main`):
    ```bash
    git add .
    git commit -m "Descripción de cambios"
    git push
    ```
3.  GitHub detectará el push, construirá el sitio y lo publicará en `wiki.rabanitos.com` automáticamente en unos minutos.

## Dominio Personalizado

El dominio `wiki.rabanitos.com` está configurado mediante:

- Un archivo `public/CNAME` en el repositorio.
- Registros DNS en Cloudflare (CNAME apuntando a `thelittlebunny.github.io`).

> **Nota:** Si el diseño falla, asegúrate de que el archivo `public/.nojekyll` existe (evita que GitHub ignore los estilos de Next.js).

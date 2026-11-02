# Weather App

App del clima que detecta tu ubicación a partir de la IP y muestra el tiempo actual con un tema visual y animaciones que cambian según las condiciones.

## Cómo funciona

1. Toma la IP del visitante y la valida.
2. Obtiene ciudad y coordenadas con [ipinfo.io](https://ipinfo.io), cacheando el resultado en Upstash Redis.
3. Consulta el clima en [Open-Meteo](https://open-meteo.com) y traduce el código WMO a una categoría simple (`src/helpers/wmoToSimpleCode.ts`).
4. Aplica el tema visual correspondiente (`src/lib/weatherThemes.ts`).

## Stack

- [Astro](https://astro.build) 5 con renderizado en servidor
- TypeScript y Zod para validar las respuestas externas
- Open-Meteo (`openmeteo`) para el clima
- Upstash Redis para el caché de IP
- Nanostores
- Despliegue en Vercel

## Estructura

```
src/
  lib/        ip.ts, weather.ts, cache.ts, weatherThemes.ts
  helpers/    Conversión de códigos WMO
  errors/     Errores propios (IP inválida)
  components/ WeatherCard
  pages/      index.astro
```

## Puesta en marcha

```bash
npm install
```

Variables de entorno en `.env`:

| Variable | Descripción |
|---|---|
| `IP_API_KEY` | Token de ipinfo.io |
| `UPSTASH_REDIS_REST_URL` | URL de Upstash Redis |
| `UPSTASH_REDIS_REST_TOKEN` | Token de Upstash Redis |

```bash
npm run dev       # servidor de desarrollo
npm run build     # build de producción
```

## Autor

Juan Beresiarte — [@beresiartejuan](https://github.com/beresiartejuan)

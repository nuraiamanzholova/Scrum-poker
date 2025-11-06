# --- 1. Build Stage ---
FROM node:20.19-alpine AS builder

WORKDIR /app

# Package-Dateien kopieren und Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# Restliche Dateien kopieren
COPY . .

# Vite Build ausführen
RUN npm run build

# --- 2. Production Stage (Nginx) ---
FROM nginx:stable-alpine

# Vite-Build-Ergebnis vom vorherigen Stage kopieren
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: eigene Nginx-Konfiguration (wenn du Routing brauchst)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

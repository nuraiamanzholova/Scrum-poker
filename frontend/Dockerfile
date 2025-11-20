# ==========================
# --- DEV Stage (Hot Reload)
# ==========================

FROM node:20-alpine AS builder
WORKDIR /app
# Package-Dateien kopieren und Abhängigkeiten installieren
COPY . .
RUN npm ci
# Restliche Dateien kopieren
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]




# ==========================
# --- Prod Stage (Nginx)
# ==========================

FROM nginx:stable-alpine
# Vite-Build-Ergebnis vom vorherigen Stage kopieren
COPY --from=builder /app/dist /usr/share/nginx/html
# Optional: eigene Nginx-Konfiguration (wenn du Routing brauchst)
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
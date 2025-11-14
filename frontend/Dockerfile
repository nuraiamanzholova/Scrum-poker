# --- 1. Build Stage ---
FROM node:20-alpine AS builder

WORKDIR /app

# Package-Dateien kopieren und Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# Restliche Dateien kopieren
COPY . .

# Vite Build ausführen
RUN npm run build

# Vite Dev Server starten, auf 0.0.0.0, damit es von außen erreichbar ist
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
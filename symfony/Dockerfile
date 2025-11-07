FROM php:8.2-fpm-alpine

# Systemabhängigkeiten installieren
RUN apk add --no-cache \
    git \
    unzip \
    curl \
    bash \
    zip \
    libzip-dev \
    oniguruma-dev \
    icu-dev \
    autoconf \
    gcc \
    g++ \
    make \
    openssl

# PHP-Erweiterungen
RUN docker-php-ext-install pdo pdo_mysql mbstring intl zip opcache

# Composer installieren
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Symfony CLI installieren
RUN curl -sS https://get.symfony.com/cli/installer | bash \
    && mv /root/.symfony*/bin/symfony /usr/local/bin/symfony

WORKDIR /var/www/html

EXPOSE 9000

CMD ["php-fpm"]

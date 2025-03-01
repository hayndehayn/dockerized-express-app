# Використовуємо офіційний Node.js LTS образ
FROM node:lts

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо package.json та package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо решту файлів проекту
COPY . .

# Відкриваємо порт 3000
EXPOSE 3000

# Запускаємо додаток
CMD ["npm", "start"]
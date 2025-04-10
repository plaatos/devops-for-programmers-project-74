# Запуск приложения в режиме разработки
dev:
	docker-compose up

# Запуск тестов через Docker Compose
test:
	docker-compose -f docker-compose.yml up --abort-on-container-exit --exit-code-from app

# Удаление контейнеров и очистка
clean:
	docker-compose down
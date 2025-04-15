# Проверка наличия .env и загрузка переменных из .env.example, если .env отсутствует
load-env:
	@if [ ! -f .env ]; then \
		echo ".env not found, loading variables from .env.example..."; \
		export $$(cat .env.example | xargs); \
	else \
		echo ".env found, loading variables from .env..."; \
	fi

# Запуск приложения в режиме разработки
dev: load-env
	make compose-up

# Удаление контейнеров и очистка
clean:
	make compose-down

# Определение используемой версии Docker Compose
DOCKER_COMPOSE ?= $(shell command -v docker-compose 2>/dev/null || echo "docker compose")

# Команды для работы с docker compose
compose-up:
	$(DOCKER_COMPOSE) up -d

compose-down:
	$(DOCKER_COMPOSE) down

compose-stop:
	$(DOCKER_COMPOSE) stop

# Запуск тестов через Docker Compose
test: load-env
	make compose-down # Останавливаем предыдущие контейнеры
	make compose-up -d # Запускаем контейнеры в фоновом режиме
	$(DOCKER_COMPOSE) run --rm app npm run migrate # Выполняем миграции
	make compose-test # Запускаем тесты

compose-test:
	$(DOCKER_COMPOSE) -f docker-compose.yml run --rm app npm test -- --dialect=postgres

# CI команда для запуска тестов
ci: load-env
	make compose-test
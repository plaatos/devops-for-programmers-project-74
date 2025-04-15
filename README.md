# DevOps for Programmers Project 74

## Описание проекта

Этот проект представляет собой пример приложения, разработанного с использованием современных практик DevOps. Он включает в себя следующие компоненты:

- **Node.js** в качестве основного языка программирования.
- **Docker** для контейнеризации приложения.
- **PostgreSQL** как базу данных.
- **Caddy** в качестве обратного прокси-сервера.
- **GitHub Actions** для автоматизации тестирования и CI/CD.

## Структура проекта

1. **Контейнеризация**:
   - Используется `docker-compose.yml` для описания сервисов (приложение, база данных, Caddy).
   - В `docker-compose.override.yml` добавлены настройки для локальной разработки.

2. **Тестирование**:
   - Тесты запускаются через `Makefile` с использованием команды `make test`.
   - В GitHub Actions настроены два workflow: `hexlet-check.yml` и `push.yml`.

3. **Конфигурация**:
   - Переменные окружения хранятся в файле `.env`.
   - Файл `.env.example` содержит пример конфигурации для удобства настройки.

4. **CI/CD**:
   - Автоматическая сборка Docker-образа и публикация его на Docker Hub.
   - Запуск тестов в изолированном окружении.

## Запуск проекта

### Предварительные требования

1. Установите [Docker](https://www.docker.com/) и [Docker Compose](https://docs.docker.com/compose/).
2. Создайте файл `.env` на основе `.env.example` и настройте переменные окружения.

```bash
cp .env.example .env
```

### Локальный запуск

1. Соберите и запустите контейнеры:

```bash
make compose-up
```

2. Приложение будет доступно по адресу `http://localhost`.

3. Для остановки контейнеров выполните:

```bash
make compose-down
```

### Запуск тестов

Для запуска тестов выполните:

```bash
make test
```

## CI/CD Pipeline

Проект использует GitHub Actions для автоматизации процессов:

1. **Hexlet Check**:
   - Workflow: [hexlet-check.yml](https://github.com/plaatos/devops-for-programmers-project-74/actions/workflows/hexlet-check.yml)
   - Проверяет корректность проекта с использованием Hexlet.

2. **CI/CD Pipeline**:
   - Workflow: [push.yml](https://github.com/plaatos/devops-for-programmers-project-74/actions/workflows/push.yml)
   - Выполняет тестирование, сборку Docker-образа и публикацию на Docker Hub.

[![Actions Status](https://github.com/plaatos/devops-for-programmers-project-74/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/plaatos/devops-for-programmers-project-74/actions)

[![CI/CD Pipeline](https://github.com/plaatos/devops-for-programmers-project-74/actions/workflows/push.yml/badge.svg)](https://github.com/plaatos/devops-for-programmers-project-74/actions/workflows/push.yml)

---

### Примечания

1. Убедитесь, что вы правильно настроили секреты в репозитории GitHub (`DOCKER_HUB_USERNAME`, `DOCKER_HUB_TOKEN`, `HEXLET_ID`) для корректной работы CI/CD.
2. Если вы хотите изменить порты или другие параметры, отредактируйте файлы `docker-compose.yml` и `docker-compose.override.yml`.

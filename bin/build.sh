#!/bin/sh
(cd app && nvm use 20 && npm ci && npx tailwindcss -i ./app.css -o ./output.css && npm run build)
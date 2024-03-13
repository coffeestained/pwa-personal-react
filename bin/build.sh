#!/bin/sh
(cd app && nvm use 20 && npm ci && npm run build)
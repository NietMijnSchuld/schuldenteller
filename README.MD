# Schuldenteller.nl
Source code of [schuldenteller.nl](https://schuldenteller.nl).

# NOTICE
This project is still a work in progress.


## Local development

After cloning:

```bash
yarn install

# Build tailwind locally
yarn tailwind

# Compile typescript
yarn tsc --watch
```

## Build for production

```bash
yarn install

# Build tailwind and run PurgeCSS
NODE_ENV=production yarn tailwind

# Compile typescript
yarn tsc
```
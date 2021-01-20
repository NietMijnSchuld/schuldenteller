# Schuldenteller.nl

Source code of [schuldenteller.nl](https://schuldenteller.nl).

> ⚠️ This project is still a work in progress.


## Deploying

Make sure you have at least an [LTS version of NodeJS](https://nodejs.org/) installed.

```bash
git clone git@github.com:NietMijnSchuld/schuldenteller.git
cd schuldenteller
yarn install
yarn prod
```

You now have an optimised build of the website suitable for a production environment.
You may serve the `/public` directory as a static site.

## Local development

After cloning:

```bash
yarn install

# Builds dev-build of the CSS, compiles TypeScript and watches .ts files.
# Note: You need your own webserver to serve the /public directory.
yarn dev
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

### Contributors

<a href="https://github.com/NietMijnSchuld/schuldenteller/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=NietMijnSchuld/schuldenteller" />
</a>

## License
[MIT](https://choosealicense.com/licenses/mit/)

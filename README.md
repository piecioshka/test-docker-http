# test-docker-http

[![dependencies](https://david-dm.org/piecioshka/test-docker-http.svg)](https://github.com/piecioshka/test-docker-http)

:ledger: Testing Docker with server HTTP (share port)

## Features

* :white_check_mark: Run HTTP server in Docker

## Step by step 👣

* Create `Dockerfile`
* Create `src/` with definition of HTTP server
* Define port number in `package.json` -> `config`

## Usage

```javascript
docker build -t piecioshka/demo:2 .
docker run --rm piecioshka/demo:2
docker run --rm -p 8000:3000 piecioshka/demo:2
docker run --rm -p 8000:3000 -v ~/projects/test-docker-http/:/home/node/app/ piecioshka/demo:2
```

## Related

* [test-docker](https://github.com/piecioshka/test-docker) - hello world app in Node.js with Docker
* [test-docker-express-mongo](https://github.com/piecioshka/test-docker-express-mongo) - Two apps: Express.js and MongoDB with Docker

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2019

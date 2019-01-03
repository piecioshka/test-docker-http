# test-docker-http

[![dependencies](https://david-dm.org/piecioshka/test-docker-http.svg)](https://github.com/piecioshka/test-docker-http)

:ledger: Testing Docker with server HTTP (share port)

## Features

* :white_check_mark: Create `Dockerfile`
* :white_check_mark: Create `src/` with definition of HTTP server
* :white_check_mark: Define port number in `package.json` -> `config`

## Usage

```javascript
docker build -t demo/2 .
docker run demo/2
docker run -p 8000:3000 demo/2
docker run -p 8000:3000 -v ~/projects/test-docker-http/:/home/node/app/ demo/2
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2019

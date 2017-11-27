# contact-book

> Contacts book app.

## Development

App consists of 3 components:
  - Web app (`contact-book/app`)
  - API server (`contact-book/server`)
  - MongoDB

## Setup

```
$ git clone https://github.com/frenchbread/contact-book
```

### API Server

1. Navigate to server dir

  ```bash
  $ cd contact-book/server
  ```

2. Update `config.js` file with correct MongoDB host

3. Install dependencies

  ```bash
  $ yarn install
  ```

4. Start the server

  ```bash
  $ yarn run start
  ```

### Web app

1. Navigate to app dir

  ```bash
  $ cd contact-book/app
  ```

2. Install dependencies

  ```bash
  $ yarn install
  ```

3. Start dev server with hot-reload

  ```bash
  $ yarn run dev
  ```

4. Build the app

  ```bash
  $ yarn run build
  ```

## LICENSE

[MIT](https://github.com/frenchbread/contact-book/blob/master/LICENSE)

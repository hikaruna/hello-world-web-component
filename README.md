# hello-world-web-component
単純なwebcomponentのサンプルです。

## Usage

### From Web

```html
<hello-world></hello-world>
<script type="module">
  import HelloWorld from 'https://unpkg.com/@hikaruna/hello-world-web-component/hello-world.mjs'
  customElements.define('hello-world', HelloWorld);
</script>
```

詳しくは example.html を参照

### From npm

```console
$ npm i @hikaruna/hello-world-web-component
```

```javascript
import HelloWorld from '@hikaruna/hello-world-web-component';

// use HelloWorld
```

## Development

```console
$ docker-compose up
$ open http://localhost:3000/example.html
```

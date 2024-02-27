# CloudFlare workers with Turso and Rust


## Setup with create cloudflare

```sh
$ npm create cloudflare@2 --template und3fined/cloudflare-worker-turso-rs
# or
$ yarn create cloudflare@2 --template und3fined/cloudflare-worker-turso-rs
# or
$ pnpm create cloudflare@2 --template und3fined/cloudflare-worker-turso-rs
```

## Setup (Deprecated). Never work with wrangler@4 and above

To create a `my-project` directory using this template, run:

```sh
$ npx wrangler generate my-project worker-turso-rs
# or
$ yarn wrangler generate my-project worker-turso-rs
# or
$ pnpm wrangler generate my-project worker-turso-rs
```

Why is this deprecated? Because the `wrangler generate` command is no longer supported and will be removed in wrangler@4 version.
[Detail](https://developers.cloudflare.com/workers/wrangler/deprecations/#generate)

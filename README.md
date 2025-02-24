# open-next cloudflare shared global issue reproduction

This repository presents the reproduction of an issue/inconsistency with the current `@opennextjs/cloudflare` package, which consists
in the fact that, differently from standard Next.js self hosted applications, applications built using the open-next 
Cloudflare adapter share the same global scope

## Reproduction steps

- Install the dependencies: `npm i`

- Start a self hosted Next.js app: `npm run build & npm run start`

- Navigate to the app's home page and see the text:
    ```
    the shared value is: undefined
    ```
- Now start the open-next/cloudflare preview: `npm run preview`

- Navigate to the app's home page and see the text:
    ```
    the shared value is: this is a shared value set in the edge runtime! (from a middleware)
    ```

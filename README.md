Vi skal prøve å lage en todo-app i Svelte!

# Oppsett
> Husk at du må ha installert [Node.js](https://nodejs.org) installert for å kjøre `npm`.

Last ned repoet til maskinen din.

Installer dependencies med:

```bash
npm install
```

Deretter starter du en dev-server med:

```bash
npm run dev
```

Da får du tilgang til appen på [localhost:5000](http://localhost:5000). Appen blir automatisk bygd på nytt hver gang du gjør endringer i filene i `src/`. Prøv å endre tittelen i main.js eller noe innhold i App.svelte, lagre filen, og se at siden automatisk blir lastet på nytt med endringene dine.

All kode du skal jobbe med ligger i `src/`.

> By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

Til å begynne med vil du kanskje se en *warning* om en ubrukt CSS-selector i `App.svelte`. Dette fikser vi i oppgave 3.

# Oppgaver
[Se oppgaver her](oppgaver/README.md).

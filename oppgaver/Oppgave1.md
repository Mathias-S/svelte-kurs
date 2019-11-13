# Oppgave 1: Logiske uttrykk i HTML
I `App.svelte` har vi variabelen `todos` som inneholder noen objekter vi ønsker å vise.

Bytt ut følgende to elementer:
``` html
<label class="todo">
	<input type="checkbox" />
	<span>Todo text</span>
</label>
```

Til å iterere over `todos` og skrive ut ett slikt element for hvert objekt i `todos`. Sørg for at checkboxen er huket av når `done` er `true`.

> *Hint: Bruk `{#each...}` for å iterere over arrays [(docs)](https://svelte.dev/docs#each)*

> *Hint: En checkbox kan settes `checked` gjennom å bruke `<input type="checkbox" checked={booleanValue}>`*

* [Gå til oppgave 2](Oppgave2.md)
* [Oversikt over oppgaver](README.md)

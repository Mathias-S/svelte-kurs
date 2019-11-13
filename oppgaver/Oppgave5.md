# Oppgave 5: Custom events
Det ligger en fil som heter NewTodo.svelte som inneholder et input-felt der du kan skrive inn det du ønsker å legge til i listen.

## Oppgave 5a
Legg til `NewTodo`-komponenten der «Add todo»-knappen ligger nå.

## Oppgave 5b
Sørg for at variabelen `todoText` oppdateres når du skriver inn i tekstfeltet.

![](https://i.imgur.com/CZA9rnc.gif)

Når dette fungerer, kan du fjerne koden som viser teksten:
``` html
<p>Tekst: {todoText}</p>
```

## Oppgave 5c
*Vi ønsker å kunne legge til elementer i `todos` fra `NewTodo.svelte`. En mulig løsning er å bruke en callback, men Svelte gir oss også muligheten til å lage egne event dispatchers, som er nyttig å kjenne til.*

Legg til en event dispatcher i `NewTodo` slik at du kan dispatche et event fra komponenten. Du kan f.eks. kalle eventet for «`addtodo`».

Legg til et `on:click`-event på `<button>`-tagen som dispatcher eventet. Tøm også teksten i input-feltet når du klikker knappen.

I `App.svelte` skal du nå kunne skrive:
``` html
<!-- Om du dispatcher en string -->
<NewTodo on:addtodo={event => addTodo(event.detail)}/>
<!-- Om du dispatcher et objekt -->
<NewTodo on:addtodo={event => addTodo(event.detail.propNavnHer)}/>
```

En god idé er også å gjøre «Add todo»-knappen `disabled` når `todoText` er tom (`todoText === ''`).

> *Hint: For å lage en event dispatcher må du bruke `createEventDispatcher` [(docs)](https://svelte.dev/docs#createEventDispatcher)*

> *Hint: Om du sliter med å få dette til, kan du sjekke [Svelte tutorial: Component events](https://svelte.dev/tutorial/component-events)*

* [Gå til oppgave 6](Oppgave6.md)
* [Oversikt over oppgaver](README.md)

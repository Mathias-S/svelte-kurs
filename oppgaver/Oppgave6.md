# Oppgave 6: Store
*I denne oppgaven kommer du til å gjøre en del endringer på (og fjerne en del av) det du allerede har gjort. Om du har lyst til å senere gå tilbake og se hva du gjorde i de foregående oppgaver, er dette et passende sted å lage en en `commit` her.*

Nå har du sannsynligvis todo-elementene skrevet noe slikt:
``` html
{#each todos as todo}
  <label ...>
		...
	</label>
{/each}
```

Dette vil vi flytte inn i en egen komponent. Vi kan kalle den `TodoList.svelte`. Husk å ta med relevant CSS (det som er relatert til `.todo`). Til å begynne med kan du sende med `todos` som prop til denne nye komponenten, for å sørge for at alt fortsatt fungerer.

*Kanskje du ser at bind:checked ikke helt fungerer - og så ser vi at vi begynner å få bruk for `todos`-variabelen i mange komponenter. Ofte passer det ikke helt å ha en state i komponenthierarkiet &ndash; av og til trenger du tilgang til verdier i flere urelaterte komponenter, eller i en vanlig JavaScript-modul (`.js`-fil). Dette er et passende tidspunkt å ta i bruk en «store», som er frakoblet enkeltkomponenter.*

> *Før du fortsetter kan det være en god idé å sjekke ut [Svelte Tutorials: Writable stores](https://svelte.dev/tutorial/writable-stores)*.

## Oppgave 6b
Lag en ny fil `stores.js` (vanlig JS-fil!). Lag en *writable store* som inneholder todos-objektet som initiell verdi:

``` javascript
import { writable } from 'svelte/store';

export const todoElements = writable([
	{ id: 0, text: 'Installere NPM', done: true},
	{ id: 1, text: 'Klone git-repoet', done: true},
	{ id: 2, text: '???', done: false},
	{ id: 3, text: 'Vise alle min fine Todo-app', done: false}]);
```

Til å begynne med kan du lett fortsette å bruke variabelen `todos` ved å subscribe på updates i storen i `App.svelte` med:
``` javascript
let todos;
todoElements.subscribe(value => {
	todos = value;
});
```

*Men nå ser du kanskje at du ikke lenger kan legge til nye items, og selv om du kan checke/unchecke enkelt todos, så oppdateres ikke antallet seg lenger.*

## Oppgave 6c - Oppdatere store
I funksjonen `addTodo` i `App.svelte` legger du til nye elementer i `todos`. Her må du nå eksplisitt si at du oppdaterer storen med `todoElements.update` [(docs)](https://svelte.dev/docs#writable).

## Oppgave 6d - Auto subscriptions

> *Før du starter denne, kan det være en god idé å sjekke ut [Svelte Tutorials - Auto-subscriptions](https://svelte.dev/tutorial/auto-subscriptions) (bygger på [Svelte Tutorials - Writable stores](https://svelte.dev/tutorial/writable-stores) lenket til i oppgave 6a).*

I stedet for å sende med `todos` som props til `TodoList`, kan `TodoList` hente verdiene direkte fra `todoElements` i `stores.js`. I stedet for å subscribe, er det mye enklere å ha en auto-subscription til store-verdien ved å bruke `$` før variabelnavnet:

``` html
{#each $todoElements as todo}
```

Da er det også unødvendig å sende `todos` til `Status`, så om du vil kan du fjerne det og bytte ut `todos` med `$todoElements` i `Status.svelte` også.

* [Gå til oppgave 7](Oppgave7.md)
* [Oversikt over oppgaver](README.md)

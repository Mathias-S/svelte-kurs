# Oppgave 4: Komponenter og props
*Svelte er komponent-basert. Vi ønsker ikke å samle all kode i én fil, det er mye mer ryddig å dele det opp i flere filer.*

Til å begynne med ønsker vi å flytte følgende kode inn i en egen komponent:
``` html
<div>{numberDone} / {todos.length} done</div>
<div>{todos.filter(todoElement => !todoElement.done).length} elements remaining</div>
```

Lag en ny fil `Status.svelte` som inneholder denne koden. For å gjøre det enkelt, vil vi at den skal ta inn én prop: `todos`, slik at du i `App.svelte` kan skrive:

```html
<Status todos={todos}>
```

> *Hint: `export` lager en komponent-prop [(docs)](https://svelte.dev/docs#1_export_creates_a_component_prop)*

> *Hint: Husk å importere Status-komponenten i `App.svelte` med `import Status from './Status.svelte'`*

Det blir fort rotete å ha for mye JS-kode blandet med HTML-koden, så lag også et reaktivt uttrykk som regner ut verdien til «elements remaining» i `<script>` og lagrer det i en egen variabel som skrives ut. Egentlig er «elements remaining» litt overflødig, så om du vil kan du også bare slettet det.

PS: Kan du skrive `<Status todos={todos}>` på en enda kortere måte?

*Det vil også være hensiktsmessig å skille ut todo-elementene i en egen komponent, men det kommer vi tilbake til senere.*

* [Gå til oppgave 5](Oppgave5.md)
* [Oversikt over oppgaver](README.md)

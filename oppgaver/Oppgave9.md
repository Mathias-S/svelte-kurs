# Oppgave 9 - Transitions og animasjoner
## Oppgave 9a
Animasjoner er veldig enkelt i Svelte! La oss først legge til en enkel fade-effekt når man legger til element i `TodoList.svelte`:
``` jsx
import { fade } from 'svelte/transition';
<label transition:fade ...>
```

Dette er alt for å fade et element inn og ut av syne. Lett, men ikke helt passende i denne lista?

## Oppgave 9b
> *Før du begynner på denne, kan du ta en titt på:*
> 1. *[Svelte Tutorials: Transitions / Adding parameters](https://svelte.dev/tutorial/adding-parameters-to-transitions)*
> 2. *[Svelte Tutorials: Transitions / In and out](https://svelte.dev/tutorial/in-and-out)*
> 3. *[Svelte Tutorials: Transitions / Custom CSS transitions](https://svelte.dev/tutorial/custom-css-transitions)*
> 4. *[Svelte Tutorials: Transitions / Custom CSS transitions](https://svelte.dev/tutorial/custom-css-transitions)*
> 5. *[Svelte Tutorials: Transitions / Deferred transitions](https://svelte.dev/tutorial/deferred-transitions)*
> 6. *[Svelte Tutorials: Animations / The animate directive](https://svelte.dev/tutorial/deferred-transitions)*

Se om du kan gjenskape effekten fra tutorial 5 og 6 lenket ovenfor. Bruk gjerne `crossfade`-funksjonen slik den er skrevet.

* Det er ingen flere oppgaver!
* [Oversikt over oppgaver](README.md)

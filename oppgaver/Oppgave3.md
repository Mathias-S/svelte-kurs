# Oppgave 3: Mer om state
## Oppgave 3a
*Når du klikker en checkbox, ser du ser kanskje at «elements remaining» og `{numberDone}` ikke blir oppdatert. Dette skjer fordi å klikke på checkboxen ikke *gjør* noe.*

 Løs dette ved å bruke `bind:`-direktivet [(docs)](https://svelte.dev/docs#bind_element_property) på checkboxen.

## Oppgave 3b
*Du skal nå se at «elements remaining» blir oppdatert, men ikke `numberDone`. Vi vil at når `todos` oppdateres, så skal også `numberDone` oppdateres.*

Gjør tilordningen til `numberDone` om til et *reaktivt uttrykk* (reactive statement).

> *Hint: `$:` markerer at et uttrykk er reaktivt [(docs)](https://svelte.dev/docs#3_$_marks_a_statement_as_reactive)*

## Oppgave 3c
*Hittil har du kanskje sett en advarsel om at `.todo.done span` er en ubrukt CSS-selector. Dette er en av fordelene med å bruke «scoped CSS» – det er lett å se om en selector ikke brukes. Nå vil vi ta i bruk denne på elementer der statusen er `done`.*

Sett klassen `done` på todo-elementer som er ferdige. Klassen skal settes på `<label>`-tagen.

Det er kanskje fristende å skrive noe slikt:
``` jsx
class="todo {todo.done ? 'done' : ''}"
```

Men siden dette er en såpass vanlig ting å gjøre, kan du i stedet bruke *`class:`-direktivet* ([docs](https://svelte.dev/docs#class_name), [tutorial](https://svelte.dev/tutorial/classes)).

* [Gå til oppgave 4](Oppgave4.md)
* [Oversikt over oppgaver](README.md)

# Oppgave 7 - fetch
De fleste «ekte» apper trenger å gjøre HTTP-kall på et eller annet tidspunkt. Det blir litt mye å legge til CRUD-operasjoner på alt i vår lille todo-app (og jeg har ikke laget noe REST-endepunkt for det...) &ndash; så her gjør vi det enkelt: Vi skal bare hente ett og ett element og legge det til i todo-lista vår.

For å være litt kreative vil vi legge til ett av Kanye West sine svært dype sitater i todo-listen vår, så vi kan ha noe å filosofere over. Heldigvis finnes REST-API-et [kanye.rest](https://kanye.rest/) som gir oss akkurat det vi trenger!

Lag en ny komponent som heter `Generate.svelte` som bare inneholder en knapp for å fetche et flott sitat. Vis en tekst mens sitatet lastes, f.eks. «Loading...». Når du har fått tak i et sitat, kan du dispatche et event til `App.svelte` for å kalle på `addTodo`.

Sitatet henter du fra https://api.kanye.rest, f.eks. kan du bruke en `async` funksjon:
``` javascript
async function getQuote() {
	const res = await fetch('https://api.kanye.rest/');
	const jsonObj = await res.text();

	if (res.ok) {
		console.log(`Think about this: ${jsonObj.quote}`); // Bytt ut dette
	} else {
		throw new Error(jsonObj);
	}
}
```

> *Tips: Se hvordan du kan håndtere fetch og asynkrone data på [Svelte Tutorials: Await blocks](https://svelte.dev/tutorial/await-blocks)*

> *Tips: For å simulere treg innlasting kan du bruke tjenesten [Slowwly](http://slowwly.robertomurray.co.uk/). Denne legger til forsinkelse til et http-kall, f.eks. http://slowwly.robertomurray.co.uk/delay/2000/url/https://api.kanye.rest/ legger til en forsinkelse på 2000 ms.*

* [Gå til oppgave 8](Oppgave8.md)
* [Oversikt over oppgaver](README.md)

import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		appName: 'NC Todo App'
	}
});

export default app;

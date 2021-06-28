import app from './app';

app.get('/', (request, response) => {
	return response.send({ message: 'Hello!' });
});

app.listen(3030);
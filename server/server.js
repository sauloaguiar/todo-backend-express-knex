const app = require('./server-config.js');
const routes = require('./server-routes.js');
const userRoutes = require('./api/users/user.routes.js');
const authRoutes = require('./api/auth/auth.routes.js');
const authMiddleware = require('./middleware/auth.middleware.js');

app.use('/', authRoutes);

app.use(authMiddleware);
app.use('/api', userRoutes);

const port = process.env.PORT || 5000;

app.get('/', routes.getAllTodos);
app.get('/:id', routes.getTodo);

app.post('/', routes.postTodo);
app.patch('/:id', routes.patchTodo);

app.delete('/', routes.deleteAllTodos);
app.delete('/:id', routes.deleteTodo);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;
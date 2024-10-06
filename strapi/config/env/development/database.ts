export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi-db'),
      password: env('DATABASE_PASSWORD', 'koala-jaguar-otter-penguin-giraffe'),
      ssl: env.bool('DATABASE_SSL', false)
    }
  }
});

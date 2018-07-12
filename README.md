# graphql-type-uuid [![npm][npm-badge]][npm]

UUID scalar type for [GraphQL.js](https://github.com/graphql/graphql-js).

[![Travis][build-badge]][build] [![Codecov][codecov-badge]][codecov]

## Usage

This package exports a UUID scalar GraphQL.js type:

```js
import GraphQLUUID from 'graphql-type-uuid';
```

### Programmatically-constructed schemas

You can use this in a programmatically-constructed schema as with any other
scalar type:

```js
import { GraphQLObjectType } from 'graphql';
import GraphQLUUID from 'graphql-type-uuid';

export default new GraphQLObjectType({
  name: 'MyType',
  fields: {
    myField: { type: GraphQLUUID },
  },
});
```

### SDL with [graphql-tools](https://github.com/apollographql/graphql-tools)

When using the SDL with graphql-tools, define `GraphQLUUID` as the resolver for
the corresponding scalar type in your schema:

```js
import { makeExecutableSchema } from 'graphql-tools';
import GraphQLUUID from 'graphql-type-uuid';

const typeDefs = `
scalar UUID

type MyType {
  myField: UUID
}
`;

const resolvers = {
  UUID: GraphQLUUID,
};

export default makeExecutableSchema({ typeDefs, resolvers });
```

## Related

If you happen to be looking for a JSON scalar GraphQL.js type, please check
[graphql-type-json](https://github.com/taion/graphql-type-json), in which this
project is heavily inspired.

[npm-badge]: https://img.shields.io/npm/v/graphql-type-uuid.svg
[npm]: https://www.npmjs.com/package/graphql-type-uuid
[build-badge]:
  https://img.shields.io/travis/olistic/graphql-type-uuid/master.svg
[build]: https://travis-ci.org/olistic/graphql-type-uuid
[codecov-badge]:
  https://img.shields.io/codecov/c/github/olistic/graphql-type-uuid/master.svg
[codecov]: https://codecov.io/gh/olistic/graphql-type-uuid

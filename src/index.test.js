import { graphql, GraphQLObjectType, GraphQLSchema } from 'graphql';

import GraphQLUUID from '.';

describe('GraphQLUUID', () => {
  let schema;

  beforeEach(() => {
    schema = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',
        fields: {
          value: {
            type: GraphQLUUID,
            args: {
              arg: {
                type: GraphQLUUID,
              },
            },
            resolve: (parent, { arg }) => arg,
          },
        },
      }),
    });
  });

  describe('serialize', () => {
    test('supports serialization', () => {
      expect(
        GraphQLUUID.serialize('16fd2706-8baf-433b-82eb-8c7fada847da'),
      ).toEqual('16fd2706-8baf-433b-82eb-8c7fada847da');
    });

    test('converts to lower case during serialization', () => {
      expect(
        GraphQLUUID.serialize('16FD2706-8BAF-433B-82EB-8C7FADA847DA'),
      ).toEqual('16fd2706-8baf-433b-82eb-8c7fada847da');
    });

    test('rejects invalid values', () => {
      expect(() => {
        GraphQLUUID.serialize('INVALID');
      }).toThrow(
        new TypeError('UUID cannot represent non-UUID value: INVALID'),
      );
    });
  });

  describe('parseValue', () => {
    test('supports parsing values', async () => {
      const {
        data: { value },
      } = await graphql(
        schema,
        'query ($arg: UUID!) { value(arg: $arg) }',
        null,
        null,
        { arg: '16fd2706-8baf-433b-82eb-8c7fada847da' },
      );
      expect(value).toEqual('16fd2706-8baf-433b-82eb-8c7fada847da');
    });

    test('rejects invalid values', async () => {
      const { errors } = await graphql(
        schema,
        'query ($arg: UUID!) { value(arg: $arg) }',
        null,
        null,
        { arg: 'INVALID' },
      );
      expect(errors.length).toBe(1);
    });
  });

  describe('parseLiteral', () => {
    test('supports parsing literals', async () => {
      const {
        data: { value },
      } = await graphql(
        schema,
        '{ value(arg: "16fd2706-8baf-433b-82eb-8c7fada847da") }',
      );
      expect(value).toEqual('16fd2706-8baf-433b-82eb-8c7fada847da');
    });

    test('rejects non-UUID literals', async () => {
      const { errors } = await graphql(schema, '{ value(arg: "INVALID") }');
      expect(errors.length).toBe(1);
    });

    test('rejects invalid literals', async () => {
      const { errors } = await graphql(schema, '{ value(arg: INVALID) }');
      expect(errors.length).toBe(1);
    });
  });
});

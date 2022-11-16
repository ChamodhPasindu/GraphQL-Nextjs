import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLID } from "graphql";

export const MessageType = new GraphQLObjectType({
  name: "Message",
  fields: () => ({
    successful: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  }),
});


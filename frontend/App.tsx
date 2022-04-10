import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { AppRegistry } from 'react-native';
import Login from './app/screens/Login';

const client = new ApolloClient({
  uri: "localhost:4000/graphql",
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Login />
   </ApolloProvider>
  );
}

AppRegistry.registerComponent('Prospect', () => App);
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './app/screens/Home';
import { AppRegistry } from 'react-native';

const client = new ApolloClient({
  uri: "localhost:4000/graphql",
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
   </ApolloProvider>
  );
}

AppRegistry.registerComponent('Prospect', () => App);
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { AppRegistry, Text, View } from 'react-native';
import Test from './app/screens/Test';

const client = new ApolloClient({
  uri: "localhost:4000/graphql",
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View>
        <Test />
      </View>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent('MyApplication', () => App);
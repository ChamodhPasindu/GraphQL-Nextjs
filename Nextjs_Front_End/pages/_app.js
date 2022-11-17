import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  const client = new ApolloClient({
    uri: "http://localhost:3002/graphql",
    cache: new InMemoryCache(),
   });

   if (typeof window === 'undefined') {
    return <></>;
   }else{
      return(
        <>
        <ApolloProvider client={client}>
        <Component {...pageProps} />
        </ApolloProvider>
        </>
      )
    }
  
}

export default MyApp

import React, {ReactNode} from 'react'
import { LadybirdContext } from './context'
import Cookies from "universal-cookie";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import {useApolloClient, useLadybirdToken} from "./context";

type LadybirdProviderProps = {
  children: ReactNode
  authURL: string,
  apiUrl: string
}

export const LadybirdProvider: React.FC<LadybirdProviderProps> = ({ children, authURL, apiUrl}) => {
  const cookies = new Cookies();
  const token = cookies.get("RCTC_USER");
  const uri = apiUrl
  const link = new HttpLink({ uri, credentials: 'include' });
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    cache,
    link
  });

  if (!token){
    window.location.replace(authURL);
  }

  return (
    <LadybirdContext.Provider value={{ token: token, apolloClient: apiUrl ? client : null }}>
      {children}
    </LadybirdContext.Provider>
  )
}

export {useApolloClient, useLadybirdToken}
export default LadybirdProvider

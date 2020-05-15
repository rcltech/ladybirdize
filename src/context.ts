import React, { useContext } from 'react'
import { ApolloClient } from 'apollo-boost'

type LadybirdContextType = {
  token: string
  apolloClient: ApolloClient<any> | null
}

export const LadybirdContext = React.createContext<LadybirdContextType>({
  token: '',
  apolloClient: null
})

export const useLadybirdToken = () : string => {
  const context = useContext(LadybirdContext)
  if(context === undefined){
    throw new Error('useLadybirdToken did not find the LadybirdProvider')
  }
  const { token } = context
  return token
}

export const useApolloClient = () : ApolloClient<any> | null => {
  const context = useContext(LadybirdContext)
  if(context === undefined){
    throw new Error('useApolloClient did not find the LadybirdProvider')
  }
  const { apolloClient } = context
  return apolloClient
}

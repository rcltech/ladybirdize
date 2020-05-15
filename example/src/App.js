import React, { useEffect } from "react";
import { useApolloClient } from "@rcltech/ladybird";

const App = () => {
  const client = useApolloClient();
  console.log(client)
  return <div></div>
}

export default App

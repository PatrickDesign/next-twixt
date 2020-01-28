import withData from "../apolloConfig";

import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/react-hooks";
import { useState } from 'react';

const sayHello = gql`
  query($name: String!){
    hello(name: $name)
  }
`;

function sayHelloForm() {

  const [name, changeName] = useState('');

  const [getSentence, { loading, data }] = useLazyQuery(sayHello);

  function executeQuery(e)
  {
    e.preventDefault();
    getSentence({variables: {name}});
    changeName('');
  }
  
  if(loading)
    return <h1>Loading...</h1>

  return (
    <div>
      <h3>Server Response: {data ? data.hello : ""}</h3> 
      <form onSubmit={executeQuery}>
        <label htmlFor="queryName">Your name:</label>
        <input
          name="queryName"
          value={name}
          onChange={e => changeName(e.target.value)}
        />
      </form>
    </div>
  );

//   return loading ? (
//     <div>Welcome to Next.js!</div>
//   ) : (
//     <div>Query: {data.hello}</div>
//   );
}

export default withData(sayHelloForm);

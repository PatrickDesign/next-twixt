// import { NextPage } from "next";

// interface Props {
//   userAgent?: string;
// }

// const Page: NextPage<Props> = ({ userAgent }) => (
//   <main>Your user agent: {userAgent}</main>
// );

// Page.getInitialProps = async ({ req }) => {
//   const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
//   return { userAgent };
// };

import '../components/sayHelloForm'
import SayHelloForm from '../components/sayHelloForm';

function HomePage() {

  return (
    <SayHelloForm />
  )
 
}

export default HomePage;
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


function HomePage() {

  async function getName(){
    
    const data = await fetch("/api/sayHello?name=Patrick");
    data.text().then(text => console.log(text));
  }

  getName();

  return <div>Welcome to Next.js!</div>;
}

export default HomePage;
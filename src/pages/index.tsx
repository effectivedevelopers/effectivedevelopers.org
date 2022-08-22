import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Effective Developers</title>
        <meta name="description" content="Effective Developers" />
        <link rel="icon" href="https://placekitten.com/16/16" />
      </Head>
      <div className="container mx-auto max-w-screen-lg p-4">
        <Navbar />
        <main className="container mx-auto flex min-h-screen flex-col justify-center p-4">
          <h1 className="text-3xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
            Effective Developers
          </h1>
          <img src="https://placekitten.com/300/300" />
          <section className="">
            <h2 className="text-2xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
              What we do?
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              alias assumenda blanditiis culpa debitis dicta, dolor ipsam
              molestiae, nesciunt porro quod tempora voluptates. Aliquam esse ex
              laboriosam quod recusandae veniam.
            </p>
          </section>
          <section className="">
            <h2 className="text-2xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
              About Us
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              alias assumenda blanditiis culpa debitis dicta, dolor ipsam
              molestiae, nesciunt porro quod tempora voluptates. Aliquam esse ex
              laboriosam quod recusandae veniam.
            </p>
          </section>
          <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
            {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;

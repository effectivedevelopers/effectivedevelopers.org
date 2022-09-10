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
        <main className="container mx-auto flex min-h-screen flex-col justify-center gap-4 p-4">
          <h1 className="text-3xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
            Effective Developers
          </h1>
          <section className="">
            <p>
              We help software developers and people running software projects
              in the Effective Altruism community
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
              About Us
            </h2>
            <p>
              We're both experienced developers (10+ years of professional
              experience each), here to try helping the EA community however we
              can.
            </p>
            {/* <h3>
              "About us" - autocompleted by copilot
            </h3>
            <p>
              We are a group of software developers and people running software projects in the Effective Altruism community. We are passionate about using technology to help people and the world. We are also passionate about helping people in the Effective Altruism community to use technology to help people and the world.
            </p> */}
          </section>
          <section>
            <nav className="">
              <ul className="flex items-center justify-center gap-10 text-center font-bold transition-colors">
                <li>
                  <img
                    className="rounded-full"
                    src="https://placekitten.com/256/256"
                  />
                  <p>Soof Golan</p>
                </li>
                <li className="">
                  <img
                    className="rounded-full"
                    src="https://placekitten.com/256/256"
                  />
                  <p>Yonatan Cale</p>
                </li>
              </ul>
            </nav>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;

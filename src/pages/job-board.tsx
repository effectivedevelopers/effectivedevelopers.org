import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { AirtableEmbed } from "../components/airtable-embed";

const JobBoard: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Job Boards</title>
        <meta name="description" content="Job Boards" />
        <link rel="icon" href="https://placekitten.com/16/16" />
      </Head>
      <div className="container mx-auto max-w-screen-lg p-4">
        <Navbar />
        <main className="container mx-auto flex min-h-screen flex-col justify-center gap-4 p-4">
          <h1 className="text-3xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
            Job Boards
          </h1>
          <div>
            <h1 className="text-2xl">Improved view for the 80k job board</h1>
            Differences:
            <ol className="list-disc">
              <li className="list-inside">Free text filters</li>
              <li className="list-inside">
                Report problems in job posts, and filter by other people's
                reports
              </li>
            </ol>
            How was this done: The 80k data is saved in Airtable, this is simply
            the default airtable frontend, plus some tweaks
            <AirtableEmbed table_id="shr9lBds8OVStJ3q7" />
          </div>
          <h2>80k job board - optimized for developers</h2>
          Same as the previous job board, but with filters applied for software
          development roles, which remove 75% of the roles from the
          "engineering" filter available in the original 80k job board.
          <AirtableEmbed table_id="shrwag2Y4btvyqWT9" />
          <h2 className="text-2xl">@effective_jobs in an Airtable</h2>
          In progress. Imports jobs from the{" "}
          <a href="https://twitter.com/effective_jobs">
            @effective_jobs Twitter
          </a>
          . Only contains jobs from 2022-08-23. Idea inspired by Nonlinear.
          <AirtableEmbed table_id="shr6ZCgczaAJAXBva" />
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
export default JobBoard;

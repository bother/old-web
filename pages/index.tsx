import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Home: NextPage = () => (
  <>
    <Head>
      <title>What bothers you? / Bother</title>
      <meta content="What bothers you?" name="description" />
    </Head>

    <main>
      <section>
        <h1 className="text-4xl font-semibold">
          Share what bothers you&#8230; anonymously.
        </h1>
        <p className="mt-4 text-xl">
          Bother is an anonymous social app where you share things that bother
          you and find other people who feel the same.
        </p>
        <p className="mt-4 ">
          It&apos;s not a place for hate, racism, or other inappropriate
          behavior. In a time of need, it&apos; a tool to share your
          frustrations safely.
        </p>
      </section>
      <h2 className="text-3xl font-semibold my-8">Download</h2>
      <section className="flex flex-col my-8 lg:flex-row">
        <a
          className="bg-gray-700 transition-colors duration-200 hover:bg-gray-800 py-3 px-4 rounded-full flex items-center"
          href="#download"
          onClick={(event) => event.preventDefault()}>
          <img className="h-8 w-8" src="/app-store.svg" />
          <span className="text-white font-medium ml-2">App Store</span>
        </a>
        <a
          className="bg-gray-700 transition-colors duration-200 hover:bg-gray-800 py-3 px-4 rounded-full flex items-center mt-4 lg:mt-0 lg:ml-4"
          href="#download"
          onClick={(event) => event.preventDefault()}>
          <img className="h-8 w-8" src="/google-play.svg" />
          <span className="text-white font-medium ml-2">Google Play</span>
        </a>
      </section>
      <section>
        <h2 className="text-3xl font-semibold">Features</h2>
        <figure className="bg-accent rounded-lg mt-8 flex flex-col">
          <figcaption className="my-4 mx-8 text-center font-medium">
            Share something that bothers you.
          </figcaption>
          <img
            className="m-1 mt-0 rounded-lg"
            src="/screenshots/feed-popular.png"
          />
        </figure>
        <figure className="bg-accent rounded-lg mt-8 flex flex-col">
          <figcaption className="my-4 mx-8 text-center font-medium">
            Find people who feel the same way.
          </figcaption>
          <img
            className="m-1 mt-0 rounded-lg"
            src="/screenshots/post-full.png"
          />
        </figure>
        <figure className="bg-accent rounded-lg mt-8 flex flex-col">
          <figcaption className="my-4 mx-8 text-center font-medium">
            Chat with them and make friends.
          </figcaption>
          <img className="m-1 mt-0 rounded-lg" src="/screenshots/chat.png" />
        </figure>
        <figure className="bg-accent rounded-lg mt-8 flex flex-col">
          <figcaption className="my-4 mx-8 text-center font-medium">
            Share interesting posts on your social media.
          </figcaption>
          <img className="m-1 mt-0 rounded-lg" src="/screenshots/post.png" />
        </figure>
      </section>
    </main>
  </>
)

export default Home

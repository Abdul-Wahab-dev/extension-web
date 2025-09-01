import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Save ChatGPT References & Organize AI Research with Flexisaves for free",
  description:
    "Discover how to save ChatGPT conversations, create AI research collections, add notes on OpenAI docs, and share content with friends using Flexisaves — the best Chrome extension for organizing AI references.",
};

const page = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Cover Image */}
        <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/assests/ai-reference.png" // replace with your image
            alt="Blog cover"
            fill
            className="object-cover"
            priority
          />
        </div>
        <article className="mt-4 prose prose-lg max-w-none text-gray-700">
          {/* Main Heading */}
          <h1 className="mt-8 text-3xl sm:text-5xl font-bold text-gray-900">
            How to Save ChatGPT References and Organize AI Research with
            Flexisaves
          </h1>
          <p className="text-gray-700 mt-4">
            When working with ChatGPT, you often generate valuable answers, code
            snippets, or research references that you don’t want to lose.
            Copy-pasting into a document or bookmarking individual pages can
            quickly get messy. That’s where Flexisaves comes in — the all-in-one
            Chrome extension to save, organize, and share online content.
          </p>

          {/* Subheading */}
          <h2 className="mt-6 text-xl sm:text-2xl font-semibold text-gray-800">
            Save References Directly from ChatGPT
          </h2>
          <p className="mt-4 text-gray-700">
            Instead of scrolling back through old conversations, you can
            instantly save ChatGPT outputs with Flexisaves. Just right-click on
            the text you want, choose “Save with Flexisaves”, and it’s stored in
            your personal content library — along with the source link.
          </p>

          <h2 className="mt-6 text-xl sm:text-2xl font-semibold text-gray-800">
            Create an AI Collection for Research
          </h2>
          <p className="mt-4 text-gray-700">
            With Flexisaves, you can create a dedicated “AI Research Collection”
            where you store all your ChatGPT outputs, prompts, and related
            articles. This makes it easier to revisit your past research without
            losing context.
          </p>
          <p className="mt-2 text-gray-700">
            Whether you’re comparing AI models, studying documentation, or
            collecting prompt ideas, everything stays neatly organized.
          </p>
          <h2 className="mt-6 text-xl sm:text-2xl font-semibold text-gray-800">
            Add Notes on AI Documentation Pages
          </h2>
          <p className="mt-4 text-gray-700">
            Research doesn’t stop at ChatGPT. You might also be exploring
            OpenAI’s documentation or other AI tools. Flexisaves lets you attach
            personal notes to any saved page. For example, while reading the
            OpenAI API guide, you can jot down:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>This endpoint works well for embeddings</li>
            <li>Check token usage limits before scaling</li>
          </ul>
          <p className="mt-2 text-gray-700">
            These notes are saved along with the page, so you always know why
            you saved it.
          </p>
          <h2 className="mt-6 text-xl sm:text-2xl font-semibold text-gray-800">
            Share Your AI Collections with Friends or Colleagues
          </h2>
          <p className="mt-4 text-gray-700">
            Flexisaves isn’t just about personal productivity — it’s also about
            collaboration. You can share your AI research collection with
            friends, teammates, or study groups. Instead of sending multiple
            links or screenshots, simply share one organized collection.
          </p>
          <h2 className="mt-6 text-xl sm:text-2xl font-semibold text-gray-800">
            Why Flexisaves is Perfect for AI Enthusiasts
          </h2>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li>Save ChatGPT references instantly</li>
            <li>Create AI research collections</li>
            <li>Add context with personal notes</li>
            <li>Collaborate by sharing collections</li>
            <li>Access saved content across devices</li>
          </ul>
          <p className="mt-4 text-gray-700">
            If you’re serious about learning AI, building projects, or simply
            keeping track of your ChatGPT experiments, Flexisaves is the best
            way to organize and share AI research content.
          </p>
          <p className="mt-2 text-gray-700">
            <Link
              href="https://chromewebstore.google.com/detail/flexisaves/mmaidogdkpmcnbjepbfhicpecemdeiij?hl=en"
              target="_blank"
            >
              <span className="underline">Install Flexisaves now</span>
            </Link>{" "}
            and start saving your ChatGPT references today.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default page;

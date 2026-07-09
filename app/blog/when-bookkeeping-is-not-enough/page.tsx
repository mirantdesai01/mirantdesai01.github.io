import type { Metadata } from "next";
import { AdvisoryArticlePage } from "../advisory-article-page";
import { getAdvisoryArticle } from "../advisory-articles";

const article = getAdvisoryArticle("when-bookkeeping-is-not-enough");

export const metadata: Metadata = {
  title: article?.title,
  description: article?.description,
  alternates: {
    canonical: "/blog/when-bookkeeping-is-not-enough/",
  },
};

export default function Page() {
  return <AdvisoryArticlePage article={article!} />;
}

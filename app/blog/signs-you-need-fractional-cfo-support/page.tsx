import type { Metadata } from "next";
import { AdvisoryArticlePage } from "../advisory-article-page";
import { getAdvisoryArticle } from "../advisory-articles";

const article = getAdvisoryArticle("signs-you-need-fractional-cfo-support");

export const metadata: Metadata = {
  title: article?.title,
  description: article?.description,
  alternates: {
    canonical: "/blog/signs-you-need-fractional-cfo-support/",
  },
};

export default function Page() {
  return <AdvisoryArticlePage article={article!} />;
}

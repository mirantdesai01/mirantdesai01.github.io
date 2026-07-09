import type { Metadata } from "next";
import { AdvisoryArticlePage } from "../advisory-article-page";
import { getAdvisoryArticle } from "../advisory-articles";

const article = getAdvisoryArticle("fractional-cfo-professional-services");

export const metadata: Metadata = {
  title: article?.title,
  description: article?.description,
  alternates: {
    canonical: "/blog/fractional-cfo-professional-services/",
  },
};

export default function Page() {
  return <AdvisoryArticlePage article={article!} />;
}

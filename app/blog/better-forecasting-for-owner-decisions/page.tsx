import type { Metadata } from "next";
import { AdvisoryArticlePage } from "../advisory-article-page";
import { getAdvisoryArticle } from "../advisory-articles";
import { ForecastSimulator } from "../forecast-simulator";

const article = getAdvisoryArticle("better-forecasting-for-owner-decisions");

export const metadata: Metadata = {
  title: article?.title,
  description: article?.description,
  alternates: {
    canonical: "/blog/better-forecasting-for-owner-decisions/",
  },
};

export default function Page() {
  return (
    <AdvisoryArticlePage article={article!}>
      <ForecastSimulator />
    </AdvisoryArticlePage>
  );
}

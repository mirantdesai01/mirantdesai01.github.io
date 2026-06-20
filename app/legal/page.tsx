import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Information",
  description:
    "Public legal information and notices provided by Mirant Desai for transparency and context.",
  alternates: {
    canonical: "/legal/",
  },
};

export default function Legal() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Legal Matters</h1>

      <div className="prose max-w-none">
        <div className="mb-8 p-8 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Overview Notice</h2>
          <p className="text-gray-700 leading-relaxed">
            This page provides factual information about ongoing legal proceedings involving Mirant Desai.
            The information presented here is provided for transparency and context, and does not constitute
            legal advice or a complete representation of any party&apos;s position. All matters remain under
            active litigation.
          </p>
        </div>

        <div className="mb-12 p-8 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">My Position</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While I respect the judicial process and acknowledge that all matters remain under active litigation,
            I maintain that:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 ml-4">
            <li>
              <strong>
                The dispute includes allegations of retaliation related to whistle-blower petitioning, including
                claims of tortious interference and misuse of state processes; those allegations remain contested
                and are being addressed through the courts.
              </strong>
            </li>
            <li>
              <strong>
                Federal whistleblower protections and statutory immunity support my position, and objective merit
                rebuts any pretextual performance review narrative.
              </strong>
            </li>
            <li>
              Standard discovery safeguards, including document tracking through Bates numbering, are
              appropriate and necessary to ensure the integrity of the litigation process.
            </li>
            <li>
              Certain discovery demands directed at educational records and applications raise serious
              questions about scope, relevance, and potential improper purposes.
            </li>
          </ul>
        </div>

        <div className="mb-12 p-8 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Public Record &amp; Search Results</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Court filings, docket entries, and related documents in these proceedings are matters of public
            record and may appear in online search results. This page is provided to offer additional context
            for anyone reviewing such materials.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 ml-4">
            <li>
              PacerMonitor public case listing{' '}
              <a
                href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.pacermonitor.com/public/case/58059049/Desai_v_Walmart_Inc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                [1]
              </a>
            </li>
            <li>
              Justia docket listing{' '}
              <a
                href="https://dockets.justia.com/docket/circuit-courts/ca8/26-1704/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                [2]
              </a>
            </li>
          </ul>
        </div>

        <div className="p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Important Notice</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All statements reflect the position of Mirant Desai as a party to the proceedings and should
            not be construed as established fact or final judicial determinations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you are a member of the media, a potential business partner, investor, or other interested
            party seeking additional information or clarification regarding these matters, please contact me
            through the channels listed on this website.
          </p>
        </div>
      </div>
    </div>
  )
}

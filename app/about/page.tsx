export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">About Me</h1>

      <div className="prose max-w-none">
        <div className="mb-12 p-8 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Professional Background</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I&apos;m Mirant Desai, the Founder and CEO of <a href="https://www.planaipro.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">PlanAI</a>,
            an AI-powered enterprise business software platform. PlanAI helps organizations with strategic planning,
            financial modeling, and business intelligence through advanced artificial intelligence and automation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With a background in technology and entrepreneurship, I&apos;m passionate about building tools that empower
            businesses to make data-driven decisions and unlock their full potential through intelligent automation.
          </p>
        </div>

        <div className="mb-12 p-8 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">What I&apos;m Building</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At PlanAI, we&apos;re developing a comprehensive suite of AI-powered business tools including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Multi-LLM AI intelligence for strategic insights</li>
            <li>Business planning and financial modeling tools</li>
            <li>Market research and competitive analysis platforms</li>
            <li>Strategic frameworks and OKR planning</li>
            <li>Project knowledge management and document intelligence</li>
          </ul>
        </div>

        <div className="mb-12 p-8 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Areas of Interest</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Artificial Intelligence and Machine Learning</li>
            <li>Business Intelligence and Analytics</li>
            <li>Entrepreneurship and Startup Growth</li>
            <li>Product Development and Design</li>
            <li>Strategic Planning and Financial Modeling</li>
          </ul>
        </div>

        <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact Me</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I&apos;m always interested in connecting with fellow entrepreneurs, developers, and business leaders.
            Feel free to reach out through any of these channels:
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://www.planaipro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Visit PlanAI
            </a>
            <a
              href="https://linkedin.com/in/desaimirant"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-colors border border-gray-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mirantdesai01"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-colors border border-gray-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

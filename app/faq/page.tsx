import React from 'react';

export const metadata = {
  title: 'AI Software Engineer FAQ | Arpit Srivastava Portfolio',
  description: 'Get answers about Arpit Srivastava, an AI software engineer and full stack developer. Learn about his expertise in ML, DevOps, and scalable system design.',
  alternates: { canonical: 'https://itsarpit.dev/faq' },
  openGraph: {
    title: 'AI Software Engineer FAQ | Arpit Srivastava Portfolio',
    description: 'Get answers about Arpit Srivastava, an AI software engineer and full stack developer. Learn about his expertise in ML, DevOps, and scalable system design.',
    url: 'https://itsarpit.dev/faq',
    siteName: 'Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Software Engineer FAQ | Arpit Srivastava Portfolio',
    description: 'Get answers about Arpit Srivastava, an AI software engineer and full stack developer. Learn about his expertise in ML, DevOps, and scalable system design.'
  },
  robots: { index: true, follow: true }
};

export default function FAQPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What specific expertise does Arpit bring as an AI software engineer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Arpit specializes in bridging the gap between traditional software engineering and advanced machine learning. As an AI software engineer, he builds scalable, production-ready applications that integrate complex AI models, ensuring they are performant, secure, and maintainable."
        }
      },
      {
        "@type": "Question",
        "name": "Can Arpit handle end-to-end development as an AI full stack developer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. As an AI full stack developer, Arpit manages the entire lifecycle of a project—from designing intuitive front-end interfaces and robust back-end architectures to deploying sophisticated AI/ML pipelines, providing a seamless, one-stop solution for your technical needs."
        }
      },
      {
        "@type": "Question",
        "name": "How does Arpit's background as a senior software engineer benefit my project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With extensive experience as a senior software engineer, Arpit brings architectural maturity, clean code practices, and a deep understanding of system design. This ensures that your project is not just functional, but built to scale, minimizing technical debt and long-term maintenance costs."
        }
      },
      {
        "@type": "Question",
        "name": "Does Arpit provide DevOps support for AI and ML deployments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Arpit leverages his skills as a DevOps engineer to automate CI/CD pipelines, manage cloud infrastructure, and optimize model serving. This ensures your AI applications are deployed reliably and can handle high-traffic production environments with ease."
        }
      },
      {
        "@type": "Question",
        "name": "Is Arpit available for specialized ML engineer consulting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Arpit is available for consulting on specialized ML engineer projects. Whether you need help with model fine-tuning, data pipeline optimization, or integrating LLMs into existing workflows, his expertise ensures your machine learning initiatives deliver measurable business value."
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="mb-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors border border-gray-300"
        >
          ← Back to Home
        </a>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
      <p className="text-gray-600 mb-8">Expert insights on AI software engineering, full stack development, and ML solutions provided by Arpit Srivastava.</p>
      <div className="faq-list">
          {schemaData.mainEntity.map((item, index) => (
            <div key={index} className="mb-6 border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-gray-600">{item.acceptedAnswer.text}</p>
            </div>
          ))}
      </div>
      <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
        <h2 className="text-xl font-bold mb-2">Ready to start your project?</h2>
        <p className="mb-4">Hire Arpit for your next AI or software engineering initiative.</p>
        <a href="/contact" className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700">Contact Arpit</a>
      </div>
    </main>
  );
}
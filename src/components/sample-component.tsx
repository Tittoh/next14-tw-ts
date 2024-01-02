import Link from 'next/link';

const linkData = [
  {
    title: 'Docs',
    description: 'Find in-depth information about Next.js features and API.',
    url: 'https://nextjs.org/docs'
  },
  {
    title: 'Learn',
    description: 'Learn about Next.js in an interactive course with&nbsp;quizzes!',
    url: 'https://nextjs.org/learn'
  },
  {
    title: 'Templates',
    description: 'Explore starter templates for Next.js.',
    url: 'https://vercel.com/templates'
  },
  {
    title: 'Deploy',
    description: 'Instantly deploy your Next.js site to a shareable URL with Vercel.',
    url: 'https://vercel.com/new'
  }
];

export default function SampleComponent() {
  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      {linkData.map((item, i) => (
        <Link
          key={i}
          href={item.url}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {item.title}{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{item.description}</p>
        </Link>
      ))}
    </div>
  );
}

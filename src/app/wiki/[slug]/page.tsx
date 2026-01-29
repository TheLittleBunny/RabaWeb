
export async function generateStaticParams() {
  return [
    { slug: 'weapons' },
    { slug: 'armor' },
    { slug: 'materials' },
    { slug: 'races' },
    { slug: 'stats' },
    { slug: 'getting-started' },
  ];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div>
      <h1 style={{ textTransform: 'capitalize', color: 'var(--accent-color)', fontSize: '2.5rem', marginBottom: '1rem' }}>
        {slug.replace(/-/g, ' ')}
      </h1>
      <div style={{ padding: '2rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
        <p style={{ fontSize: '1.1rem' }}>
          This is the starting point for the <strong>{slug}</strong> documentation.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Content will be populated here.
        </p>
      </div>
    </div>
  );
}

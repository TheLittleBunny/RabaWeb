
export async function generateStaticParams() {
  return [
    { slug: 'armas' },
    { slug: 'armaduras' },
    { slug: 'materiales' },
    { slug: 'razas' },
    { slug: 'estadisticas' },
    { slug: 'guia-inicio' },
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
          Este es el punto de partida para la documentación de <strong>{slug}</strong>.
        </p>
        <p style={{ marginTop: '1rem' }}>
          El contenido se agregará aquí pronto.
        </p>
      </div>
    </div>
  );
}

export function formatarTitulo(slug: string): string {
    const mapa: Record<string, string> = {
      tecnologia: 'Tecnologia',
      saude: 'Saúde',
      financas: 'Finanças',
      apps: 'Aplicativos',
      artigos: 'Artigos',
      noticias: 'Notícias',
      utilitarios: 'Utilitários',
    
    }
  
    return mapa[slug.toLowerCase()] || slug.charAt(0).toUpperCase() + slug.slice(1)
  }
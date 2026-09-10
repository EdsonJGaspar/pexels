const PEXELS_BASE_URL = "https://api.pexels.com/v1/search";

type PexelsPhoto = {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  alt: string;
};

type PexelsSearchResponse = {
  total_results: number;
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
  next_page?: string;
  prev_page?: string;
};

async function pexelsFetch<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${PEXELS_BASE_URL}${endpoint}`, {
    headers: {
      Authorization: process.env.PEXELS_API_KEY!,
    },
    //Aplicando cache de 1h
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(
      `Erro na API ${response.status} Informação: ${response.statusText}`,
    );
  }

  return response.json();
}

export function searchPhotos(query: string, perPage = 15) {
  return pexelsFetch<PexelsSearchResponse>(`
    /search?query=${encodeURIComponent(query)}&per_page=${perPage}
    `);
}

export function getCuratedPhotos(perPage = 15) {
  return pexelsFetch<PexelsSearchResponse>(`/curated?per_page=${perPage}`);
}

export function getPhotos(id: number) {
  return pexelsFetch<PexelsPhoto>(`/photos/${id}`);
}

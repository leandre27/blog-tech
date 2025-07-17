export interface TagsData {
  id: string,
  attributes: {
    name: Record<string, string>,
    description?:  Record<string, string>,
    group: string
  }

}

export interface MangaData {
  id: string
  attributes: {
    title: Record<string, string>
    description: Record<string, string>
    lastChapter: string | null
    updatedAt: string
    tags?: TagsData[]
    status?: string
    year: number | null;
  }
  relationships: {
    id: string
    type: string
    attributes?: any
  }[]
}


export interface MangaListResponse {
  result: 'ok'
  response: 'collection'
  data: MangaData[]
}

export interface MangaSingleResponse {
  result: 'ok'
  response: 'entity'
  data: MangaData
}


export interface MangaMostFollowed {
  id: string
  title: string
  description: string
  cover: string 
  lastChapter: string | null
  updatedAt: string
  rating?: number
  follows?: number
}




export interface MangaStatistics {
  rating: {
    average: number
    bayesian: number
    distribution: Record<string, number>
  }
  follows: number
}

export interface MangaStatsResponse {
  result: 'ok'
  statistics: Record<string, MangaStatistics>
}



export interface ChapterData {
  id: string
  attributes: {
    chapter: string | null,
    volume: string | null,
    title: string | null
    publishAt: string,
    translatedLanguage?: string | [];
  }
  relationships: {
    id: string
    type: string
  }[]
}

export interface LatestChaptersResponse {
  result: 'ok'
  data: ChapterData[]
}

export interface MangaTopFollowedChapters {
  chapterId: string;
  chapterNumber: string;
  chapterTilte: string | null;
  publishAt: string ;
  title: string ;
  cover: string;
  mangaId: string;
  rating?: number;
  follows?: number;
  author?: {
    name: string,
    link?: string
  };
  artist?: {
    name: string,
    link?: string | null
  };
}
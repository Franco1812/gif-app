export interface TenorResponse {
  results: TenorItem[];
  next: string;
}

export interface TenorItem {
  id: string;
  title: string;
  content_description: string;
  content_rating: string;
  h1_title: string;
  media: TenorMedia[];
  bg_color: string;
  created: number;
  itemurl: string;
  url: string;
  tags: string[];
  flags: string[];
  shares: number;
  hasaudio: boolean;
  hascaption: boolean;
  source_id: string;
  composite: any;
}

export interface TenorMedia {
  gif: TenorMediaFormat;
  mp4: TenorMediaFormat;
  nanomp4: TenorMediaFormat;
  nanowebm: TenorMediaFormat;
  tinygif: TenorMediaFormat;
  tinywebm: TenorMediaFormat;
  webm: TenorMediaFormat;
}

export interface TenorMediaFormat {
  dims: number[];
  duration: number;
  preview: string;
  size: number;
  url: string;
}

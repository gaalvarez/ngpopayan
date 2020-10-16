export interface BookSearch {
  totalItems: number;
  items: BookItem[];
}

export interface BookItem {
  id: string;
  volumeInfo: VolumeInfo;
}

export interface VolumeInfo {
  title: string;
  subtitle: string;
  description: string;
  authors: string[];
  pageCount: number;
  imageLinks: {
    thumbnail: string;
  };
}

export interface BookView {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  authors: string[];
  pageCount: number;
  urlImagen: string;
}

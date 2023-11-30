export interface Image {
  id: number;
  url: string;
  width: number;
  height: number;
  position: number;
  recipeId: number;
  cloudinaryPublicId: string;
}

export interface ImageData {
  id?: number;
  name?: string;
  width?: number;
  height?: number;
  url?: string;
  path?: string;
  size?: string;
  type?: string;
  data?: string | undefined;
  position?: number;
  cloudinaryId?: string;
}

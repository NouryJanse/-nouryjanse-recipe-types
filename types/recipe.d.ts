import { RecipeIngredient } from "..";
import { Image } from "./image";

export interface Recipe {
  id: number;
  name?: string;
  description?: string;
  authorId: string;
  course?: string;
  createdAt: string;
  updatedAt: string;
  images?: Image[];
  ingredients: RecipeIngredient[];
  published: boolean;
}

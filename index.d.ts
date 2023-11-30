import "./types/cloudinary";
import "./types/error";
import "./types/image";
import "./types/input_form";
import "./types/recipe";
import "./types/user";

export interface Ingredient {
  id: number;
  name?: string;
  unit: string;
  published: boolean;
  calorieCount: number;
  createdAt: string;
  updatedAt: string;
  amount: number;
}

type RecipeIngredient = {
  id: number;
  authorId: string;
  recipeId: number;
  ingredientId?: number;
  name?: string;
  amount?: number;
  unit?: string;
};

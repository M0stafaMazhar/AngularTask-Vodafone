export interface RecipeInterface {
    title: string;
    description: string;
    likes: number;
    readyTime: number;
    pricePerServing: number;
    instructions: string;
    image: string;
    ingredients: string[]
    isFavorite: boolean;
}

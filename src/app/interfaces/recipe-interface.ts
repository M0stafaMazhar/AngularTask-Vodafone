export interface RecipeInterface {
    id: number;
    title: string;
    description: string;
    likes: number;
    readyTime: number;
    pricePerServing: number;
    instructions: string;
    image: string;
    ingredients: {name: string}[]
    isFavorite: boolean;
}

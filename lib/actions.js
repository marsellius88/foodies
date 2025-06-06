"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isTextEmpty(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  if (
    isTextEmpty(meal.title) ||
    isTextEmpty(meal.summary) ||
    isTextEmpty(meal.instructions) ||
    isTextEmpty(meal.creator) ||
    isTextEmpty(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: "Invalid input." };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}

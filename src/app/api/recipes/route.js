// app/api/recipes/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Recipe from '@/models/recipe';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
  const formData = await req.formData();
  const title = formData.get('title');
  const ingredients = formData.get('ingredients');
  const instructions = formData.get('instructions');
  const file = formData.get('image');

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const filename = Date.now() + '-' + file.name;
 const uploadsDir = path.join(process.cwd(), 'public/uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}


  await connectDB();
  const newRecipe = new Recipe({
    title,
    ingredients,
    instructions,
    image: '/uploads/' + filename,
  });

  await newRecipe.save();

  return NextResponse.json({ message: 'Saved' });
}

import { NextResponse } from 'next/server'
import { connect } from '@/db/dbConfig'
import { upload } from '@/helpers/upload'
import Category from '@/modals/categoryModel'
import CustomError from '@/utils/Error'

await connect()

export async function POST(req) {
  try {
    const formData = await req.formData()
    const obj = {}
    if (formData.get('image')) {
      const img = await upload(formData.get('image') || null, 'category')
      if (!img.image) {
        return NextResponse.json(CustomError.notFoundError(img.error), { status: 404 })
      }
      obj.image = img.image
    }
  
    if (formData.get('logo')) {
      const logo = await upload(formData.get('logo') || null, 'category')
      if (!logo.image) {
        return NextResponse.json(CustomError.notFoundError(logo.error), { status: 404 })
      }
      obj.logo = logo.image
    }
    obj.name = formData.get('name')|| null ;
    obj.description = formData.get('description')|| null;

    if(!obj.name || !obj.description){
      return NextResponse.json(CustomError.badRequestError({message:"Name and description are required fields"}), { status: 400})
    }
    if (formData.get('slug')) {
      obj.slug = formData.get('slug')
    }
    obj.status = formData.get('status')
    const sub = formData.get('subcategoris').split(',')
    if (sub.length && sub[0].length ) {
      obj.subcategoris = formData.get('subcategoris').split(',')
    }
    console.log(obj)
   
    const data = await Category.create(obj)  
    return NextResponse.json({
      success: true,
      data,
      message: "category created successfully"
    },{status: 201})
  } catch (err) {
    return NextResponse.json(CustomError.internalServerError(err), { status: 500 })
  }
}
export async function GET(req, res){
  try{
     const url = new URL(req.url);
     const name = url.searchParams.get('search');
     console.log(name)
     const data = await Category.find({
      $text:{$search:name}
     });
    // Handle the data
    console.log(data);
    return NextResponse.json({
      message:"catagory founed",
      data,     
      success:true 
    })       
                   
  }catch(error){
    return NextResponse.json(CustomError.internalServerError(error), {status:500})}
}
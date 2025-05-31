import { NextResponse } from "next/server"
import { hash } from "bcryptjs"
import { z } from "zod"

import { db } from "@/lib/db"

const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const body = signUpSchema.parse(json)

    const existingUser = await db.user.findUnique({
      where: { email: body.email },
    })

    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 400 }
      )
    }

    const hashedPassword = await hash(body.password, 10)

    const user = await db.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword,
      },
    })

    const { password: _, ...result } = user

    return NextResponse.json(
      { message: "User created successfully", user: result },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: error.errors[0].message }, { status: 400 })
    }

    return NextResponse.json(
      { message: "Something went wrong" },
 
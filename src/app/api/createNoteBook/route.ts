// /api/createNoteBook

import { auth } from "@clerk/nextjs"
import { NodeNextResponse } from "next/dist/server/base-http/node"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const {userId} = auth()
  if(!userId){
    return new NextResponse('unauthorised', {status:401})
  }
  const body = await req.json()
  const {name} = body
}
// src/app/api/submit/route.ts (App Router) OR pages/api/submit.ts (Pages Router)
import { NextRequest, NextResponse } from 'next/server'; // for app router
import { connectToDatabase } from '@/lib/mongodb';
import FormSubmission from '@/models/FormSubmission';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    await connectToDatabase();
    const record = await FormSubmission.create({
      tableName: body.table,
      data: body.data,
    });

    console.log('[API] Data to be saved:', { table: body.table, data: body.data });
    console.log('[API] MongoDB record created:', record);


    return NextResponse.json({ success: true, id: record._id });
  } catch (err: any) {
    console.error('MongoDB Error:', err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

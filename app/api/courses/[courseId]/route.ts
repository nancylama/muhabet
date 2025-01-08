import db from "@/db/drizzle"
import { units } from "@/db/schema"
import { getIsAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server";

export const GET = async (
    req: Request, { params }: { params: { courseId: number } },
) => {
    if (!getIsAdmin) {
        return new NextResponse("Unauthorized", { status: 403 });
    }

    const data = await db.query.courses.findFirst({
        where: eq(units.id, params.courseId),
    });

    return NextResponse.json(data);
};

export const PUT = async (
    req: Request, { params }: { params: { courseId: number } },
) => {
    if (!getIsAdmin) {
        return new NextResponse("Unauthorized", { status: 403 });
    }

    const body = await req.json();
    const data = await db.update(units).set({
        ...body,
    }).where(eq(units.id, params.courseId)).returning();

    return NextResponse.json(data[0]);
};

export const DELETE = async (
    req: Request, { params }: { params: { courseId: number } },
) => {
    if (!getIsAdmin) {
        return new NextResponse("Unauthorized", { status: 403 });
    }

    const data = await db.delete(units)
    .where(eq(units.id, params.courseId)).returning();

    return NextResponse.json(data[0]);
};
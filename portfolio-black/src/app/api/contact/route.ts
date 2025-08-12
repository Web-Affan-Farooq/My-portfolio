import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import sanityClient from "@/lib/sanity";
import { z, ZodError } from "zod";
import { ContactFormSchema } from "@/validations";

type Body = z.infer<typeof ContactFormSchema>;

export const POST = async (req: NextRequest) => {
    const body: Body = await req.json();
    try {
        const sanitizedData = ContactFormSchema.parse(body);
        try {
            const payload = {
                _type: "Message",
                ...sanitizedData,
            }
            await sanityClient.create(payload);
            return NextResponse.json({
                message: "Message sent successfully",
                redirect: "/contact/success"
            }, {
                status: 200
            }
            )
        } catch (err) {
            console.log("Error : ", err);

            return NextResponse.json({
                message: "An error occured",
                redirect: "/contact/failure"
            }, {
                status: 500
            }
            )
        }
    } catch (err) {
        console.log("Error : ", err);

        if (err instanceof ZodError) {
            return NextResponse.json({
                message: err.message[0]
            }, {
                status: 400
            }
            )
        }
    }
}
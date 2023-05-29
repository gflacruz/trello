import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const {todos} = await request.json();
    console.log(todos)


    
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        n: 1,
        stream: false,
        messages: [
            {
                role: 'system',
                content: "When responding, welcome the user always as Gabriel La Cruz and say get ready for a productive day! Limit the response to 200 characters"
            },
            {
                role: 'user',
                content: `Hi there, provide a summary of the following todos. Count how many todos are in each catergory such as To do, in progress, and done. Then tell the user do their best! Here's the day: ${JSON.stringify(todos)}`
            }
        ]
    })

    const { data } = response;

    console.log("data is: ", data)
    console.log(data.choices[0].message)

    return NextResponse.json(data.choices[0].message);
}

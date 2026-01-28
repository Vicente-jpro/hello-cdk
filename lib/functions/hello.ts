export const handler = async (event: any) => {
    console.log("Hello, CDK! Event:", event);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello, CDK!" })
    };
} 
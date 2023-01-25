
export const API_ROOT = 'https://www.reddit.com';

const getData = async () => {
    try {
        const response = await fetch(API_ROOT);
        
        // handles success
        if (response.ok) {
            const jsonResponse = await response.json();
            // Code to execute with jsonResponse
        }

        // handles error
        throw new Error("Request failed!");
    } catch (error) {
        console.log(error);
    }
}

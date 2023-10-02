import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zisysdvhxncmwqwsiuyo.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inppc3lzZHZoeG5jbXdxd3NpdXlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5NTQ3NDEsImV4cCI6MjAxMTUzMDc0MX0.OSpXd1SR1PYx-nt2LsFcFYQpRovCZCFjJF1oJlMWbAY"
const supabase = createClient(supabaseUrl, supabaseKey);


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const { data: comments, error } = await supabase.from('kick-starter-comments').select('*');
    if (error || !comments) {
        return {
            status: 500,
            error: error?.message || "No comments returned from the server."
        };
    }
    return {
        props: {
            comments
        }
    };
}

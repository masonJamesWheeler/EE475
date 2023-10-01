import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zisysdvhxncmwqwsiuyo.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inppc3lzZHZoeG5jbXdxd3NpdXlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5NTQ3NDEsImV4cCI6MjAxMTUzMDc0MX0.OSpXd1SR1PYx-nt2LsFcFYQpRovCZCFjJF1oJlMWbAY"
const supabase = createClient(supabaseUrl, supabaseKey);

/** Default export of supabase client. */
export default supabase;

/** Interface representing a Kickstarter comment. */
export interface KickstarterComment {
    id: number;
    created_at: string;
    content: string;
  }

/** Fetches comments from the Kickstarter page from the database. */
export async function getKickstarterComments() {
    const { data: comments, error } = await supabase
      .from('kick-starter-comments')
      .select('*');
  
    if (error || !comments) {
      return {
        status: 500,
        body: { error: error?.message || "No comments returned from the server." }
      };
    }
  
    return {
      body: comments
    };
  }

/** Posts a new comment to the Kickstarter page in the database. */
export async function postKickstarterComment(content: string) {
    const comment: Partial<KickstarterComment> = {
      content,
      created_at: new Date().toISOString()
    };
  
    const { data, error } = await supabase
      .from('kick-starter-comments')
      .insert([comment]);
  
    if (error || !data) {
      return {
        status: 500,
        body: { error: error?.message || "No data returned from the server." }
      };
    }
  
    return {
      status: 200,
      body: data[0]
    };
  }
  
  
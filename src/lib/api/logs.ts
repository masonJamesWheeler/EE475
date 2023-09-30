import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zisysdvhxncmwqwsiuyo.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inppc3lzZHZoeG5jbXdxd3NpdXlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5NTQ3NDEsImV4cCI6MjAxMTUzMDc0MX0.OSpXd1SR1PYx-nt2LsFcFYQpRovCZCFjJF1oJlMWbAY"
const supabase = createClient(supabaseUrl, supabaseKey);

/** Default export of supabase client. */
export default supabase;

/** Interface representing a work log. */
export interface Log {
  id: number;
  content: string;
  date: string;
  author: string;
  likes: number;
  comment: boolean;
  parent?: number;  
  comments?: Log[];
}

/** Fetches and associates logs and comments from the database. */
export async function get() {
  const { data: logs, error: logsError } = await supabase
    .from('work-logs')
    .select('*')
    .eq('comment', false);

  if (logsError || !logs) {
    return {
      status: 500,
      body: { error: logsError?.message || "No logs returned from the server." }
    };
  }

  const { data: comments, error: commentsError } = await supabase
    .from('work-logs')
    .select('*')
    .eq('comment', true);

  if (commentsError || !comments) {
    return {
      status: 500,
      body: { error: commentsError?.message || "No comments returned from the server." }
    };
  }

  logs.forEach(log => {
    log.comments = comments.filter(comment => comment.parent === log.id);
  });

  return {
    body: logs
  };
}

/** Posts a new log to the database. */
export async function post(content: string, author: string) {
  const log: Partial<Log> = {
    content,
    date: new Date().toISOString(),
    author,
    likes: 0,
    comment: false
  };

  const { data, error } = await supabase
    .from('work-logs')
    .insert([log]);

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

/** Likes a specific log in the database. */
export async function likeLog(id: number) {
  const { data: logData, error: logError } = await supabase
    .from('work-logs')
    .select('likes')
    .eq('id', id)
    .single();

  if (logError || !logData) {
    return {
      status: 500,
      body: { error: logError?.message || "Unable to retrieve log data." }
    };
  }

  const newLikes = logData.likes + 1;
  const { error } = await supabase
    .from('work-logs')
    .update({ likes: newLikes })
    .eq('id', id);

  if (error) {
    return {
      status: 500,
      body: { error: error.message }
    };
  }

  return { status: 200 }; // Return a success status if no errors.
}

/** Posts a comment to a specific log in the database. */
export async function postComment(logId: number, author: string, content: string) {
  const comment: Partial<Log> = {
    content,
    date: new Date().toISOString(),
    author,
    likes: 0,
    comment: true,
    parent: logId
  };

  const { data, error } = await supabase
    .from('work-logs')
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

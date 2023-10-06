import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zisysdvhxncmwqwsiuyo.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inppc3lzZHZoeG5jbXdxd3NpdXlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5NTQ3NDEsImV4cCI6MjAxMTUzMDc0MX0.OSpXd1SR1PYx-nt2LsFcFYQpRovCZCFjJF1oJlMWbAY"
const supabase = createClient(supabaseUrl, supabaseKey);

/** Default export of supabase client. */
export default supabase;

/** Interface representing a work log. */
export interface WeeklyReport {
  id: number;
  content: string;
  date: string;
  author: string;
  likes: number;
  fileURL?: string| null;
  imageURL?: string| null;
}

/** Fetches and associates logs and comments from the database. */
export async function get() {
    const { data: logs, error: logsError } = await supabase
      .from('weekly-reports')
      .select('*')
  
    if (logsError || !logs) {
      return {
        status: 500,
        body: { error: logsError?.message || "No logs returned from the server." }
      };
    }

  
    return {
      body: logs
    };
  }

/** Uploads a file to the 'Files' bucket and returns the file URL. */
async function uploadFile(file: File): Promise<string | null> {
  const filePath = `${file.name}`;
  const { error } = await supabase
    .storage
    .from('Files')
    .upload(filePath, file);

  if (error) {
    console.error('Error uploading file:', error);
    return null;
  }

  return filePath;
}

/** Uploads an image to the 'Images' bucket and returns the image URL. */
async function uploadImage(image: File): Promise<string | null> {
    const imagePath = `${image.name}`;
    const { error } = await supabase
      .storage
      .from('Images')
      .upload(imagePath, image);
  
    if (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  
    return imagePath;
  }
  
  /** Posts a new weekly report to the database. */
  export async function post(content: string, author: string, file?: File, image?: File) {
    let fileURL = null;
    let imageURL = null;
  
    if (file) {
      fileURL = await uploadFile(file);
    }
  
    if (image) {
        console.log('Image name:', image.name);
        imageURL = await uploadImage(image);
    }
  
    const report: Partial<WeeklyReport> = {
      content,
      author,
      likes: 0,
      fileURL,
      imageURL
    };

    console.log('Report:', report);
  
    const { data, error } = await supabase
      .from('weekly-reports')
      .insert([report]);
  
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
      .from('weekly-reports')
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
      .from('weekly-reports')
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



/** Retrieves a file from the 'Files' bucket. */
export async function getFile(filePath: string) {
  const { data, error } = await supabase
    .storage
    .from('Files')
    .download(filePath);

  if (error) {
    return {
      status: 500,
      body: { error: error.message }
    };
  }

  return {
    status: 200,
    body: data
  };
}

/** Retrieves an image from the 'Images' bucket. */
export async function getImage(imagePath: string) {
    const { data, error } = await supabase
      .storage
      .from('Images')
      .download(imagePath);
  
    if (error) {
      return {
        status: 500,
        body: { error: error.message }
      };
    }
  
    return {
      status: 200,
      body: data
    };
  }

/** Lists all the files within a bucket or specific folder. */
export async function listFiles(folderPath?: string) {
  const { data, error } = await supabase
    .storage
    .from('Files')
    .list(folderPath || '');

  if (error) {
    return {
      status: 500,
      body: { error: error.message }
    };
  }

  return {
    status: 200,
    body: data
  };
}

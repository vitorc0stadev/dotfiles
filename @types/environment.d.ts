declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT: string;
      DATABASE_URL: string;
      API_KEY?: string;
      NEXT_PUBLIC_API_KEY: string;
    }
  }
}

export {};

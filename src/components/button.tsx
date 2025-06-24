'use client';

import { useCallback } from "react";

export default function Button() {
  const onLogin = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Telegram.Login.auth({
      bot_id: '547043436',
      origin: 'https://example-nine-beige.vercel.app',
      embed: '1',
      request_access: 'write',
      return_to: 'https://example-nine-beige.vercel.app',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onAuthCallback(data: any) {
        console.log('data:', data);
      }
    });
  }, []);

  return (
    <button className='button' onClick={onLogin}>Login</button>
  );
}

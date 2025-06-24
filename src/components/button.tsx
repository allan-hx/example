'use client';

import Script from "next/script";
import { useCallback } from "react";

export default function Button() {
  const onLogin = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Telegram.Login.auth({
      bot_id: '7560097186',
      origin: 'https://example-eosin.vercel.app',
      embed: '1',
      request_access: 'write',
      return_to: 'https://example-eosin.vercel.app/login',
    });
  }, []);

  return (
    <>
      <button className='button' onClick={onLogin}>Login</button>
      <Script  src="/telegram.js" ></Script>
    </>
  );
}
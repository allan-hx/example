'use client';

import Script from "next/script";
import { useCallback } from "react";

export default function Button() {
  const onLogin = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Telegram.Login.auth({
      bot_id: '547043436',
      origin: 'https://example-eosin.vercel.app',
      embed: '1',
      request_access: 'write',
      return_to: 'https://example-eosin.vercel.app/',
    });
  }, []);

  return (
    <>
      <button className='button' onClick={onLogin}>Login</button>
      <Script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="Hugo_Web_Test_Bot" data-size="medium" data-userpic="false" data-auth-url="allan-hx" data-request-access="write"></Script>
    </>
  );
}
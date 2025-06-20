'use client';

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).onTelegramAuth = function(user: any) {
      console.log('user:', user);
    }
  }, []);

  return (
    <div className='w-screen h-screen flex align-center justify-center'>
      <script
        async
        src='https://telegram.org/js/telegram-widget.js?22'
        data-telegram-login='Hugo_ovo_bot'
        data-size='medium'
        data-userpic='false'
        data-onauth='onTelegramAuth(user)'
        data-request-access='write'
      ></script>
    </div>
  )
}

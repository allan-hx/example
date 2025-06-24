import Script from 'next/script'
import { useCallback } from 'react'
 
export default function Index() {
  const onLogin = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Telegram.Login.auth({
      bot_id: '7877671777',
      origin: 'https://example-nine-beige.vercel.app',
      embed: '1',
      request_access: 'write',
      return_to: 'https://example-nine-beige.vercel.app/',
    });
  }, []);

  return (
    <>
      <Script src="https://telegram.org/js/telegram-widget.js" />
      <div className='w-screen h-screen flex items-center justify-center'>
        <button className='button' onClick={onLogin}>Login</button>
      </div>
    </>
  )
}

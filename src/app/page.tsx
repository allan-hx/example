import Button from '@/components/button'
import Script from 'next/script'
 
export default function Index() {
  return (
    <>
      <Script src="https://telegram.org/js/telegram-widget.js" />
      <div className='w-screen h-screen flex items-center justify-center'>
        <Button />
      </div>
    </>
  )
}

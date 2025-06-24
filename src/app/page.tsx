import Script from 'next/script'
 
export default function Index() {
  return (
    <>
      <Script src="https://telegram.org/js/telegram-widget.js" />
      <div className='button'>Login</div>
    </>
  )
}

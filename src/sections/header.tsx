import { Button } from '@/components/ui/button'
import { Bungee_Shade } from 'next/font/google'


const bungee = Bungee_Shade({
  subsets: ['latin'],
  weight: '400'
})

export default function Header() {
  return (
    <header className="dark:bg-darkBg inset-0 flex min-h-[80dvh] w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className="mx-auto w-container max-w-full px-5 py-[110px] text-center lg:py-[150px]">
        <h1 className={`text-5xl md:text-7xl lg:text-9xl ${bungee.className}`}>
          funky()
        </h1>
        <p className="my-12 mt-8 text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed">
        Unleash the Funk in Your Code!
          <br /> Transforming Ideas into Dynamic Software Solutions.
        </p>
        <Button
          size="lg"
          className="h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl"
        >
          Contact Us
        </Button>
      </div>
    </header>
  )
}

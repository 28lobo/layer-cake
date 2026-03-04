import Link from 'next/link'
import { Title } from '@/components/title'
import Button from '@/components/button'

export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Layer Caker Home Page</Title>
      <Button>
        {children}
      </Button>
      <hr />
      <Link href="/posts">Posts index &rarr;</Link>
    </section>
  )
}
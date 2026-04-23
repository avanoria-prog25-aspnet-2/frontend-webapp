import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main>
      <div>
        <Image
          src="/images/notfound.png"
          alt="Page not found illustration"
          width={420}
          height={320}
          priority
        />

        <h1>Page Not Found!</h1>

        <p>
          Sorry, the page you are looking for doesn&apos;t exist or has been removed.
          <br />
          Keep exploring our site.
        </p>

        <Link href="/dashboard">
          <span>Back to Home</span>
          <span  aria-hidden="true"></span>
        </Link>
      </div>
    </main>
  )
}
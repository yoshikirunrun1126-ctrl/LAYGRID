import { NextResponse } from 'next/server'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/yoshiki.laygrid@gmail.com'

export async function POST(request: Request) {
  const origin = new URL(request.url).origin
  const successUrl = `${origin}/?submitted=contact#contact`
  const errorUrl = `${origin}/?contact_error=1#contact`

  const formData = await request.formData()

  const name = formData.get('name')?.toString().trim()
  const email = formData.get('email')?.toString().trim()
  const message = formData.get('message')?.toString().trim()
  const company = formData.get('company')?.toString().trim()

  if (!name || !email || !message) {
    return NextResponse.redirect(errorUrl, 303)
  }

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
        company: company || '（未入力）',
        _subject: 'LAYGRID お問い合わせ',
        _template: 'table',
      }),
    })

    const data = (await response.json()) as {
      success?: boolean | string
    }

    if (data.success === true || data.success === 'true') {
      return NextResponse.redirect(successUrl, 303)
    }
  } catch (error) {
    console.error('Contact form submission failed:', error)
  }

  return NextResponse.redirect(errorUrl, 303)
}

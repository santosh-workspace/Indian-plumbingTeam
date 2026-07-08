import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-dark hover:text-primary font-mono text-xs uppercase tracking-widest mb-10">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight mb-6">Privacy Policy</h1>
        <p className="text-muted leading-relaxed mb-8">
          Rescue Plumbers Plus Ltd ("we", "us") is committed to protecting your privacy. This policy explains
          what information we collect through this website and how we use it.
        </p>

        <div className="space-y-8 text-[15px] leading-relaxed">
          <section>
            <h2 className="font-display font-bold text-xl mb-2">Information we collect</h2>
            <p className="text-muted">
              When you complete our enquiry form we collect the name, email address, telephone number, postcode
              and message you provide, along with any images you choose to attach. We only use these details to
              respond to your enquiry and arrange work.
            </p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl mb-2">How we use your information</h2>
            <p className="text-muted">
              We use your details solely to contact you about your request, provide quotations and deliver our
              plumbing services. We do not sell your data or use it for third-party marketing.
            </p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl mb-2">Data retention &amp; your rights</h2>
            <p className="text-muted">
              We keep enquiry information only as long as necessary to serve you and meet our legal obligations.
              Under UK GDPR you may request access to, correction of, or deletion of your personal data at any
              time by contacting us on 07778 077760.
            </p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl mb-2">Contact</h2>
            <p className="text-muted">
              For any privacy questions, call Rescue Plumbers Plus on 07778 077760.
            </p>
          </section>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-widest text-muted mt-14">
          © {new Date().getFullYear()} Rescue Plumbers Plus Ltd
        </p>
      </div>
    </div>
  )
}

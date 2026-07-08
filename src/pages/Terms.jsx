import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-dark hover:text-primary font-mono text-xs uppercase tracking-widest mb-10">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight mb-6">Terms &amp; Conditions</h1>
        <p className="text-muted leading-relaxed mb-8">
          These terms govern the services provided by Rescue Plumbers Plus Ltd. By engaging us you agree to the
          following.
        </p>

        <div className="space-y-8 text-[15px] leading-relaxed">
          <section>
            <h2 className="font-display font-bold text-xl mb-2">Quotations</h2>
            <p className="text-muted">
              Quotations are provided free of charge and are valid for 30 days. Any work identified as additional
              once on site will be discussed and agreed with you before it is carried out.
            </p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl mb-2">Workmanship</h2>
            <p className="text-muted">
              All work is carried out by our experienced team to a professional standard. We are fully insured
              and stand behind the work we complete, including our guaranteed leak-stop service.
            </p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl mb-2">Emergency call-outs</h2>
            <p className="text-muted">
              Our 24/7 emergency service aims to attend as quickly as possible. Call-out and out-of-hours rates
              will be confirmed with you when you call so there are no surprises.
            </p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl mb-2">Payment</h2>
            <p className="text-muted">
              Payment terms are agreed at the time of booking. Please contact us on 07778 077760 with any
              questions about a job or invoice.
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

export default function ContactPage() {
  return (
    <section className="space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-sm font-medium text-orange-500">
          Get in touch
        </span>

        <h1 className="text-3xl md:text-4xl font-semibold">
          Contact YourLocal
        </h1>

        <p className="text-neutral-300">
          If you need help, have a billing question, or want to get in touch,
          you can contact us using the details below.
        </p>
      </div>

      {/* Contact cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
        {/* Support */}
        <div className="relative">
          <div className="absolute inset-0 bg-orange-500/10 blur-2xl rounded-2xl" />
          <div className="relative border border-neutral-800 rounded-2xl p-8 bg-neutral-900">
            <h2 className="text-xl font-semibold mb-2">
              Support
            </h2>
            <p className="text-neutral-300 mb-4">
              For technical issues, account questions, or general help with
              the app.
            </p>
            <p className="text-orange-500 font-medium">
              helpdesk@yourlocalapp.ie
            </p>
          </div>
        </div>

        {/* Billing */}
        <div className="relative">
          <div className="absolute inset-0 bg-orange-500/10 blur-2xl rounded-2xl" />
          <div className="relative border border-neutral-800 rounded-2xl p-8 bg-neutral-900">
            <h2 className="text-xl font-semibold mb-2">
              Billing
            </h2>
            <p className="text-neutral-300 mb-4">
              For subscription, invoicing, or payment-related enquiries.
            </p>
            <p className="text-orange-500 font-medium">
              billings@yourlocalapp.ie
            </p>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="max-w-3xl text-sm text-neutral-400">
        We aim to respond to all enquiries as quickly as possible during
        business hours.
      </div>
    </section>
  );
}

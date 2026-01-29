export default function PrivacyPage() {
  return (
    <section className="space-y-16 max-w-4xl">
      {/* Header */}
      <div className="space-y-4">
        <span className="text-sm font-medium text-orange-500">
          Legal information
        </span>
        <h1 className="text-3xl md:text-4xl font-semibold">
          Privacy Policy & Terms of Service
        </h1>
        <p className="text-neutral-300">
          This page explains how YourLocal collects and uses data, as well as
          the terms that apply when using the app and website.
        </p>
      </div>

      {/* Privacy */}
      <div className="border border-neutral-800 rounded-2xl p-8 bg-neutral-900 space-y-4">
        <h2 className="text-2xl font-semibold">Privacy Policy</h2>

        <p className="text-neutral-300">
          YourLocal respects your privacy. We collect only the data necessary
          to provide and operate our services, including account information,
          business details, and basic usage data.
        </p>

        <p className="text-neutral-300">
          Data is used to manage accounts, deliver app functionality, process
          subscriptions, and improve user experience. We do not sell personal
          data to third parties.
        </p>

        <p className="text-neutral-300">
          Users can delete their account at any time within the app. Account
          deletion permanently removes associated personal data from our
          systems, subject to legal or regulatory requirements.
        </p>

        <p className="text-neutral-300">
          For privacy-related questions or requests, please contact{" "}
          <span className="text-orange-500">
            helpdesk@yourlocalapp.ie
          </span>
          .
        </p>
      </div>

      {/* Terms */}
      <div className="border border-neutral-800 rounded-2xl p-8 bg-neutral-900 space-y-4">
        <h2 className="text-2xl font-semibold">Terms of Service</h2>

        <p className="text-neutral-300">
          By using the YourLocal app or website, you agree to use the service
          responsibly and in compliance with applicable laws and regulations.
        </p>

        <p className="text-neutral-300">
          Business users are responsible for the content they publish,
          including loyalty offers, vouchers, events, and updates shared with
          customers.
        </p>

        <p className="text-neutral-300">
          Subscriptions, billing, and payments for business accounts are
          handled securely through third-party payment providers.
        </p>

        <p className="text-neutral-300">
          Your Social Local Limited reserves the right to update these terms
          when necessary. Continued use of the service constitutes acceptance
          of any updated terms.
        </p>

        <p className="text-neutral-300">
          These terms are governed by the laws of Ireland.
        </p>
      </div>
    </section>
  );
}

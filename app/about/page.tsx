export default function AboutPage() {
  return (
    <section className="space-y-16 max-w-4xl">
      {/* Header */}
      <div className="space-y-4">
        <span className="text-sm font-medium text-orange-500">
          About us
        </span>

        <h1 className="text-3xl md:text-4xl font-semibold">
          About YourLocal
        </h1>

        <p className="text-neutral-300 max-w-2xl">
          YourLocal is built to help local communities thrive by connecting
          people with the businesses they care about — through simple,
          modern digital tools.
        </p>
      </div>

      {/* Main content */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="border border-neutral-800 rounded-2xl p-8 bg-neutral-900">
          <h2 className="text-xl font-semibold mb-3">
            Our mission
          </h2>
          <p className="text-neutral-300">
            Our mission is to strengthen local economies by helping businesses
            attract, retain, and communicate with customers, while giving
            consumers an easy way to discover, support, and stay connected
            with local businesses.
          </p>
        </div>

        <div className="border border-neutral-800 rounded-2xl p-8 bg-neutral-900">
          <h2 className="text-xl font-semibold mb-3">
            Who we support
          </h2>
          <p className="text-neutral-300">
            We support both consumers and businesses with a mobile-first
            platform that brings together local discovery, digital loyalty,
            vouchers, events, and business updates — all in one app.
          </p>
        </div>
      </div>

      {/* Company info */}
      <div className="border border-neutral-800 rounded-2xl p-8 bg-neutral-900/50">
        <p className="text-neutral-300">
          YourLocal is operated by <span className="text-orange-500">
          Your Social Local Limited</span>, a technology company based in
          Ireland and operating across the European Union.
        </p>

        <p className="text-neutral-300 mt-4">
          We are committed to building secure, transparent, and user-friendly
          products that help local businesses grow while delivering real value
          to their customers.
        </p>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <section className="space-y-28">
      {/* HERO */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="inline-block text-sm font-medium text-orange-500">
            Local discovery & digital loyalty
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            One app connecting local businesses and the customers who support
            them
          </h1>

          <p className="text-neutral-300 max-w-xl">
            YourLocal brings local communities together by helping customers
            discover nearby businesses, while giving businesses modern tools to
            engage, reward and communicate with their customers.
          </p>
        </div>

        {/* Right visual card */}
        <div className="relative">
          <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full" />
          <div className="relative border border-neutral-800 rounded-2xl bg-neutral-900 p-8">
            <p className="text-sm text-neutral-400 mb-4">
              What you can do with YourLocal
            </p>
            <ul className="space-y-4">
              <ListItem text="Discover trusted local businesses nearby" />
              <ListItem text="Collect digital loyalty cards and vouchers" />
              <ListItem text="Stay up to date with events and offers" />
              <ListItem text="Businesses communicate directly with customers" />
            </ul>
          </div>
        </div>
      </div>

      {/* TWO SIDES */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Consumers */}
        <div className="border border-neutral-800 rounded-2xl p-8 bg-neutral-900 hover:border-orange-500/40 transition">
          <span className="text-sm text-orange-500 font-medium">
            For Consumers
          </span>

          <h2 className="text-2xl font-semibold mt-3 mb-4">
            Discover and support local businesses
          </h2>

          <p className="text-neutral-300 mb-6">
            Explore local businesses in your area, collect digital loyalty
            cards, receive vouchers, and stay informed about events, offers
            and business updates — all in one place.
          </p>

          <ul className="space-y-3 text-sm text-neutral-300">
            <ListItem text="Find nearby local businesses" />
            <ListItem text="Collect digital loyalty cards" />
            <ListItem text="Receive vouchers and special offers" />
            <ListItem text="Follow businesses and get updates" />
          </ul>
        </div>

        {/* Businesses */}
        <div className="border border-neutral-800 rounded-2xl p-8 bg-neutral-900 hover:border-orange-500/40 transition">
          <span className="text-sm text-orange-500 font-medium">
            For Businesses
          </span>

          <h2 className="text-2xl font-semibold mt-3 mb-4">
            Attract, retain and engage customers
          </h2>

          <p className="text-neutral-300 mb-6">
            Create a business profile, reward loyal customers, promote events
            and communicate directly with your audience using simple digital
            tools designed for local businesses.
          </p>

          <ul className="space-y-3 text-sm text-neutral-300">
            <ListItem text="Create digital loyalty cards" />
            <ListItem text="Send vouchers and promotions" />
            <ListItem text="Promote events and special offers" />
            <ListItem text="Post updates directly to customers" />
          </ul>
        </div>
      </div>

      {/* POSITIONING / TRUST */}
      <div className="border border-neutral-800 rounded-2xl p-10 bg-neutral-900/50">
        <h2 className="text-2xl font-semibold mb-4">
          Designed for local communities
        </h2>
        <p className="text-neutral-300 max-w-3xl">
          YourLocal is built to help local businesses grow while giving
          consumers an easy way to discover, support and stay connected with
          the places they care about — without relying on fragmented tools or
          social media algorithms.
        </p>
      </div>
    </section>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex gap-3">
      <span className="text-orange-500">●</span>
      <span>{text}</span>
    </li>
  );
}

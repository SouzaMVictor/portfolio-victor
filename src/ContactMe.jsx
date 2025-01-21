export function ContactMe() {
  return (
    <div className="pb-32">
      <div className="flex justify-center pt-3">
        <h2 className="text-amber-50 text-2xl font-semibold my-6 inline-block">
          Contact Me
          <div className="h-[1px] w-32 bg-amber-300 inline-block align-middle mx-5"></div>
        </h2>
      </div>
      <div className="text-amber-50 flex flex-col items-center">
        {/* email, zap, linkedin */}
        <h2 className="mb-5">
          Thanks for getting to know me! Feel free to contact me by e-mail,
          WhatsApp or LinkedIn.
        </h2>
        <button>
          <input
            className="text-zinc-950"
            type="email"
            name="email"
            id="email"
            placeholder="         Enter your email"
          />
        </button>
        <button>zapzap</button>
        <button>linkedin</button>
      </div>
    </div>
  );
}

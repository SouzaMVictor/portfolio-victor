export function DownloadCV() {
  return (
    <div>
      <a
        href="/public/CurrículoVictor-FrontEndDeveloperAtt.pdf"
        download="CurrículoVictor-FrontEndDeveloperAtt.pdf"
      >
        <button className="m-2 border border-amber-300 bg-zinc-800 px-12 py-2 font-normal flex items-center justify-center w-72 text-amber-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
            />
          </svg>
          <p>Download My CV!</p>
        </button>
      </a>
    </div>
  );
}

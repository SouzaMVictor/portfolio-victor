export function FooterMobile() {
  //fundir navbar e footer para responsividade (pq nao pensei nisso antes?)
  return (
    <footer className="fixed bg-opacity-80 backdrop-blur-sm bottom-0 left-0 z-20 w-full p-4 bg-zinc-950 rounded-t-2xl border-t-2 border-t-zinc-800">
      <div className="flex justify-around font-semibold text-amber-50">
        <h3>
          <span className="underline decoration-4 decoration-ambar">home</span>
        </h3>
        <h3>about</h3>
        <h3>portfolio</h3>
        <h3>Contact</h3>
      </div>
    </footer>
  );
}

export function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center p-2 pt-50">
      <section>
        <img
          alt="Earthsorth logo"
          src="/earthsworth-logo.png"
          className="rounded-full size-50"
        />
        <div className="flex flex-row mt-1">
          Brought you by &nbsp;
          <a
            className="underline"
            target="_blank"
            href="https://github.com/earthsworth"
          >
            Earthsworth
          </a>
        </div>
      </section>
      <section className="w-full flex flex-row justify-between">
        <p>Not kracked browsers</p>
        <label>
          Disclaimer: Not affiliated with Moonsworth, Solar-Tweaks or Mojang
        </label>
      </section>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 ">
        <div className="min-h-screen flex flex-col items-center gap-6 relative text-center sm:items-start sm:text-left">
          <h1 className=" relative text-6xl font-semibold leading-10 tracking-tight text-black text-zinc-50">
            저의 GitHub Pages 페이지 입니다.{" "}
          </h1>
          <a href="https://github.com/michael07dt2/michael07dt2.github.io" className="pointer">
            Repository Page
          </a>
        </div>
      </main>
      <section id="introduction" className="min-h-screen min-w-200">
        <div className="m-auto items-center">
          <h1 className="text-3xl">Introduction</h1>
        </div>
      </section>
      <section id="project" className="min-h-screen min-w-200">
        <div>
          <h1 className="text-3xl">Project</h1>
        </div>
      </section>
      <section id="skills" className="min-h-screen min-w-200">
        <div>
          <h1 className="text-3xl">Skills</h1>
        </div>
      </section>
    </div>
  );
}
